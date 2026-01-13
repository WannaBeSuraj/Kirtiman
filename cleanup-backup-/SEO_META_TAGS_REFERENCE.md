# SEO Meta Tags & Schema Markup Reference

## Overview
This document contains all the meta tags and structured data implemented in your website redesign.

---

## 1. HTML Meta Tags (Head Section)

### Basic Meta Tags
```html
<meta charset="utf-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
<meta name="language" content="English" />
<meta name="revisit-after" content="15 days" />
<meta name="author" content="Corro Protection Engineering" />
<meta name="copyright" content="© 2026 Corro Protection Engineering. All rights reserved." />
```

### SEO Meta Tags
```html
<title>Corro Protection Engineering - Industrial Anticorrosive Coatings & Pipeline Solutions</title>
<meta name="description" content="ISO 9001:2015 certified industrial coating and pipeline fabrication specialist. 18+ years experience in anticorrosive coatings, polyurethane, coal tar epoxy, and pipeline protection across India." />
<meta name="keywords" content="industrial coating solutions, anticorrosive coatings India, pipeline fabrication, corrosion protection, coal tar epoxy coating, polyurethane coating, pipe coating services, surface preparation, cement mortar lining, West Bengal industrial services, ISO 9001 certified coatings" />
<link rel="canonical" href="https://corropaints.com" />
```

### Robots Meta Tags
```html
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
<meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
```

### Language & Regional Tags
```html
<link rel="alternate" hrefLang="en-IN" href="https://corropaints.com" />
<link rel="alternate" hrefLang="en" href="https://corropaints.com/en" />
<link rel="alternate" hrefLang="hi" href="https://corropaints.com/hi" />
```

### Verification Tags
```html
<meta name="google-site-verification" content="YOUR_GOOGLE_CODE" />
<meta name="yandex-verification" content="YOUR_YANDEX_CODE" />
```

---

## 2. Open Graph Meta Tags

### Standard OG Tags
```html
<meta property="og:title" content="Corro Protection Engineering - Industrial Anticorrosive Coatings & Pipeline Solutions" />
<meta property="og:description" content="ISO 9001:2015 certified provider of anticorrosive coatings, pipeline fabrication, and industrial protection systems. 18+ years of trusted service across India." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://corropaints.com" />
<meta property="og:site_name" content="Corro Protection Engineering" />
<meta property="og:locale" content="en_IN" />
```

### OG Image Tags
```html
<!-- Recommended: 1200x630px -->
<meta property="og:image" content="https://corropaints.com/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Corro Protection Engineering - Industrial Coatings" />

<!-- Secondary: 800x800px for better social compatibility -->
<meta property="og:image" content="https://corropaints.com/images/og-image-square.jpg" />
<meta property="og:image:width" content="800" />
<meta property="og:image:height" content="800" />
<meta property="og:image:alt" content="Corro Protection Engineering Logo" />
```

---

## 3. Twitter Card Meta Tags

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Corro Protection Engineering" />
<meta name="twitter:description" content="Industrial anticorrosive coating and pipeline fabrication solutions. ISO 9001 certified, 18+ years experience." />
<meta name="twitter:image" content="https://corropaints.com/images/og-image.jpg" />
<meta name="twitter:creator" content="@corroprotection" />
<meta name="twitter:site" content="@corroprotection" />
```

---

## 4. Apple & Mobile Tags

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
<meta name="apple-mobile-web-app-title" content="Corro Protection Engineering" />
<meta name="mobile-web-app-capable" content="yes" />
<meta name="theme-color" content="#1f2937" />
<meta name="msapplication-TileColor" content="#1f2937" />
```

---

## 5. Additional Tags

```html
<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
<link rel="alternate" hrefLang="en-IN" href="https://corropaints.com" />
<meta name="format-detection" content="telephone=no, email=no" />
<meta name="distribution" content="global" />
<meta name="audience" content="all" />
```

---

## 6. JSON-LD Structured Data

### Organization Schema
```json
{
  "@context": "https://schema.org/",
  "@type": "Organization",
  "name": "Corro Protection Engineering",
  "url": "https://corropaints.com",
  "logo": "https://corropaints.com/images/logo.png",
  "description": "ISO 9001:2015 certified industrial coating and pipeline fabrication specialist",
  "sameAs": [
    "https://www.linkedin.com/company/corro-protection-engineering",
    "https://www.facebook.com/corroprotection",
    "https://twitter.com/corroprotection"
  ],
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "telephone": "+91-9830374408",
    "email": "info@corropaints.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "West Bengal",
    "streetAddress": "Plot No. 233, Durgapur Highway",
    "postalCode": "713305"
  }
}
```

### Local Business Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Corro Protection Engineering",
  "image": "https://corropaints.com/images/logo.png",
  "description": "Industrial anticorrosive coatings and pipeline fabrication solutions",
  "url": "https://corropaints.com",
  "telephone": "+91-9830374408",
  "email": "info@corropaints.com",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN",
    "addressRegion": "West Bengal"
  },
  "priceRange": "$$$"
}
```

### Website Schema (with Search Action)
```json
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "url": "https://corropaints.com",
  "name": "Corro Protection Engineering",
  "description": "Industrial anticorrosive coatings and pipeline fabrication solutions",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://corropaints.com/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Industrial Coating Solutions",
  "provider": {
    "@type": "Organization",
    "name": "Corro Protection Engineering",
    "url": "https://corropaints.com"
  },
  "areaServed": "IN",
  "availableChannel": {
    "@type": "ServiceChannel",
    "serviceUrl": "https://corropaints.com"
  }
}
```

### Product/Service Schema (for each coating type)
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Polyurethane Anticorrosive Coating",
  "description": "Advanced polyurethane protective coating system for industrial assets",
  "brand": {
    "@type": "Brand",
    "name": "Corro Protection Engineering"
  },
  "url": "https://corropaints.com/solutions/anticorrosive-coatings",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "INR",
    "price": "Contact for quote"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "ratingCount": "500"
  }
}
```

### FAQ Schema (for FAQ page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is corrosion and how does coating prevent it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Corrosion is the chemical deterioration of materials, usually metals. Protective coatings create a barrier between the metal surface and corrosive elements, preventing oxidation and extending asset life."
      }
    },
    {
      "@type": "Question",
      "name": "How long do industrial coatings last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our coating systems provide 15-25 years of protection depending on environmental conditions and the specific coating system selected."
      }
    }
  ]
}
```

### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://corropaints.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Solutions",
      "item": "https://corropaints.com/solutions"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Anticorrosive Coatings",
      "item": "https://corropaints.com/solutions/anticorrosive-coatings"
    }
  ]
}
```

---

## 7. Page-Specific Meta Tags Examples

### Solutions Page
```html
<title>Anticorrosive Coating Solutions | Polyurethane & Epoxy Coatings | Corro Protection</title>
<meta name="description" content="Explore our comprehensive range of industrial coating solutions including polyurethane, coal tar epoxy, and cement mortar lining. ISO 9001 certified." />
<meta name="keywords" content="anticorrosive coatings, polyurethane coating, coal tar epoxy, industrial coating solutions, pipe coating, surface preparation" />
```

### Industries Page
```html
<title>Industrial Applications | Water, Manufacturing, Infrastructure | Corro Protection</title>
<meta name="description" content="Industry-specific coating solutions for water & wastewater, manufacturing, infrastructure, and oil & gas sectors across India." />
<meta name="keywords" content="water treatment coatings, manufacturing coatings, infrastructure protection, wastewater pipeline coating" />
```

### Blog Post Example
```html
<title>What is Corrosion and Why Prevention Matters | Corro Protection Blog</title>
<meta name="description" content="Comprehensive guide on corrosion mechanisms and how protective coatings can extend your infrastructure lifespan by decades." />
<meta name="keywords" content="corrosion prevention, industrial corrosion, coating technology, asset protection" />
<article xmlns="https://schema.org">
  <!-- Blog article schema in content -->
</article>
```

---

## 8. Robots.txt Configuration

```
User-agent: *
Allow: /

# Disallow private/admin pages
Disallow: /admin/
Disallow: /private/

# Allow crawling of important pages
Allow: /blog/
Allow: /solutions/
Allow: /industries/

# Sitemap
Sitemap: https://corropaints.com/sitemap.xml
```

---

## 9. Keywords Strategy

### Primary Keywords (High Priority)
- industrial coating solutions
- anticorrosive coatings India
- pipeline fabrication
- corrosion protection
- coal tar epoxy coating
- polyurethane coating
- ISO 9001 certified coatings

### Secondary Keywords
- pipe coating services
- surface preparation
- cement mortar lining
- West Bengal industrial services
- industrial coating specialists
- pipeline protection systems

### Long-tail Keywords
- best anticorrosive coating solutions in India
- ISO certified pipeline fabrication services
- coal tar epoxy vs polyurethane coating
- industrial pipe coating specialists West Bengal
- corrosion prevention coating systems
- water treatment pipeline coating
- manufacturing plant coating solutions

### Location Keywords
- West Bengal coating services
- Kolkata industrial coatings
- Singur manufacturing facilities
- India-wide industrial coating
- Regional pipe fabrication

---

## 10. Meta Tag Best Practices

### Title Tags
- **Length**: 50-60 characters
- **Format**: Primary Keyword | Brand Name
- **Avoid**: Keyword stuffing, misleading content
- **Include**: Power words (Best, Professional, Certified)

### Meta Descriptions
- **Length**: 150-160 characters
- **Content**: Unique, compelling, action-oriented
- **Include**: Call-to-action when relevant
- **Avoid**: Duplicate descriptions, keyword stuffing

### Alt Text for Images
- **Format**: Descriptive, keyword-rich
- **Length**: Under 125 characters
- **Example**: "Industrial pipeline with blue polyurethane protective coating"
- **Avoid**: "image.jpg", "photo123"

### Internal Links
- **Anchor Text**: Descriptive, keyword-rich
- **Avoid**: "Click here", generic terms
- **Strategy**: Link related content, maintain hierarchy
- **Tools**: Use breadcrumbs, related posts, navigation

---

## 11. Implementation Checklist

- [x] Implemented all basic meta tags
- [x] Added Open Graph tags
- [x] Added Twitter Card tags
- [x] Added mobile/app tags
- [x] Created Organization Schema
- [x] Created Local Business Schema
- [x] Created Website Schema
- [x] Created Service Schema
- [ ] Create Product Schema (for each coating type)
- [ ] Create FAQ Schema
- [ ] Create BreadcrumbList Schema
- [ ] Implement on all major pages
- [ ] Test with Google Rich Results Tool
- [ ] Verify with Schema.org validator

---

## 12. Monitoring & Validation Tools

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Google Rich Results Test](https://search.google.com/test/rich-results)

### Schema Validation
- [Schema.org Validator](https://validator.schema.org/)
- [Google Structured Data Testing](https://search.google.com/structured-data/testing-tool)
- [JSON-LD Validator](https://jsonlint.com/)

### Social Media
- [Facebook Open Graph Debugger](https://developers.facebook.com/tools/debug/og/object/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [LinkedIn Post Validator](https://www.linkedin.com/post-inspector)

### SEO Analysis
- [SEMrush](https://www.semrush.com/)
- [Ahrefs](https://ahrefs.com/)
- [Moz](https://moz.com/)
- [SE Ranking](https://seranking.com/)

---

## Additional Resources

### Google
- [Search Central](https://developers.google.com/search)
- [Analytics Documentation](https://support.google.com/analytics)
- [Search Console Help](https://support.google.com/webmasters)

### Schema.org
- [Official Documentation](https://schema.org/)
- [Types List](https://schema.org/docs/schemas.html)
- [Creative Works](https://schema.org/CreativeWork)

### Best Practices
- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Moz SEO Basics](https://moz.com/beginners-guide-to-seo)
- [HubSpot SEO Guide](https://blog.hubspot.com/marketing/seo-guide)

---

**Last Updated**: January 2026
**Document Version**: 1.0

For questions or updates, refer to the main REDESIGN_SUMMARY.md file.
