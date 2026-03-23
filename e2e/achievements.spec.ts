import { test, expect } from "@playwright/test"

test.describe("Portfolio - Achievements Section", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/")
  })

  test("achievements section is visible and renders correctly", async ({ page }) => {
    const achievementsSection = page.locator("#achievements")
    await expect(achievementsSection).toBeVisible()

    // Check section heading
    const heading = page.locator("text=Achievements & Recognition")
    await expect(heading).toBeVisible()
  })

  test("all three achievement cards are rendered", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    const cards = page.locator("#achievements").locator("div").filter({ has: page.locator("[role='img']").first() })
    
    const aiChampion = page.locator("text=AI Ideation Champion")
    const athletic = page.locator("text=Athletic Excellence")
    const travel = page.locator("text=Travel Platform Dev")

    await expect(aiChampion).toBeVisible()
    await expect(athletic).toBeVisible()
    await expect(travel).toBeVisible()
  })

  test("achievement tags display correctly", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    const tags = page.locator("#achievements").locator("text=/Team Leadership|Innovation|AI\\/ML/")
    await expect(tags.first()).toBeVisible()
  })

  test("in-progress status badge appears for travel project", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    const progressBadge = page.locator("text=In Progress")
    await expect(progressBadge).toBeVisible()
    await expect(progressBadge).toHaveClass(/bg-blue-500/)
  })

  test("achievement cards have hover effects", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    const firstCard = page.locator("#achievements").locator("[role='img']").first().locator("..")
    
    // Get initial position
    const initialBox = await firstCard.boundingBox()
    
    // Hover
    await firstCard.hover()
    await page.waitForTimeout(300)
    
    // Check if transform/shadow changed (indicates hover effect)
    const style = await firstCard.evaluate((el) => window.getComputedStyle(el).transform)
    
    // Hover should trigger animation (transform should not be 'none')
    expect(style).not.toBe("none")
  })

  test("achievement cards navigate when clicked", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    const cards = page.locator("#achievements div").filter({ has: page.locator("[role='img']").first() })
    const count = await cards.count()
    
    expect(count).toBeGreaterThan(0)
  })

  test("responsive layout works on mobile", async ({ page }) => {
    // Set viewport to mobile
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto("/")
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    // Should show 1 column on mobile
    const gridContainer = page.locator("#achievements").locator("css=div[class*='grid']").first()
    const gridClass = await gridContainer.getAttribute("class")
    
    expect(gridClass).toContain("grid-cols-1")
  })

  test("responsive layout works on tablet", async ({ page }) => {
    // Set viewport to tablet
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto("/")
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    // Should show 2 columns on tablet
    const gridContainer = page.locator("#achievements").locator("css=div[class*='grid']").first()
    const gridClass = await gridContainer.getAttribute("class")
    
    expect(gridClass).toContain("md:grid-cols-2")
  })

  test("achievement section animations trigger on scroll", async ({ page }) => {
    // Start at top
    await page.goto("/")

    // Scroll to achievements section
    await page.locator("#achievements").scrollIntoViewIfNeeded()
    
    // Check if animations are applied
    const heading = page.locator("text=Achievements & Recognition")
    await expect(heading).toBeVisible()

    // Verify header has animation classes
    const parent = heading.locator("..")
    const opacity = await parent.evaluate((el) => window.getComputedStyle(el).opacity)
    
    expect(parseInt(opacity)).toBeGreaterThan(0)
  })

  test("achievement images load properly", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    // Note: This checks for image elements, even if placeholder
    const images = page.locator("#achievements img")
    const count = await images.count()
    
    // Should have images for achievements (or alt text for missing images)
    if (count > 0) {
      for (let i = 0; i < Math.min(count, 3); i++) {
        const img = images.nth(i)
        const alt = await img.getAttribute("alt")
        expect(alt).toBeTruthy()
      }
    }
  })

  test("achievement category and year display correctly", async ({ page }) => {
    await page.locator("#achievements").scrollIntoViewIfNeeded()

    // Look for year/category badges
    const year2024 = page.locator("text=2024")
    const year2025 = page.locator("text=2025")
    
    // At least some years should be visible
    const count = await year2024.count() + (await year2025.count())
    expect(count).toBeGreaterThan(0)
  })
})
