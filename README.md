# 📘 Vocabulary Learning App "EnglishJanala"

[🌐 Live Site](https://darling-crisp-cd5343.netlify.app/)

An interactive, Javascript based vocabulary learning platform where users can log in, explore curated vocabulary lessons, and dive deep into word meanings, pronunciation, examples, and synonyms via dynamic modals. It features smooth scrolling, conditional rendering, loading spinners, and clean UX — built entirely as per the provided Figma design.

---

## 🎯 Features

### 🧭 Navbar

- Fixed at the top with a subtle bottom border
- Contains:
  - **Logo & Brand Name** on the left
  - Three action buttons on the right:
    - ❓ **FAQ** → scrolls smoothly to FAQ section
    - 📘 **Learn** → scrolls smoothly to Vocabulary section
    - 🚪 **Logout** → logs the user out and returns to landing view

### 🖼️ Banner Section

- Contains:
  - Left side: Title, description, and functional **Login Form**
  - Right side: Thematic image as per Figma
- **Login Logic:**
  - Name and Password is required
  
  - On success:
    - Displays success alert
    - Hides Banner
    - Shows Navbar, Vocabulary, and FAQ
  - On Logout: reverses above behavior

### 📚 Vocabulary Section

- Displays only after login
- Features:
  - Center-aligned title (from Figma)
  - Lesson buttons fetched from **API-01**
  - Default message before any lesson is selected
  - When a lesson button is clicked:
    - Fetch words from **API-02**
    - Show all words in a card format:
      - Word
      - Meaning & Pronunciation
      - Two functional buttons (as per Figma icons)
    - No data? Show `No Word Found` message
  - Highlights active lesson button
  - Shows a **loading spinner** while data is being fetched

### 🔍 Vocabulary Details Modal

- Triggered by clicking the **details icon** on a word card
- Fetches word details from **API-03**
- Displays:
  - Word with pronunciation
  - Example sentence
  - Synonyms list
  - ✅ **Complete Learning** button to close modal

### ❓ FAQ Section

- Structured question & answer list matching Figma:
  1. Difference between `var`, `let`, and `const`
  2. Difference between `map()`, `forEach()`, and `filter()`
  3. Explanation of arrow functions vs regular functions
  4. How JavaScript Promises work
  5. How closures work in JavaScript

### 🦶 Footer

- Present on both landing and logged-in views
- Includes:
  - Logo
  - Social media icons
- Social icons open your profiles in **new browser tabs**

---

## 💡 Challenge Requirements Fulfilled

- ✅ Smooth scrolling for Learn & FAQ buttons
- ✅ Banner-only landing view before login
- ✅ Conditional rendering post-login
- ✅ Fully working login/logout logic
- ✅ Modal functionality for vocabulary details
- ✅ Avoids falsy data (null/undefined) rendering
- ✅ Loading spinner while fetching vocabulary
  
