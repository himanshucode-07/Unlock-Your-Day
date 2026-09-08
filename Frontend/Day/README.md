# 🔓 Unlock Your Day

> A React-based learning project focused on building interactive UI and understanding React state management through hands-on implementation.

**Unlock Your Day** is a frontend project built with **React and Vite**. The project is being developed incrementally while exploring React concepts such as components, Context API, `useReducer`, state management, and reusable UI components.

The current version focuses on a small interactive counter application that demonstrates how `useReducer` can manage state and enforce boundaries on user actions.

---

## 🚀 Current Features

* ➕ Increment counter
* ➖ Decrement counter
* 🔒 Counter cannot exceed `3`
* 🔒 Counter cannot go below `0`
* ⚛️ State management with `useReducer`
* 🌐 Context API experimentation
* 🧩 Reusable React components
* 🎨 Tailwind CSS setup
* ⚡ Vite development environment
* 🧹 ESLint and Prettier configuration

---

## 🛠️ Tech Stack

| Technology            | Purpose                           |
| --------------------- | --------------------------------- |
| **React**             | Building the user interface       |
| **Vite**              | Development server and build tool |
| **JavaScript (ES6+)** | Application logic                 |
| **Tailwind CSS**      | Styling                           |
| **React Context API** | Sharing state between components  |
| **useReducer**        | Managing state transitions        |
| **ESLint**            | Code quality                      |
| **Prettier**          | Code formatting                   |

The project currently uses React 19, Vite 8 and Tailwind CSS 3.4.

---

## 📂 Project Structure

```text
Unlock-Your-Day/
│
└── Frontend/
    └── Day/
        ├── public/
        │
        ├── src/
        │   ├── components/
        │   │   └── ui/
        │   │
        │   ├── context/
        │   │
        │   ├── App.jsx
        │   ├── Sandbox.jsx
        │   ├── App.css
        │   ├── index.css
        │   └── main.jsx
        │
        ├── package.json
        ├── package-lock.json
        ├── vite.config.js
        ├── tailwind.config.js
        ├── postcss.config.js
        ├── eslint.config.js
        └── .prettierrc
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/himanshucode-07/Unlock-Your-Day.git
```

### 2. Navigate to the frontend

```bash
cd Unlock-Your-Day/Frontend/Day
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will start the development server and provide a local URL in the terminal.

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Vite development server.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally.

### Lint

```bash
npm run lint
```

Runs ESLint across the project.

---

## 🧠 What I'm Learning

This project is being used as a practical React learning environment.

### React State Management

The current implementation uses:

```text
useReducer
   ↓
Reducer Function
   ↓
State Transitions
   ↓
UI Update
```

The reducer handles two actions:

```text
INCREMENT
DECREMENT
```

The counter is intentionally restricted between `0` and `3`.

### Context API

The project also experiments with React Context to make the current state and `dispatch` function available to child components.

This helps demonstrate the relationship between:

```text
Context
   ↓
Provider
   ↓
useContext()
   ↓
Component
```

---

## 🎯 Project Goal

The long-term goal of **Unlock Your Day** is to grow this learning project into a more complete interactive productivity experience.

The project is intentionally being developed step-by-step as new React concepts are learned.

### Planned Improvements

* [ ] Build the actual productivity/game experience
* [ ] Add multiple interactive sections
* [ ] Improve state architecture
* [ ] Add persistent state
* [ ] Add animations and transitions
* [ ] Improve responsive design
* [ ] Add more reusable components
* [ ] Deploy the application
* [ ] Continue improving UX

---

## 📚 Learning Approach

This project follows a simple philosophy:

> **Learn → Build → Break → Debug → Improve**

Instead of trying to build everything at once, new features are added as new React concepts are learned.

---

## 👨‍💻 Author

**Himanshu**

GitHub: [@himanshucode-07](https://github.com/himanshucode-07)

---

## ⭐ Project Status

🚧 **Currently in development**

This repository is an evolving React project and learning playground. Features and architecture will continue to change as development progresses.

---

## 📄 License

This project is currently intended as a personal learning project.
