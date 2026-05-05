# Administrador de Pacientes 🐾

A React application for managing veterinary appointments. Clinic staff can register new patient appointments, view a live list of pending appointments, and delete them once resolved — all without needing a backend, thanks to `localStorage` persistence.

🔗 **Live demo:** [https://DENISGUERRA777.github.io/administrador_de_pacientes2](https://DENISGUERRA777.github.io/administrador_de_pacientes2)

---

## Features

- **Create appointments** — fill in the pet's name, owner, date, time, and symptoms.
- **View all appointments** — the appointment list updates in real time as you add entries.
- **Delete appointments** — remove a resolved or cancelled appointment with one click.
- **Persistent storage** — appointments are saved in the browser's `localStorage` so they survive page refreshes.
- **Form validation** — all fields are required; an error message is shown when any field is left blank.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://reactjs.org/) | UI library |
| [Create React App](https://create-react-app.dev/) | Project scaffolding & build tooling |
| [uuid](https://github.com/uuidjs/uuid) | Unique IDs for each appointment |
| [gh-pages](https://github.com/tschaub/gh-pages) | GitHub Pages deployment |
| localStorage | Client-side data persistence |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18 and **npm** ≥ 9

### Installation

```bash
git clone https://github.com/DENISGUERRA777/administrador_de_pacientes2.git
cd administrador_de_pacientes2
npm install
```

---

## Available Scripts

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser.

The page reloads automatically when you save changes.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production into the `build/` folder. The output is minified and filenames include content hashes for optimal caching.

### `npm run deploy`

Builds the app and publishes it to the `gh-pages` branch, making it available at the live demo URL above.

---

## Project Structure

```
administrador_de_pacientes2/
├── public/               # Static assets served as-is (index.html, favicon, etc.)
├── src/
│   ├── App.js            # Root component — manages appointment state & localStorage
│   ├── index.js          # React entry point
│   ├── index.css         # Global styles
│   └── components/
│       ├── Formulario.js # Appointment creation form with validation
│       └── Cita.js       # Single appointment card with a delete button
├── package.json
└── README.md
```

