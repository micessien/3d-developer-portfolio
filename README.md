# 🌐 3D Developer Portfolio

A modern, interactive 3D portfolio website built with React, TypeScript, Three.js, and Framer Motion. Features stunning 3D graphics, smooth animations, and a responsive design to showcase your work and skills.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-0.182.0-black?style=flat&logo=three.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite)

## ✨ Features

- **Interactive 3D Elements** - Engaging 3D computer model, floating tech balls, and animated stars
- **Smooth Animations** - Beautiful scroll-triggered animations using Framer Motion
- **Responsive Design** - Fully responsive layout that works on all devices
- **Modern UI** - Clean, professional interface with Tailwind CSS styling
- **Contact Form** - Functional contact form powered by EmailJS
- **Timeline Experience** - Interactive work experience timeline
- **Project Showcase** - Tilt-effect project cards with live demo links

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 19, TypeScript 5.7, React Router DOM |
| **3D Graphics** | Three.js, React Three Fiber, React Three Drei |
| **Styling** | Tailwind CSS, PostCSS, Autoprefixer |
| **Animations** | Framer Motion |
| **Build Tool** | Vite |
| **Email Service** | EmailJS |
| **Linting** | ESLint |
| **Type Checking** | TypeScript |

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, and static assets
│   ├── company/     # Company logos
│   ├── tech/        # Technology icons
│   └── index.ts     # Asset exports
├── components/      # React components (TSX)
│   ├── canvas/      # 3D canvas components (Ball, Computers, Earth, Stars)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Feedbacks.tsx
│   ├── Hero.tsx
│   ├── Loader.tsx
│   ├── Navbar.tsx
│   ├── Tech.tsx
│   ├── Works.tsx
│   └── index.ts
├── constants/       # App constants and data (TypeScript)
│   └── index.ts
├── hoc/             # Higher-order components
│   ├── SectionWrapper.tsx
│   └── index.ts
├── types/           # TypeScript type definitions
│   └── index.ts
├── utils/           # Utility functions (animations)
│   └── motion.ts
├── App.tsx          # Main app component
├── index.css        # Global styles
├── main.tsx         # App entry point
├── styles.ts        # Shared style constants
└── vite-env.d.ts    # Vite environment types
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/micessien/3d-developer-portfolio.git
   cd 3d-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form)
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update the EmailJS credentials in the Contact component

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Type check and build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🎨 Customization

### Personal Information
Update your details in `src/constants/index.ts`:
- Navigation links
- Services offered
- Technologies/skills
- Work experience
- Projects
- Testimonials

### Type Definitions
Custom types are defined in `src/types/index.ts`:
- `NavLink`, `Service`, `Technology`
- `Experience`, `Testimonial`, `Project`
- `ContactForm`, `Styles`

### Hero Section
Modify `src/components/Hero.tsx` to update:
- Your name
- Tagline/description

### Styling
- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Custom styles: `src/styles.ts`

### 3D Models
Replace 3D models in the `public/` folder:
- `desktop_pc/` - Computer model for Hero section
- `planet/` - Earth model for Contact section

## 🌐 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` folder, ready to deploy on:
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [Drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

---

<div align="center">

**Built with ❤️ by [Micael Dié](https://micaeldie.com) for learning and education**

</div>
