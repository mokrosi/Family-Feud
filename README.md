# Family Feud Game Dashboard, Two-screen control

The game is in AR language, but it  is easy to convert to EN 


A web-based Family Feud game manager and display system built with React and Vite. This project allows you to control game rounds, points, and answer visibility in real time using BroadcastChannel for communication between the dashboard and display screens.

## Features

- **Manager Dashboard**: Set team points, control rounds, and reveal/hide answers.
- **Display Screen**: Shows current round, question, and answers as revealed by the manager.
- **Real-time Sync**: Uses BroadcastChannel API for instant updates between dashboard and display.
- **Multiple Rounds**: Easily switch between rounds and reset answer visibility.
- **Custom Questions**: Questions and answers are loaded from a JSON file.

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mokrosi/Family-Feud.git
   cd Family-Feud
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the development server:
```sh
npm run dev
```

Open two browser windows/tabs:
- Go to `/dashboard` for the manager controls
- Go to `/display` for the display screen

### Project Structure
```
Family-Feud/
├── public/
├── src/
│   ├── Dashboard.jsx
│   ├── Display.jsx
│   ├── main.jsx
│   ├── Round/
│   │   └── Round1.jsx ...
│   └── assets/
├── questions.json
├── index.html
├── package.json
└── README.md
```

## Customization
- Edit `questions.json` to add or modify game questions and answers.
- Style components using Tailwind CSS or your preferred CSS framework.

## Technologies Used
- React
- Vite
- BroadcastChannel API
- Tailwind CSS (optional)

## License
MIT

---

> Made with ❤️ for fun and family gatherings!
