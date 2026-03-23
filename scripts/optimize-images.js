#!/usr/bin/env node

/**
 * Image Optimization Script
 * Converts images to WebP format and optimizes them
 * Usage: npm run optimize-images
 */

const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const IMAGES_DIR = path.join(process.cwd(), "public", "images")
const ACHIEVEMENTS_DIR = path.join(IMAGES_DIR, "achievements")
const OUTPUT_QUALITY = 75
const PROGRESSIVE_QUALITY = 80

const directories = [
  { path: IMAGES_DIR, extensions: ["jpg", "png", "jpeg"] },
  { path: ACHIEVEMENTS_DIR, extensions: ["jpg", "png", "jpeg"] },
]

async function optimizeImage(inputPath, outputPath, quality = OUTPUT_QUALITY) {
  try {
    const ext = path.extname(inputPath).toLowerCase()

    if (ext === ".png") {
      await sharp(inputPath)
        .webp({ quality })
        .toFile(outputPath)
    } else {
      await sharp(inputPath)
        .webp({ quality })
        .toFile(outputPath)
    }

    const inputSize = fs.statSync(inputPath).size
    const outputSize = fs.statSync(outputPath).size
    const savings = ((1 - outputSize / inputSize) * 100).toFixed(1)

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`)

    return { success: true, savings }
  } catch (error) {
    console.error(`✗ Error optimizing ${inputPath}:`, error.message)
    return { success: false }
  }
}

async function optimizeDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠ Directory not found: ${dir}`)
    return
  }

  const files = fs.readdirSync(dir)
  let totalSavings = 0
  let count = 0

  for (const file of files) {
    const inputPath = path.join(dir, file)
    const ext = path.extname(file).toLowerCase()

    if (![".jpg", ".png", ".jpeg"].includes(ext)) continue

    const outputPath = path.join(dir, file.replace(/\.[^/.]+$/, ".webp"))

    if (fs.existsSync(outputPath)) {
      console.log(`↷ Skipping ${file} (WebP already exists)`)
      continue
    }

    const result = await optimizeImage(inputPath, outputPath)
    if (result.success) {
      totalSavings += parseFloat(result.savings)
      count++
    }
  }

  if (count > 0) {
    console.log(`\n📊 Directory: ${path.basename(dir)} - Avg savings: ${(totalSavings / count).toFixed(1)}%`)
  }
}

async function main() {
  console.log("🖼 Starting image optimization...\n")

  try {
    for (const dir of directories) {
      if (fs.existsSync(dir.path)) {
        console.log(`📁 Processing: ${path.basename(dir.path)}`)
        await optimizeDirectory(dir.path)
        console.log("")
      }
    }

    console.log("✨ Image optimization complete!")
  } catch (error) {
    console.error("❌ Error during optimization:", error)
    process.exit(1)
  }
}

main()
