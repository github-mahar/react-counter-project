# Counter App

A simple and elegant counter application built with **React** and **Vite**, featuring a modern UI with gradient design and smooth animations.

## ✨ Features

- ➕ **Increment** counter (maximum: 20)
- ➖ **Decrement** counter (minimum: 0)
- 🎨 **Modern Gradient UI** with smooth animations
- 🎯 **Disabled buttons** at limits to prevent invalid values
- 📱 **Responsive Design** that works on all screen sizes
- ⚠️ **Visual feedback** when maximum value is reached
- ⚡ **Fast refresh** with Vite

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd Counter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` to see the app

## 📖 Usage

- Click the **+** button to increment the counter
- Click the **−** button to decrement the counter
- Buttons are automatically disabled at the minimum (0) and maximum (20) values
- The counter displays the current count in a large, centered display

## 🛠️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📁 Project Structure

```
Counter/
├── src/
│   ├── App.jsx        # Main counter component
│   ├── App.css        # Styling for the counter
│   ├── main.jsx       # React entry point
│   └── assets/        # Assets folder
├── index.html         # HTML template
├── package.json       # Project dependencies
├── vite.config.js     # Vite configuration
└── README.md          # This file
```

## 🎨 Styling Details

The app features:
- **Gradient Background**: Purple to violet gradient
- **Card Design**: Clean white card with shadow effects
- **Circular Buttons**: Interactive buttons with hover animations
- **Color Scheme**:
  - Add button: Blue-to-purple gradient
  - Remove button: Pink-to-red gradient
- **Animations**: Smooth transitions and lift effects on hover

## 🔧 Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with gradients and animations
- **JavaScript (ES6+)** - Logic and state management

## 📝 Features Implementation

- **State Management**: Uses React's `useState` hook
- **Constraints**: Counter is limited between 0 and 20
- **Button States**: Buttons are disabled at limits
- **Error Prevention**: Built-in validation prevents invalid states

## 🤝 Contributing

Feel free to fork, modify, and enhance this project!

## 📄 License

This is a practice project. Use freely for learning purposes.
