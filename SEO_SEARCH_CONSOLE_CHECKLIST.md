# Search Console SEO Optimization Checklist

This document explains how to analyze Google Search Console (GSC) data for `thecodepecharcha.vercel.app` and safely optimize the website based on actual user behavior.

## Workflow & Analysis Scenarios

### 1. High Impressions + Low CTR
**Symptom**: Your page is appearing often in search results, but users aren't clicking.
**Action**: 
- Review the `seoTitle` and `seoDescription` for that specific page in `src/data/index.tsx` (for services/projects) or `src/app/layout.tsx` (for homepage).
- Ensure the title is compelling and answers the search intent better than competitors.
- Update the description to clearly communicate the value proposition.

### 2. Queries Ranking in Positions 5–20
**Symptom**: You are ranking on page 1 (bottom) or page 2, meaning Google sees relevance but not authority.
**Action**:
- Review the page's internal content.
- Enhance the `seoOverview` or add more detailed FAQs in `src/data/index.tsx`.
- Ensure H2/H3 headings naturally include variations of the target query.
- Add internal links pointing to this page from other high-authority pages on the site (using descriptive anchor text).

### 3. Impressions but No Clicks
**Symptom**: The query is generating views but 0 clicks over an extended period.
**Action**:
- Check the actual search intent by googling the query yourself. Are users looking for a tool, an article, or a service?
- If the SERP features (like featured snippets, maps, or videos) are pushing your organic result down, consider updating the page schema (already implemented `ProfessionalService` and `FAQPage`).

### 4. Pages Receiving Clicks
**Symptom**: A page is successfully driving traffic.
**Action**:
- Use this page as a hub. Identify opportunities to add related internal links from this page to other services or projects that need a boost.
- Ensure the CTA (Contact/Inquire) is highly visible to convert that traffic.

### 5. Queries Mismatching Page Intent
**Symptom**: GSC shows you are ranking for a query that doesn't actually match what your page offers.
**Action**:
- **DO NOT** force the keyword into the page just to chase traffic.
- Evaluate if that query represents a new business opportunity. If so, create a dedicated, useful service page or blog post for it rather than diluting the current page's focus.

### 6. Pages with Very Low/No Impressions
**Symptom**: The page exists but isn't being seen by anyone.
**Action**:
- Verify indexation status in GSC ("URL Inspection Tool").
- Check if the page is linked internally from the homepage or main navigation.
- Assess if there is actual search demand for the topic. If demand is low, consider merging the content into a broader service page.

## Strict "Do Not" Rules (Avoid Over-Optimization)
- **Do not** repeat the same keyword excessively (keyword stuffing).
- **Do not** add hidden text or invisible keywords using CSS.
- **Do not** create doorway pages or duplicate city pages (e.g., "web development in ajmer", "web development in pushkar" with exact same content).
- **Do not** manipulate rankings through fake backlinks.

## Indexing Readiness Validation
All important URLs for this project are validated against the production domain: `https://thecodepecharcha.vercel.app/`.
- **Sitemap**: `/sitemap.xml` dynamically includes all routes.
- **Robots**: `/robots.txt` allows all crawling and points to the sitemap.
- **Canonical URLs**: Every service and project page has a self-referencing canonical URL injected via Next.js Metadata API.
- **No Localhost/Old Domains**: The codebase has been scrubbed of `codepecharcha.com` and `127.0.0.1`.
