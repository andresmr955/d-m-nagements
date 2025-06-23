# Contact Form - Static Website Integration

This project is a clean, modern static contact form built with HTML, CSS, and JavaScript. It uses [Formspree](https://formspree.io/) to handle form submissions professionally without needing a backend server.

## 🚀 Features

- Simple and responsive contact form
- Asynchronous form submission using `fetch()`
- Success/error messages with smooth transitions
- Form validation via HTML5
- Minimal and elegant UI styling
- Easily deployable on any static hosting (GitHub Pages, Vercel, Netlify, etc.)

## 🛠 Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES6)**
- **Formspree** (form handling backend)

## 📁 Project Structure

📦 contact-form-project/
├── index.html # Main HTML page
├── style.css # CSS for layout and feedback messages
└── script.js # JS for async form submission

## 🧩 How It Works

1. The HTML form submits user input to Formspree using a unique endpoint.
2. JavaScript intercepts the submit event to:
   - Prevent page reload
   - Send data using the Fetch API
   - Display a styled confirmation or error message inside a `<p>` element
3. CSS handles smooth transitions for the response box (hidden by default, appears with `.show` class).

## 📋 How to Use

### 1. Get a Formspree Endpoint

- Go to [formspree.io](https://formspree.io) and create a free account.
- Create a new form and copy the **endpoint URL** (e.g. `https://formspree.io/f/yourFormId`).

### 2. Replace the Form Action

In your `index.html`, update the form's `action` attribute with your Formspree endpoint:

```html
<form action="https://formspree.io/f/yourFormId" method="POST" id="form-contact">
