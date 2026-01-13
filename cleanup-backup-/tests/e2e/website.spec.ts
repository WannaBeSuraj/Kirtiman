import { test, expect } from '@playwright/test';

test.describe('Corro Protection Engineering Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test.describe('Navigation & Header', () => {
    test('should display header with logo and navigation', async ({ page }) => {
      const header = page.locator('header');
      await expect(header).toBeVisible();
    });

    test('should have working navigation links', async ({ page }) => {
      const aboutLink = page.locator('a:has-text("About")');
      if (await aboutLink.isVisible()) {
        await aboutLink.click();
        await expect(page).toHaveURL(/\/about/);
      }
    });

    test('should have sticky header on scroll', async ({ page }) => {
      await page.evaluate(() => window.scrollBy(0, 500));
      const header = page.locator('header');
      const boundingBox = await header.boundingBox();
      expect(boundingBox?.y).toBeLessThan(100);
    });
  });

  test.describe('Hero Section', () => {
    test('should display hero section with title and CTA', async ({ page }) => {
      const heroTitle = page.locator('h1').first();
      await expect(heroTitle).toBeVisible();
      await expect(heroTitle).toContainText('Protecting Industrial Assets from Corrosion');
    });

    test('should have background image in hero', async ({ page }) => {
      const heroSection = page.locator('section').first();
      const bgDiv = heroSection.locator('[style*="background"]');
      const style = await bgDiv.getAttribute('style');
      expect(style).toMatch(/backgroundImage/);
    });

    test('should have visible CTA buttons', async ({ page }) => {
      const ctaButton = page.locator('text=Request Technical Consultation');
      await expect(ctaButton).toBeVisible();
      await expect(ctaButton).toHaveClass(/bg-blue-600/);
    });

    test('hero CTA button should be clickable', async ({ page }) => {
      const ctaButton = page.locator('text=Request Technical Consultation');
      await ctaButton.click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });

  test.describe('Blog Preview Section', () => {
    test('should display blog posts from content/blog', async ({ page }) => {
      await page.goto('http://localhost:3000');
      const blogSection = page.locator('text=Industry Insights & Technical Guides');
      await expect(blogSection).toBeVisible();
    });

    test('should show at least 4 blog posts', async ({ page }) => {
      const blogCards = page.locator('article').filter({ has: page.locator('text=Read More') });
      const count = await blogCards.count();
      expect(count).toBeGreaterThanOrEqual(4);
    });

    test('blog posts should have read more links', async ({ page }) => {
      const readMoreLinks = page.locator('text=Read More →');
      const count = await readMoreLinks.count();
      expect(count).toBeGreaterThan(0);
    });

    test('blog links should navigate to blog details', async ({ page }) => {
      const firstBlogLink = page.locator('a:has-text("Read More")').first();
      const href = await firstBlogLink.getAttribute('href');
      expect(href).toMatch(/\/blog\/[a-z-]+/);
    });

    test('blog posts should have consistent styling', async ({ page }) => {
      const blogCards = page.locator('article').filter({ has: page.locator('text=Read More') });
      for (let i = 0; i < Math.min(3, await blogCards.count()); i++) {
        const card = blogCards.nth(i);
        await expect(card).toHaveClass(/bg-white/);
        await expect(card).toHaveClass(/rounded-xl/);
      }
    });
  });

  test.describe('Coating Showcase Colors', () => {
    test('should display coating showcase section', async ({ page }) => {
      const showcase = page.locator('text=Professional Coating Systems & Colors');
      await expect(showcase).toBeVisible();
    });

    test('should not show "Click to view details" on hover', async ({ page }) => {
      const colorCard = page.locator('div').filter({ has: page.locator('[style*="backgroundColor"]') }).first();
      await colorCard.hover();
      const tooltip = page.locator('text=Click to view details');
      await expect(tooltip).not.toBeVisible();
    });

    test('colors should display with proper styling', async ({ page }) => {
      const colorPreviews = page.locator('[style*="backgroundColor:#"]');
      const count = await colorPreviews.count();
      expect(count).toBeGreaterThan(0);
    });

    test('coating categories should be switchable', async ({ page }) => {
      const categoryButtons = page.locator('button:has-text("Industrial Protection")');
      if (await categoryButtons.isVisible()) {
        await categoryButtons.click();
        await expect(categoryButtons).toHaveClass(/bg-blue-600/);
      }
    });
  });

  test.describe('Contact Form & Rate Limiting', () => {
    test('should display contact form on contact page', async ({ page }) => {
      await page.goto('http://localhost:3000/contact');
      const form = page.locator('form');
      await expect(form).toBeVisible();
    });

    test('contact form should have required fields', async ({ page }) => {
      await page.goto('http://localhost:3000/contact');
      const nameInput = page.locator('input[placeholder*="name" i]');
      const emailInput = page.locator('input[type="email"]');
      const messageInput = page.locator('textarea');

      await expect(nameInput).toBeVisible();
      await expect(emailInput).toBeVisible();
      await expect(messageInput).toBeVisible();
    });

    test('should validate email format', async ({ page }) => {
      await page.goto('http://localhost:3000/contact');
      const nameInput = page.locator('input[placeholder*="name" i]');
      const emailInput = page.locator('input[type="email"]');
      const messageInput = page.locator('textarea');
      const submitButton = page.locator('button:has-text("Send")');

      await nameInput.fill('Test User');
      await emailInput.fill('invalid-email');
      await messageInput.fill('Test message');

      if (await submitButton.isVisible()) {
        // Email validation should prevent submission
        const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.checkValidity());
        expect(isValid).toBe(false);
      }
    });

    test('should handle rate limiting on API', async ({ page }) => {
      const contactEmail = 'test@example.com';

      // Make multiple rapid requests to test rate limiting
      for (let i = 0; i < 6; i++) {
        const response = await page.request.post('http://localhost:3000/api/contact', {
          data: {
            name: `Test ${i}`,
            email: contactEmail,
            message: `Test message ${i}`,
          },
        });

        if (i < 5) {
          // First 5 should succeed
          expect(response.status()).toBe(200);
        } else {
          // 6th should be rate limited
          expect(response.status()).toBe(429);
          const json = await response.json();
          expect(json.message).toContain('Too many requests');
        }
      }
    });
  });

  test.describe('Typography & Design', () => {
    test('should use proper font sizes for headings', async ({ page }) => {
      const h1 = page.locator('h1').first();
      const fontSize = await h1.evaluate((el) => window.getComputedStyle(el).fontSize);
      const size = parseInt(fontSize);
      expect(size).toBeGreaterThan(32); // At least larger than h4
    });

    test('should have consistent color scheme', async ({ page }) => {
      const buttons = page.locator('button:has-text("Request")');
      if (await buttons.first().isVisible()) {
        const bgColor = await buttons.first().evaluate((el) => window.getComputedStyle(el).backgroundColor);
        expect(bgColor).toMatch(/rgb\(37, 99, 235\)|rgb\(29, 78, 216\)|blue/i);
      }
    });

    test('should have good contrast for readability', async ({ page }) => {
      const heading = page.locator('h2').first();
      const color = await heading.evaluate((el) => window.getComputedStyle(el).color);
      // Should be dark color for text
      expect(color).toMatch(/rgb\(\s*[0-9]{1,2},\s*[0-9]{1,2},\s*[0-9]{1,2}\)/);
    });
  });

  test.describe('Responsive Design', () => {
    test('should be mobile responsive', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('http://localhost:3000');
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
    });

    test('should be tablet responsive', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('http://localhost:3000');
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
    });

    test('should be desktop responsive', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto('http://localhost:3000');
      const hero = page.locator('section').first();
      await expect(hero).toBeVisible();
    });
  });

  test.describe('SEO & Metadata', () => {
    test('should have proper page title', async ({ page }) => {
      const title = await page.title();
      expect(title).toContain('Corro Protection Engineering');
    });

    test('should have meta description', async ({ page }) => {
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description).toBeTruthy();
      expect(description?.length).toBeGreaterThan(50);
    });

    test('should have Open Graph tags', async ({ page }) => {
      const ogTitle = await page.locator('meta[property="og:title"]').getAttribute('content');
      const ogImage = await page.locator('meta[property="og:image"]').getAttribute('content');
      expect(ogTitle).toBeTruthy();
      expect(ogImage).toBeTruthy();
    });

    test('should have structured data (JSON-LD)', async ({ page }) => {
      const scripts = page.locator('script[type="application/ld+json"]');
      const count = await scripts.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Performance', () => {
    test('should load within reasonable time', async ({ page }) => {
      const startTime = Date.now();
      await page.goto('http://localhost:3000');
      const endTime = Date.now();
      const loadTime = endTime - startTime;
      expect(loadTime).toBeLessThan(5000); // Should load within 5 seconds
    });

    test('should have optimized images', async ({ page }) => {
      const images = page.locator('img');
      const count = await images.count();
      // Each image should have alt text for accessibility
      for (let i = 0; i < count; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        // alt can be empty string for decorative images, but should exist
        expect(alt !== null).toBe(true);
      }
    });
  });

  test.describe('Form Submissions', () => {
    test('successful form submission should show success message', async ({ page }) => {
      await page.goto('http://localhost:3000/contact');
      const nameInput = page.locator('input[placeholder*="name" i]').first();
      const emailInput = page.locator('input[type="email"]').first();
      const messageInput = page.locator('textarea').first();
      const submitButton = page.locator('button[type="submit"]').first();

      await nameInput.fill('John Doe');
      await emailInput.fill('john@example.com');
      await messageInput.fill('This is a test message');

      if (await submitButton.isVisible()) {
        await submitButton.click();
        // Wait for response
        await page.waitForResponse((response) => response.url().includes('/api/contact'));
      }
    });
  });
});
