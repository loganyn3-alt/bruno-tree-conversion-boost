import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const BASE_URL = process.env.SITE_URL || 'http://localhost:5173';

const pages = [
  {
    path: '/',
    output: 'public/og/default.png',
  },
];

async function captureOgImages() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  });

  for (const { path, output } of pages) {
    const url = new URL(path, BASE_URL).toString();
    console.log(`Capturing OG image for ${url}`);

    await page.goto(url, { waitUntil: 'networkidle' });

    const absoluteOutputPath = resolve(process.cwd(), output);
    await mkdir(dirname(absoluteOutputPath), { recursive: true });

    await page.screenshot({
      path: absoluteOutputPath,
      fullPage: false,
    });

    console.log(`Saved OG image to ${absoluteOutputPath}`);
  }

  await browser.close();
}

captureOgImages().catch((error) => {
  console.error('Failed to generate OG images:', error);
  process.exit(1);
});

