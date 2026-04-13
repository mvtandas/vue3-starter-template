# 🚀 Vue 3 Starter Template

<div align="center">

![Vue.js](https://img.shields.io/badge/Vue.js_3.5-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript_5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-FFD859?style=for-the-badge&logo=vuedotjs&logoColor=black)

**Production-ready Vue 3 starter with TypeScript, Vite, Pinia, Tailwind CSS, and best practices baked in.**

[Use this template](../../generate) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## ✨ Features

- ⚡ **Vite 6** — Lightning fast HMR and build
- 🦾 **TypeScript 5** — Full type safety
- 🍍 **Pinia** — Intuitive state management
- 🎨 **Tailwind CSS 4** — Utility-first styling
- 🧭 **Vue Router 4** — File-based routing ready
- 📦 **Auto Import** — Components and composables auto-imported
- 🔧 **ESLint + Prettier** — Code quality and formatting
- 🧪 **Vitest** — Unit testing framework
- 📱 **Responsive** — Mobile-first design
- 🌙 **Dark Mode** — Built-in theme switching
- 🔐 **Auth Ready** — Authentication layout and guards
- 📡 **Axios** — HTTP client with interceptors

## 🏗 Project Structure

```
src/
├── assets/              # Static assets and global styles
├── components/          # Reusable Vue components
│   ├── ui/             # Base UI components (Button, Card, Input)
│   └── layout/         # Layout components (Navbar, Sidebar, Footer)
├── composables/         # Vue composables (useAuth, useFetch, useTheme)
├── layouts/             # Page layouts (Default, Auth, Dashboard)
├── pages/               # Route pages
│   ├── index.vue       # Home page
│   ├── login.vue       # Login page
│   └── dashboard.vue   # Dashboard page
├── router/              # Vue Router configuration
│   ├── index.ts        # Router instance
│   └── guards.ts       # Navigation guards
├── stores/              # Pinia stores
│   ├── auth.ts         # Authentication store
│   └── theme.ts        # Theme store
├── services/            # API services
│   └── api.ts          # Axios instance with interceptors
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── App.vue              # Root component
└── main.ts              # Entry point
```

## 🚀 Quick Start

### Use as Template

Click the **"Use this template"** button above, or:

```bash
gh repo create my-app --template mvtandas/vue3-starter-template
cd my-app
npm install
npm run dev
```

### Manual Setup

```bash
git clone https://github.com/mvtandas/vue3-starter-template.git my-app
cd my-app
npm install
npm run dev
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run unit tests |
| `npm run lint` | Lint and fix files |
| `npm run type-check` | TypeScript type checking |

## 🛠 Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Vue.js | 3.5 | UI Framework |
| TypeScript | 5.x | Type Safety |
| Vite | 6.x | Build Tool |
| Pinia | 2.x | State Management |
| Vue Router | 4.x | Routing |
| Tailwind CSS | 4.x | Styling |
| Axios | 1.x | HTTP Client |
| Vitest | 3.x | Testing |
| ESLint | 9.x | Linting |

## 📝 License

MIT — feel free to use this template for any project.

---

<div align="center">

Made with ❤️ by [Mustafa Vatandaş](https://github.com/mvtandas)

If this template helped you, please give it a ⭐

</div>
