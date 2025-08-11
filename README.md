# Sahar Portfolio Template

A clean, minimal, and fully responsive developer portfolio template built with **React.js**, **TypeScript**, and **Tailwind CSS** — perfect for showcasing your skills, projects, and experience.

## 🌟 Features

- ⚡ Built with **React + TypeScript**
- 🎨 Modern dark theme
- 📱 Fully responsive on all devices
- 🧠 Skill & project showcase
- 📩 Functional contact form
- ⚙️ Customizable settings panel
- 🌐 SEO-friendly and fast

## 📸 Demo

🔗 [Live Preview](https://portfolio-rho-rouge-73.vercel.app/)

## 🛠 Tech Stack

- React
- TypeScript
- Tailwind CSS
- EmailJS (for contact form)

## 📦 Folder Structure    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
