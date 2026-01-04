# MarTechAdda - Marketing Platform

A modern SaaS marketing website built with React and Vite, designed for connecting businesses with marketing experts.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for fast development
- **Responsive Design**: Fully responsive layout that works on all devices
- **Component-Based Structure**: Modular components for easy maintenance
- **Content-Driven**: Uses `content.md` as the single source of truth for content
- **Dual Role Support**: Designed for both businesses and marketing professionals

## Project Structure

```
src/
├── components/
│   ├── Header.jsx              # Navigation header with logo, nav, and CTAs
│   ├── Hero.jsx                # Hero section with guided search and expert entry
│   ├── Problem.jsx             # Problem section explaining pain points
│   ├── Solution.jsx            # Solution section with benefits
│   ├── DualRolePathways.jsx   # Dual role pathways (Business/Expert)
│   ├── HowHiringWorks.jsx     # Visual steps for hiring process
│   ├── InnovationProof.jsx    # Counter badges with statistics
│   ├── ClosingCTA.jsx         # Final call-to-action section
│   └── Footer.jsx             # Footer with social, support, and legal links
├── App.jsx                     # Main app component
├── App.css                     # App styles
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## Design Specifications

- **Primary Color**: Royal Blue (#3B59DA)
- **Background**: Clean white with subtle grey sections (#f8f9fa)
- **Typography**: Clean, modern sans-serif
- **UI Elements**: Minimal, clean design with strong CTAs
- **Layout**: Generous white space, centered content

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Content Management

All content is managed through `content.md`. Update the markdown file and sync the changes to the React components as needed.

## Sections

1. **Header**: Logo, navigation (About | How MarTechAdda Works | Contact), CTAs, Login, Social icons
2. **Hero**: Main headline, guided search with service tiles, expert entry path, login
3. **Problem**: Pain points about hiring marketing services
4. **Solution**: Benefits of using MarTechAdda
5. **Dual Role Pathways**: Separate paths for businesses and marketing professionals
6. **How Hiring Works**: Visual steps (Search → Connect → Align → Hire)
7. **Innovation Proof**: Counter badges with statistics
8. **Closing CTA**: Final dual-role call-to-action
9. **Footer**: Social links, support, legal, tagline, and copyright

## Platform Features

- **For Businesses**: Find and hire marketing experts with confidence
- **For Marketing Professionals**: Showcase expertise and get discovered
- **Marketing-Only Focus**: No generic platforms, built specifically for marketing
- **Transparent Hiring**: Clear scope and expectations upfront
- **No Paid Rankings**: Fair discovery based on capability, not ad spend
