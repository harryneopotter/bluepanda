# Blue Panda - Responsible Infrastructure

A professional web presence for Blue Panda, showcasing resilient systems across infrastructure, applied AI, and custom engineering.

## 🌟 Features

- **Superposition Design Theme**: Dark mode with neon accents, particle backgrounds, and glitch effects.
- **AI Architect Tool**: A reasoning tool powered by the Google Gemini API to demonstrate a thoughtful approach to system design.
- **Detailed Case Studies**: Real-world examples of completed projects, each with context, problem, approach, and outcome.
- **Component-Based Architecture**: The frontend is built with modular and reusable React components.
- **Six Core Pages**: Home, Services, Case Studies, AI Architect, About, and Contact.

## 🚀 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI Integration**: Google Gemini API
- **Deployment**: Ready for static hosting platforms like Netlify or Render.

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Project Structure

```
blue-panda-site/
├── src/
│   ├── components/              # Reusable UI components for each page
│   ├── App.jsx                  # Main application component with routing
│   └── ...
├── public/                      # Static assets
├── .env.local                   # Local environment variables (create this file)
└── vite.config.js               # Vite configuration
```

## 🔑 Environment Variables

To use the AI Architect feature, you will need a Google Gemini API key.

1.  Create a new file named `.env.local` in the root of the project.
2.  Add your API key to this file as follows:

```
VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

**Note:** Vite requires environment variables that are exposed to the browser to be prefixed with `VITE_`.

## 📝 License

© 2013-2024 Blue Panda. All rights reserved.

## 🐼 About Blue Panda

Blue Panda has been working with infrastructure and systems since 2013. The focus has evolved, but the core principle remains the same: systems should be understandable, stable, and designed for the long term.

**Contact**: sachin@bluepanda.in
