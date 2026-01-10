# Trinoka LLP - Official Website

Official public website of **Trinoka LLP**, a Limited Liability Partnership incorporated under the LLP Act, 2008.

## 🏢 Company Information

- **Legal Name:** Trinoka LLP
- **LLPIN:** ACT-9590
- **Date of Commencement:** 05 January 2026
- **Registered Office:** 6/186, Vikas Nagar, Lucknow – 226022, Uttar Pradesh, India
- **Website:** https://trinoka.github.io

> Note: Primary site constants (URL, email, LLPIN, dates) are maintained in `src/data/constants.json`. Update that file and rebuild to apply changes across the site.

## 🚀 Tech Stack

- [Astro](https://astro.build/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- GitHub Pages - Hosting
- GitHub Actions - CI/CD

## 📁 Project Structure

```
src/
├── pages/
│   ├── index.astro      # Home page
│   ├── about.astro      # About Trinoka LLP
│   ├── business.astro   # Business Domains
│   ├── contact.astro    # Contact & Verification
│   ├── legal.astro      # Legal & Compliance
│   └── 404.astro        # 404 page
├── layouts/
│   └── BaseLayout.astro # Base layout with SEO
├── components/
│   ├── Header.astro     # Navigation header
│   ├── Footer.astro     # Site footer
│   ├── SEO.astro        # SEO meta tags
│   └── BusinessSection.astro # Business domain card
└── styles/
    └── global.css       # Global styles
public/
├── favicon.svg          # Site favicon
├── logo.svg             # Company logo
├── og-image.svg         # Open Graph image
└── robots.txt           # Robots.txt
```

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm

### Commands

| Command           | Action                                       |
| ----------------- | -------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Start dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`           |
| `npm run preview` | Preview build locally before deploying       |

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Push changes to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at the configured GitHub Pages URL

### Custom Domain Setup

1. Add your custom domain in GitHub repository settings under Pages
2. Create a `CNAME` file in the `public/` directory with your domain
3. Configure DNS settings with your domain provider

## 📄 Pages

| Page        | URL         | Description                        |
| ----------- | ----------- | ---------------------------------- |
| Home        | `/`         | Company overview and introduction  |
| About       | `/about/`   | Incorporation details and vision   |
| Business    | `/business/`| Business domains and activities    |
| Contact     | `/contact/` | Contact information and verification |
| Legal       | `/legal/`   | Legal disclosures and compliance   |
| 404         | `/404`      | Custom not found page              |

## 🎨 Design Principles

- **Company-first:** Professional, credible appearance
- **Clean typography:** Easy to read, accessible
- **Neutral palette:** Professional color scheme
- **Mobile-first:** Responsive design
- **Fast loading:** Optimized static assets
- **Accessible:** Semantic HTML, ARIA labels

## 📋 SEO Features

- Page-level meta titles and descriptions
- Open Graph tags for social sharing
- Organization schema (JSON-LD)
- XML sitemap generation
- Robots.txt configuration
- Canonical URLs

## 📜 License

© 2026 Trinoka LLP. All rights reserved.

---

Built with [Astro](https://astro.build/)
