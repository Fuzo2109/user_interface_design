# Portfolio Website Layout - Lab 4 UX/UI

A modern portfolio website built with **React**, **TypeScript**, and **Tailwind CSS** using Vite as the build tool.

## Features

- ✨ Responsive design with modern UI components
- 🎨 Beautiful gradient and color scheme (#00BCD4 cyan, #37474F dark gray)
- 📱 Mobile-first approach
- ⚡ Fast loading with Vite + React optimization
- 🖼️ Local image assets integration
- 🔄 Smooth routing with React Router
- 📊 Project showcase with filtering by category (AI, IoT, Web, Mobile, Data)

## Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.12
- **Component Library**: Radix UI
- **Icons**: Lucide React
- **Router**: React Router 7.13.0
- **UI Components**: Custom components + Radix UI primitives

## Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TopNav.tsx
│   │   ├── PortfolioButton.tsx
│   │   └── figma/
│   │       └── ImageWithFallback.tsx
│   ├── data/
│   │   └── projects.ts      # Project data with local images
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── ProjectList.tsx
│   │   ├── ProjectDetail.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   └── routes.ts
├── assets/
│   └── images/              # Local image assets
│       ├── avatar.jpg
│       ├── AI_Vision_project.jpg
│       ├── Smart_Home_project.jpg
│       ├── Modern_Web_project.jpg
│       ├── Mobile_ML_project.jpg
│       ├── Data_Visualization_project.jpg
│       └── AI_Agent_project.jpg
├── styles/                  # Global styles
│   ├── index.css
│   ├── tailwind.css
│   ├── theme.css
│   └── fonts.css
└── main.tsx                 # Entry point

```

## Installation

```bash
npm install
```

## Development

Run the development server:

```bash
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

## Build

Build for production:

```bash
npm run build
```

Output builds to the `dist/` directory.

## Key Features

### 1. **Responsive Design**
- Mobile-first responsive layouts
- Breakpoints: sm, md, lg with Tailwind CSS
- Flexible grid system for projects

### 2. **Project Showcase**
- 6 featured projects with detailed case studies
- Category filtering (AI, IoT, Web, Mobile, Data)
- Project cards with smooth hover animations
- Detailed project pages with problem/solution insight

### 3. **Image Handling**
- Local image imports from `src/assets/images/`
- Optimized image loading with Vite
- Fallback error handling with `ImageWithFallback.tsx` component

### 4. **Modern UI**
- Beautiful color palette (Cyan #00BCD4, Dark Gray #37474F)
- Smooth transitions and hover effects
- Clean typography with Montserrat font
- Shadow and border effects for depth

## Component Highlights

### ProjectCard
Displays individual project summary with:
- Project thumbnail image
- Title and description (with line clamping)
- Technology tags
- Link to detailed project page

### ProjectDetail
Shows complete project information:
- Full-width banner image
- Problem statement
- Technical solution
- Tools & tech stack
- Call-to-action to demo

### Home Page
Landing page featuring:
- Hero section with avatar and brief introduction
- Featured projects (first 3)
- Core expertise section highlighting AI, Full-Stack, and IoT

## Styling Approach

- **Tailwind CSS** for utility-first styling
- **CSS Modules** for component-scoped styles where needed
- **Custom theme CSS** in `src/styles/theme.css`
- Responsive breakpoints for mobile, tablet, and desktop

## Color Palette

- Primary: **#00BCD4** (Cyan)
- Secondary: **#e0f7fa** (Light Cyan)
- Text: **#37474F** (Dark Gray)
- Background: **#f5f5f5** (Light Gray)
- White: **#FFFFFF**

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Project search functionality
- [ ] Admin panel for project management
- [ ] Blog/articles section
- [ ] Contact form backend integration
- [ ] SEO optimization
- [ ] Analytics integration

## License

MIT License - feel free to use this portfolio template for your own projects.

## Author

Created as part of UX/UI Design Lab 4

---

**Live Demo**: Check out the deployed version after building and deploying to your hosting service.
