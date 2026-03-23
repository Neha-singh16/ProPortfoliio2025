#!/usr/bin/env node

/**
 * Performance Analysis Script
 * Analyzes bundle size, image sizes, and generates performance report
 * Usage: npm run analyze-performance
 */

const fs = require("fs")
const path = require("path")

const PUBLIC_DIR = path.join(process.cwd(), "public", "images")
const NEXT_DIR = path.join(process.cwd(), ".next")

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i]
}

function analyzeImages(dir, prefix = "") {
  if (!fs.existsSync(dir)) return { total: 0, count: 0, files: [] }

  const files = fs.readdirSync(dir)
  let total = 0
  let count = 0
  const breakdown = {
    webp: 0,
    jpg: 0,
    png: 0,
    other: 0,
  }
  const fileList = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isFile()) {
      total += stat.size
      count++

      const ext = path.extname(file).toLowerCase()
      if (ext === ".webp") breakdown.webp += stat.size
      else if (ext === ".jpg" || ext === ".jpeg") breakdown.jpg += stat.size
      else if (ext === ".png") breakdown.png += stat.size
      else if ([".svg", ".gif"].includes(ext)) breakdown.other += stat.size

      fileList.push({
        name: file,
        size: stat.size,
        formatted: formatBytes(stat.size),
      })
    } else if (stat.isDirectory()) {
      const subDir = analyzeImages(filePath, prefix + "  ")
      total += subDir.total
      count += subDir.count
      fileList.push(...subDir.files)
    }
  }

  return {
    total,
    count,
    breakdown,
    files: fileList.sort((a, b) => b.size - a.size),
  }
}

function main() {
  console.log("\n╔════════════════════════════════════════╗")
  console.log("║     🔍 PERFORMANCE ANALYSIS REPORT    ║")
  console.log("╚════════════════════════════════════════╝\n")

  // Analyze images
  console.log("📊 IMAGE ANALYSIS")
  console.log("─".repeat(40))

  const imageAnalysis = analyzeImages(PUBLIC_DIR)

  console.log(`Total images: ${imageAnalysis.count}`)
  console.log(`Total size: ${formatBytes(imageAnalysis.total)}`)
  console.log("\nBreakdown by format:")
  console.log(`  • WebP:  ${formatBytes(imageAnalysis.breakdown.webp)}`)
  console.log(`  • JPG:   ${formatBytes(imageAnalysis.breakdown.jpg)}`)
  console.log(`  • PNG:   ${formatBytes(imageAnalysis.breakdown.png)}`)
  console.log(`  • Other: ${formatBytes(imageAnalysis.breakdown.other)}`)

  // Top large files
  if (imageAnalysis.files.length > 0) {
    console.log("\nTop 5 largest files:")
    imageAnalysis.files.slice(0, 5).forEach((file, i) => {
      console.log(`  ${i + 1}. ${file.name.padEnd(30)} ${file.formatted.padStart(10)}`)
    })
  }

  // Recommendations
  console.log("\n💡 RECOMMENDATIONS")
  console.log("─".repeat(40))

  let recommendations = 0

  if (imageAnalysis.breakdown.jpg > 0 || imageAnalysis.breakdown.png > 0) {
    console.log("✓ Consider converting remaining JPG/PNG to WebP")
    console.log("  Run: npm run optimize-images")
    recommendations++
  }

  if (imageAnalysis.total > 5 * 1024 * 1024) {
    console.log("✓ Total image size exceeds 5MB")
    console.log("  Consider compressing images further or lazy-loading")
    recommendations++
  }

  console.log("\n✨ Performance metrics will be measured by Lighthouse")
  console.log("   Run: npm run lighthouse")

  console.log("\n")
}

main()
