# 316-Collection

Nuclearis Landing Page

This repository contains the source code for the Nuclearis landing page built for a DreamTeller crowdfunding campaign.

The site was generated using modern web tooling and can be delivered in two formats depending on client needs: • a standard Next.js source project (for developers) • a fully static HTML/CSS/JS export (for universal hosting)

Project Overview

This is a marketing / investor landing page with no required backend infrastructure.

All layout, styling, animations, and interactions are client-side only. The site does not rely on databases, authentication, or server-side rendering.

Technology

The project is built using: • Next.js (React framework) • Tailwind CSS (styling) • Client-side JavaScript for interactivity

At runtime, the site resolves to standard HTML, CSS, and JavaScript files.

Static Export (HTML/CSS/JS)

This project is compatible with static export.

To generate a fully static version of the site:

Build the project npm run build

The static output will be generated in the out/ directory

The contents of the out/ directory can be hosted on any static hosting provider (Netlify, Cloudflare Pages, S3, etc.).

Deployment

Recommended deployment options: • Netlify (static hosting) • Cloudflare Pages (static hosting) • Vercel (Next.js hosting)

For static hosting, deploy the contents of the out/ directory.

Email Capture

Email capture is optional and not required for post-campaign handover.

If lead collection is desired, the signup form can be connected to an external email service (e.g. ConvertKit, Mailchimp, Klaviyo) via a third-party form handler or webhook, allowing the site to remain fully static.

Ownership & Handoff

All source code and assets in this repository are owned by the client.

This project may be freely modified, hosted, or extended by any developer without dependency on proprietary tools.
