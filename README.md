# 🕹️ Blind 75 Sandbox

A localized JavaScript development environment and solution archive for the **Blind 75** curriculum, wrapped in a low-fi, retro terminal aesthetic. 

Instead of relying on basic browser inspection tools or cloud-based text boxes, this repository combines a customized arcade-style CRT screen with a flat, modular directory of optimized algorithmic solutions.

---

## 🖥️ What is the Sandbox?

The root of this project features a standalone `index.html` file designed to look like a vintage, green-phosphor terminal screen. 

Built-in styling simulates a flickering cathode-ray monitor complete with scanlines and a moody, low-brightness color palette. It features a custom global `print()` utility that securely captures script outputs, formatting and rendering arrays, objects, and boolean evaluations directly onto your screen.

---

## 📂 Repository Architecture

The project utilizes a centralized runtime workflow. Rather than scattering files across deep subdirectories, the codebase uses a flattened layout to keep execution simple and direct:

```text
blind-75-retro-sandbox/
│
├── .gitignore               # Excludes local IDE configurations
├── README.md                # Project documentation
├── index.html               # Central retro terminal UI & test harness
│
└── solutions/               # Monolithic directory for all algorithms
    ├── 001_two_sum.js
    ├── 125_valid_palindrome.js
    └── ...