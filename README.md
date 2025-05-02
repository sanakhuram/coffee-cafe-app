Perfect! Here's your **copy-paste-ready `README.md`** for VS Code. No fluff, no broken links — just pure markdown goodness. Just copy everything below and slap it into your `README.md` file:

---

````md
<div align="center">
  <img src="public/logo.png" alt="Bloom and Brew Logo" width="200"/>
  <h1 align="center">☕🌸 Bloom & Brew – Coffee that Inspires</h1>
  <p align="center">
    A cozy café experience brewed into a web app.<br/>
    Sip, shop, explore — all from your screen.
  </p>
</div>

---

## 🚀 Live Demo

🌐 [https://coffee-cafe-app.vercel.app/landing](https://coffee-cafe-app.vercel.app/landing)

---

## 📸 Preview

_If you have a landing preview image, put it in `/public/preview.jpg` and it’ll show up here!_

```md
![Landing Page Preview](public/preview.jpg)
````

---

## ✨ Features

* 🖼️ **Animated Landing Page** – Two-panel gallery/shop split with smooth transitions.
* ☕ **Buy Coffee Section** – Scrollable menu of delicious blends.
* 🖼️ **Gallery Page** – Responsive grid from custom API (`/api/gallery`), opens full-screen lightbox.
* 📬 **Contact Page** – Styled form with toast notifications via `react-hot-toast`.
* 🧠 **About Page** – Brewing philosophies and coffee-making techniques.
* ✅ **Success Page** – Order confirmation with sweet messaging.
* 📱 **Responsive Design** – Tailwind CSS goodness on every screen.
* 🧼 **Linted & Pretty** – ESLint + Prettier = happy codebase.

---

## 🛠️ Tech Stack

* **React** + **TypeScript**
* **Next.js App Router**
* **Tailwind CSS**
* **Custom API Routes**
* **react-hot-toast**
* **ESLint + Prettier**

---

## 🧩 Project Structure

```bash
📁 components/
│   ├── Hero.tsx
│   ├── CoffeeMenu.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx

📁 app/
│   ├── landing/          # Landing page
│   ├── gallery/          # Coffee art gallery
│   ├── buy/              # Coffee shop menu
│   ├── about/            # About Brew & Bloom
│   ├── contact/          # Contact form + locations
│   └── success/          # Thank you page

📁 public/
│   ├── galleryX.jpg      # Images used in the gallery
│   ├── buy.jpg           # Landing section image
│   └── logo.png          # Logo image
```

---

## 📦 Getting Started

1. **Clone this repo**

```bash
git clone https://github.com/your-username/bloom-and-brew.git
cd bloom-and-brew
```

2. **Install dependencies**

```bash
npm install
# or
yarn
```

3. **Run development server**

```bash
npm run dev
```

4. **Open in browser**
   Go to: [http://localhost:3000/landing](http://localhost:3000/landing)

---

## 🧹 NPM Scripts

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "format": "prettier --write ."
}
```

---

## ✍️ Author

Built with ❤️ and caffeine by [@sanakhuram](https://sanakhuram.netlify.app)

---

## ☕ License

Open-source and free to sip, stir, or remix.

---

> “Coffee is a language in itself.” – Jackie Chan
> Brew it. Bloom it. Repeat. ✨

```

