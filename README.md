# My Dashboard - Vision UI Dashboard

Modern React dashboard aplikácia s Material-UI komponentami, autentifikáciou a Express backend integráciou.

## 🚀 Funkcie

- ✅ **Autentifikácia** - Login, registrácia, Facebook OAuth
- ✅ **Express Backend Integrácia** - REST API komunikácia
- ✅ **Material-UI** - Moderný dizajn s glass-morphism efektmi
- ✅ **React Query** - Efektívne data fetching a caching
- ✅ **TypeScript** - Type-safe kód
- ✅ **React Hook Form + Zod** - Validácia formulárov
- ✅ **Protected Routes** - Ochrana stránok pre prihlásených užívateľov

## 📦 Inštalácia

```bash
# Nainštalujte závislosti
npm install

# Nakonfigurujte environment variables
cp .env.example .env
# Upravte .env súbor s vašimi hodnotami

# Spustite development server
npm run dev
```

## 🔧 Konfigurácia

### Environment Variables

Vytvorte `.env` súbor v root adresári:

```env
VITE_API_BASE_URL="http://localhost:4000/api"
VITE_FACEBOOK_APP_ID="your-facebook-app-id-here"
```

**Dôležité**: Po úprave `.env` reštartujte dev server!

## 📚 Dokumentácia

- [**Backend Integration Guide**](BACKEND_INTEGRATION.md) - Kompletný návod na napojenie Express backendu
- [**Facebook Login Setup**](FACEBOOK_LOGIN_SETUP.md) - Krok-za-krokom Facebook OAuth konfigurácia

## 🏗️ Štruktúra projektu

```
src/
├── components/         # React komponenty
│   ├── auth/          # Autentifikačné komponenty
│   ├── cards/         # Dashboard karty
│   └── common/        # Zdieľané komponenty
├── context/           # React Context (Auth)
├── hooks/             # Custom React hooks
├── pages/             # Stránky/Routes
├── services/          # API volania
├── utils/             # Utility funkcie
└── validation/        # Zod schémy
```

## 🔐 Autentifikácia

### Token Management
- JWT token uložený v `localStorage`
- Automatické pridávanie tokenu do requestov (axios interceptor)
- Automatické odhlásenie pri expirácii tokenu

### Podporované metódy
1. **Email/Password** - Klasická registrácia a prihlásenie
2. **Facebook OAuth** - Prihlásenie cez Facebook účet

## 🛠️ Technológie

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Material-UI** - Component library
- **React Router** - Routing
- **React Query** - Server state management
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 📝 Skripty

```bash
# Development
npm run dev

# Build pre production
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## 🤝 Backend Požiadavky

Váš Express backend musí implementovať tieto endpointy:

- `POST /api/auth/login` - Prihlásenie
- `POST /api/auth/register` - Registrácia
- `GET /api/auth/me` - Aktuálny používateľ
- `POST /api/auth/facebook` - Facebook OAuth

Detaily v [BACKEND_INTEGRATION.md](BACKEND_INTEGRATION.md)

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
