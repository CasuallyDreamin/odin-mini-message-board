# Odin Mini Message Board

A simple mini message board built following **The Odin Project** Node.js curriculum, as part of the JavaScript full-stack learning path.

This project demonstrates the basics of:

* Node.js & Express for server-side logic
* EJS templating for dynamic HTML rendering
* SQLite for persistent message storage
* CSS flexbox layouts for responsive design

---

## About

This is a small web app where users can post **anonymous messages** to a public board. Messages are displayed in reverse chronological order, and each message shows the content, optional name, and timestamp.

The goal of this project was to practice:

* Handling **GET and POST requests**
* Creating **dynamic views** with EJS partials
* Managing a lightweight **database** for persistence
* Structuring a project with modular **components and static assets**

---

## Features

* Post anonymous messages via a simple form
* Messages stored in a **SQLite database** (`messages.db`)
* Responsive message layout that wraps and stretches naturally
* About and Contact pages with personal info and links

---

## Tech Stack

* **Node.js**
* **Express.js**
* **EJS** templating
* **SQLite** (via `better-sqlite3`)
* **CSS** (flexbox, responsive design)

---

## Usage

1. Clone this repository:

   ```bash
   git clone https://github.com/casuallydreamin/odin-mini-message-board.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the server:

   ```bash
   node app.js
   ```
4. Open your browser at `http://localhost:3000`

---

## Future Improvements

* Add **user authentication** for named accounts
* Enable **message deletion** or editing
* Implement **live updates** with AJAX or WebSockets
* Enhance **styling** with themes or animations

---

## About the Developer

This project was built by **casuallydreamin;**, a junior full-stack developer interested in:

* Web development
* Game development
* Rock music and cats

## Check out more projects on [GitHub](https://github.com/casuallydreamin).
