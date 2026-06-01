# 💃 SUSHMA’S ZUMBA & WEIGHT LOSS CLUB

Welcome to the official repository for **Sushma’s Zumba & Weight Loss Club** (located in Eluru, Andhra Pradesh). This is a premium, women-focused React + Tailwind CSS web application built to offer an engaging, cinematic, and responsive user experience for fitness, dance, and custom lifestyle transformations.

---

## ✨ Features

- **🎬 Visual-First Cinematic Hero**: A clean, off-center layout with dynamic Framer Motion animations featuring custom brand taglines, call-to-actions, and interactive elements.
- **⚡ Zumba & Fitness Core**: Highlights custom aerobic programs, weight loss batches, high-energy schedules, and batch information.
- **👠 Boutique Slideshow**: Premium custom tailoring, bridal couture showcases, and luxury outfit rentals.
- **🌀 GPU-Accelerated 3D Carousel**: A high-performance, 3D circular cylinder carousel displaying portfolio designs smoothly, optimized using hardware-accelerated transforms (`preserve-3d`, `rotateY`, `translateZ`).
- **💬 Transformation Reviews**: An interactive glassmorphic testimonials slider celebrating customer fitness transformations and boutique custom fittings.
- **📍 Operating Coordinates & Contact**: Interactive `tel:` link calls, precise maps to the Eluru studio headquarters (Opposite Sowbhagya Lakshmi Temple, Satrampadu), operating hours, and live trial-class inquiry modals.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19 + Vite 8
- **Styling & System**: Tailwind CSS v4
- **Animations**: Framer Motion 12
- **Iconography**: Lucide React & Custom Inline SVGs
- **Build Tool**: Vite (lightning-fast HMR and production bundle compiling)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+ recommended) and npm installed.

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/raambow-co/ZUMBA.git
   cd ZUMBA
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Build the production bundle:
   ```bash
   npm run build
   ```

---

## 📐 Project Structure

```text
├── dist/                  # Production compiled assets
├── public/                # Static assets (images, icons)
├── src/
│   ├── assets/            # High-resolution visual media
│   ├── components/        # Component-based modular architecture
│   │   ├── BookingModal.jsx
│   │   ├── Boutique.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Manifesto.jsx
│   │   ├── MapSection.jsx
│   │   ├── Navbar.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Reviews.jsx
│   │   └── Zumba.jsx
│   ├── App.css            # Custom CSS animation classes
│   ├── App.jsx            # Main app coordinator
│   ├── index.css          # Tailwind system configuration
│   └── main.jsx           # Entry point
├── index.html             # HTML entry frame
├── package.json           # Project dependencies & scripts
└── vite.config.js         # Vite configuration
```

---

## 💎 Design System & Aesthetic Rules

The codebase is built on strict design rules to deliver a premium luxury feel:
- **Color Palette**: Dark gold gradient `#BF953F`, deep onyx dark `#050505`, warm peach/coral accents, and glassmorphic translucent panels (`backdrop-blur-md`).
- **Typography**: Inter and Playfair Display serif fonts imported from Google Fonts.
- **Animations**: Subtle, looped floating transitions and GPU-anchored 3D transforms.
