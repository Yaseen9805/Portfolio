# Portfolio

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Short description

My personal portfolio site — a single-page, dark-themed layout covering About, Experience, Projects, Stack, Education, and Contact. Built with plain HTML, CSS, and vanilla JavaScript, no framework or build step.

## Technologies

HTML5, CSS3 (custom properties, `clamp()`, CSS Grid), vanilla JavaScript (`IntersectionObserver`), Google Fonts (Space Grotesk, DM Sans, JetBrains Mono)

## Features

- A hero section with a staggered line-reveal headline and a blinking-caret animation
- A scrolling marquee of tech-stack keywords
- A scroll-driven progress bar and nav bar that gains a background once you scroll
- Staggered scroll-reveal animations on every section, powered by `IntersectionObserver`, and fully disabled under `prefers-reduced-motion`
- An experience timeline, a projects list with hover states, a tech-stack grid, and an education section
- A contact section with quick-copy cards for email, phone, GitHub, and LinkedIn

## Project structure

```
.
├── index.html   # markup
├── style.css    # all styles, organized by section
├── main.js      # marquee, scroll progress, and scroll-reveal behavior
└── README.md
```

## How to run the project

1. Clone the repo
2. Open `index.html` directly in your browser (no build step or server required)
