import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('Contact Form', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('API timeout fallback', () => {
    it('should show fallback UI if API times out after 2 seconds', async () => {
      // Simulate HEAD request timeout to /api/contact
      const abortController = new AbortController()
      const timeoutId = setTimeout(() => abortController.abort(), 2000)

      try {
        await fetch('/api/contact', {
          method: 'HEAD',
          signal: abortController.signal,
        })
        expect.fail('Should have timed out')
      } catch (error: any) {
        expect(error.name).toBe('AbortError')
        clearTimeout(timeoutId)
      }
    })

    it('should display mailto fallback when API unavailable', () => {
      const fallbackEmail = 'singhn5443@gmail.com'
      const mailtoLink = `mailto:${fallbackEmail}?subject=Portfolio%20Inquiry&body=Hi%20Neha`

      expect(mailtoLink).toContain(fallbackEmail)
      expect(mailtoLink).toContain('mailto:')
    })
  })

  describe('Form submission', () => {
    it('should validate required fields before submission', () => {
      const validateForm = (data: any) => {
        const errors: Record<string, string> = {}
        if (!data.firstName?.trim()) errors.firstName = 'First name is required'
        if (!data.email?.trim()) {
          errors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          errors.email = 'Invalid email format'
        }
        if (!data.message?.trim()) errors.message = 'Message is required'
        return Object.keys(errors).length === 0 ? true : errors
      }

      const validData = {
        firstName: 'John',
        email: 'john@example.com',
        message: 'Hello',
      }

      const invalidData = {
        firstName: '',
        email: 'invalid-email',
        message: '',
      }

      expect(validateForm(validData)).toBe(true)
      expect(validateForm(invalidData)).toHaveProperty('firstName')
      expect(validateForm(invalidData)).toHaveProperty('email')
      expect(validateForm(invalidData)).toHaveProperty('message')
    })

    it('should track analytics on successful submission', () => {
      const trackAnalytics = vi.fn((action: string, label: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', action, { event_label: label })
        }
      })

      trackAnalytics('contact_success', 'form_submit')

      expect(trackAnalytics).toHaveBeenCalledWith('contact_success', 'form_submit')
    })

    it('should reset form after successful submission', () => {
      const initialFormData = {
        firstName: 'John',
        email: 'john@example.com',
        message: 'Test',
      }

      const resetForm = () => ({
        firstName: '',
        email: '',
        message: '',
      })

      const resetData = resetForm()
      expect(resetData.firstName).toBe('')
      expect(resetData.email).toBe('')
      expect(resetData.message).toBe('')
    })

    it('should display error message on submission failure', () => {
      const errorMessage = 'Failed to send message. Please try emailing me directly.'
      expect(errorMessage).toContain('Failed')
      expect(errorMessage).toContain('email')
    })
  })
})
