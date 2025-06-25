# 🌐 CSCI 270 – Web/Mobile App Development: A Living Textbook

Welcome to the **Living Textbook** for CSCI 270 at Ave Maria University. This is your evolving, lecture-driven companion to our course on Web and Mobile App Development.

> ⚠️ This is not a replacement for lecture or assigned readings—it *amplifies* them. Every section is based on real-time class content, cleaned up, expanded, and annotated to support your ongoing learning.

---

## 📁 Code Repository

You can access all in-class code examples in the [src](src) directory

Use this to:
- Follow along with live coding
- Catch up on missed examples
- Review concepts anytime

### How to Get the Code

1. Visit the GitHub link above
2. Click **Code** → **Download ZIP**, or run:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```
3. Open the folder in your code editor
4. Open any `index.html` file in your browser

---

## 💪 Notes
- This textbook is updated regularly.
- Every example you see here was demonstrated in class.
- Some content edited and organized with help from ChatGPT.

---

## ✉️ Questions or Suggestions?
Reach out via Canvas or email: **[trevor.tomesh@avemaria.edu](mailto:trevor.tomesh@avemaria.edu)**

---

<sub>This Living Textbook is written and maintained by Dr. Trevor Tomesh, with assistance from ChatGPT to ensure clarity and completeness.</sub>


## 📚 Table of Contents

- [📘 Chapter 1: Introduction & Syllabus Overview](#-chapter-1-introduction--syllabus-overview)
- [📘 Chapter 2: Introduction to HTML](#-chapter-2-introduction-to-html)
- [📘 Chapter 3: Introduction to CSS](#-chapter-3-introduction-to-css)
- [📘 Chapter 4: CSS Selectors](#-chapter-4-css-selectors)
- [📘 Chapter 5: Flexbox and Grid Layout](#-chapter-5-flexbox-and-grid-layout)
- [📘 Chapter 6: Responsive Design and Media Queries](#-chapter-6-responsive-design-and-media-queries)
- [📘 Chapter 7: Git and GitHub Basics](#-chapter-7-git-and-github-basics)
- [📘 Chapter 8: The README.md File](#-chapter-8-the-readmemd-file)
- [📘 Chapter 9: Introduction to JavaScript](#-chapter-9-introduction-to-javascript)
- [📘 Chapter 10: JavaScript Arrays and the DOM](#-chapter-10-javascript-arrays-and-the-dom)
- [📘 Chapter 11: Loops in JavaScript](#-chapter-11-loops-in-javascript)
- [📘 Chapter 12: JavaScript Object Basics](#-chapter-12-javascript-object-basics)
- [📘 Chapter 13: The DOM (Document Object Model)](#-chapter-13-the-dom-document-object-model)
- [📘 Chapter 14: Event Listeners](#-chapter-14-event-listeners)
- [📡 Chapter 15: AJAX and the Fetch API](#-chapter-15-ajax-and-the-fetch-api)
- [📘 Chapter 16: HTTP Methods](#-chapter-16-http-methods)
- [📘 Chapter 17: RESTful APIs](#-chapter-17-restful-apis)
- [📘 Chapter 18: Object-Oriented Programming in JavaScript (Part 1)](#-chapter-18-object-oriented-programming-in-javascript-part-1)
- [📘 Chapter 19: OOP in JavaScript, Part 2: Click Counter Example](#-chapter-19-oop-in-javascript-part-2-click-counter-example)

---

# 📘 Chapter 1: Introduction & Syllabus Overview

> “We’ll get the hang of this together.” – Dr. T

## 👋 Meet Your Instructor

Dr. Trevor Tomesh (or just **Dr. T**) brings international teaching and research experience in computer science and physics. After completing his undergrad in physics at UW–River Falls, he studied computing in England and later earned his PhD in Canada. He currently teaches in Wisconsin and is excited to be joining Ave Maria University for the first time.

## 🙏 A Prayerful Beginning

The course begins with a short prayer asking the Holy Spirit to open students’ eyes, ears, minds, and hearts to the truth and beauty of God’s perfect design.

## 💡 Course Overview

CSCI 270 is a fast-paced, **project-based** introduction to full-stack web and mobile application development. Topics include:

- HTML, CSS, and JavaScript
- AJAX and client-server communication
- Git and GitHub for version control
- Server-side programming with Python and Django
- SQL and relational databases
- Web security and scalable design
- Intro to React and single-page applications

## 🧰 Required Tools

- **JetBrains WebStorm** (free for students with a .edu address)
- GitHub account
- Canvas (for lectures, assignments, and announcements)
- Panopto (for video lectures)
- A modern web browser

Students are encouraged to use WebStorm, which will be the primary IDE supported in the course. Other IDEs are permitted.

## 🗓️ Weekly Routine

Each week will include:

- 3–4 short video lectures
- At least one discussion post
- Assignments or quizzes

Everything will be posted to and submitted through Canvas.

## 📊 Grading Breakdown

- Projects (3 total): **45%**
- Weekly Quizzes (6): **15%**
- Discussion Posts (6): **5%**
- Midterm Exam: **15%**
- Final Exam: **20%**

Emphasis is placed on projects and consistent weekly engagement.

## 📎 Late Work Policy

- 5% penalty per day late, up to 40% max deduction
- Extensions available with valid documentation (e.g., medical note)
- Communication is key—email Dr. T if issues arise

## 🤖 ChatGPT & AI Use Policy

Dr. T **encourages** responsible AI usage:

- OK for brainstorming, reviewing code, and guided help
- **Not allowed** on quizzes or exams
- **Must be cited** properly (guide provided)
- Work that is fully AI-generated will receive a **zero**

Use of ChatGPT is subject to review and must follow academic integrity standards.

## 📜 Academic Integrity

Students must abide by the AMU Honor Code. Violations, including unauthorized AI use, may result in course failure or dismissal.

## 🕰️ Office Hours

- Monday, Wednesday, Friday: **10:00am–12:30pm CST**
- Or by appointment via Calendly (linked in Canvas)
- Will accommodate other times if needed

## 📝 Final Notes

- The schedule is **tentative** and may change
- Dr. T will post updates transparently, showing edits with strikethrough and red text
- All lectures and coursework are copyright protected

---

Dr. T ends with:  
> “Thank you very much for your attention. Please don’t hesitate to reach out if you have any questions—or even suggestions. I’m looking forward to a great semester with you all.”

---

# 📘 Chapter 2: Introduction to HTML

> "HTML is the skeleton. CSS is the style. JavaScript is the nervous system."

## 🧠 What is HTML?

HTML stands for **HyperText Markup Language**. It is:
- Not a programming language (no logic or control flow)
- A **markup language** used to define **structure and content** of webpages
- Often paired with:
  - **CSS** (style)
  - **JavaScript** (behavior)

HTML is like the bones of a webpage—everything else builds on top.

---

## 🛠️ Getting Started with WebStorm

- **WebStorm** is the recommended IDE
- Free for students (.edu email required)
- Follow the provided tutorial to install
- Initial setup includes creating a new project with an `index.html` file
- WebStorm will help auto-suggest and format tags

---

## 🏗️ Basic HTML Structure

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
```

- `<!DOCTYPE html>` declares HTML5
- `<html>` is the root element
- `<head>` contains meta-data like `<title>`
- `<body>` contains visible content like `<h1>`, `<p>`

---

## 🧩 Tags and Elements

- Tags are **paired**: `<p>...</p>`
- Elements can be **nested**
- Use **indentation** for readability
- Some tags are **self-closing** (e.g., `<br>`, `<img>`)

---

## 📝 Common Elements

| Tag            | Purpose                                 |
| -------------- | --------------------------------------- |
| `<h1>`–`<h6>`  | Headings (from most to least important) |
| `<p>`          | Paragraphs                              |
| `<br>`         | Line breaks                             |
| `<a>`          | Links                                   |
| `<img>`        | Images                                  |
| `<ul>`, `<ol>` | Lists (unordered/ordered)               |
| `<li>`         | List items                              |
| `<input>`      | Form fields (previewed only)            |

---

## 🌄 Images

```html
<img src="porygon.png" alt="Porygon Pokémon">
<img src="https://example.com/kitten.jpg" alt="An adorable kitten">
```

- `src`: path to image (relative or full URL)
- `alt`: description for accessibility and broken image fallback

---

## 🔗 Links

```html
<a href="https://www.example.com">Visit Example</a>
```

- Opens external site
- Must include `http://` or `https://`

---

## 🧾 Lists

### Unordered (bullets)
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

### Ordered (numbers)
```html
<ol>
  <li>Buy pre-made cookie dough</li>
  <li>Preheat oven to 325°F</li>
  <li>Place dough on baking sheet</li>
  <li>Bake for 10 minutes</li>
  <li>Take out of oven</li>
  <li>Let cool</li>
  <li>Eat cookies</li>
</ol>
```

---

## 🧪 Preview of Form Elements

```html
<input type="text" placeholder="Enter your name">
<input type="email" placeholder="Enter your email">
<input type="checkbox" checked> Subscribe to newsletter
```

These are only visual now—full functionality comes later with forms and JavaScript.

---

## ✅ Summary

You’ve learned:
- What HTML is and how it works
- How to create headings, paragraphs, links, images, and lists
- How to preview HTML pages in WebStorm
- Best practices for readability and accessibility


---

_This chapter was transcribed from a live lecture and organized with the help of ChatGPT to ensure clarity and completeness._

---

# 📘 Chapter 3: Introduction to CSS

> “HTML is the skeleton. CSS is the style.”

## 🎨 What is CSS?

CSS stands for **Cascading Style Sheets**. It controls the **appearance** of web content:
- Colors
- Fonts
- Layouts
- Spacing

While HTML gives your site structure, **CSS makes it beautiful**.

---

## 💡 Three Ways to Use CSS

### 1. Inline CSS
Applied directly to an element using the `style` attribute:
```html
<p style="color: red;">This is red text.</p>
```
Not recommended—use sparingly.

### 2. Internal CSS
Placed within a `<style>` block inside the `<head>`:
```html
<style>
  p {
    font-size: 40px;
    color: blue;
  }
</style>
```
Useful for single-page demos.

### 3. External CSS ✅ (Best Practice)
Stored in a separate `.css` file and linked to your HTML:
```html
<link rel="stylesheet" href="styles.css">
```
Keeps code organized and reusable.

---

## 🧪 Example: External CSS Styles
In `styles.css`:
```css
/* Headings */
h1 {
  color: darkblue;
  font-family: Georgia, serif;
  border-bottom: 2px solid #ccc;
  padding-bottom: 5px;
}

h2 {
  color: teal;
  margin-top: 20px;
}

h3 {
  color: #555;
  font-style: italic;
}

/* Paragraphs */
p {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* Lists */
ul {
  list-style-type: square;
  padding-left: 20px;
}

ol {
  background-color: #f9f9f9;
  padding: 10px 10px 10px 20px;
  border-left: 4px solid orange;
}

/* Inputs */
input[type="text"],
input[type="email"] {
  margin: 5px 0;
  padding: 5px;
  border: 1px solid #aaa;
  border-radius: 4px;
}

input[type="checkbox"] {
  margin-top: 10px;
}

/* Links */
a {
  color: darkred;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Images */
img {
  width: 200px;
  margin: 10px;
  border: 2px solid #eee;
  border-radius: 8px;
}
```
In your `index.html`, be sure to link the stylesheet:
```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

---

## 🧭 CSS Syntax Breakdown
```css
selector {
  property: value;
}
```
- **Selector**: targets HTML elements (e.g., `p`, `h1`, `a:hover`)
- **Property**: what you want to change (e.g., `color`, `font-size`)
- **Value**: the new value for that property

---

## ✅ Recap

You’ve learned:
- How to apply styles inline, internally, and externally
- How to write CSS rules with selectors and declarations
- How to customize layout, typography, images, inputs, and links

---

## 🎯 Practice Activity
Try the following:
- Center your `<h1>` heading on the page
- Add a **pastel background color** to the body
- Give your images a **drop shadow**
- Make your grocery list text **green**
- Bonus: Add a **Google Font** to your page

> You’ll find this activity posted on Canvas as well.

---

_This chapter was transcribed from a live lecture and organized with the help of ChatGPT to ensure clarity and completeness._

---

# 📘 Chapter 4: CSS Selectors

> “Selectors are how CSS knows *what* to style.”

## 🎯 What Are Selectors?

A **selector** in CSS is the part of a rule that tells the browser *which* HTML elements to apply the style to. Think of it as a filter or a label.

You can target elements by:
- Element name (`p`, `h1`, etc.)
- Class (`.important`)
- ID (`#my-heading`)
- Relationships (`.card p`)
- State (`a:hover`)

---

## 🧱 1. Element Selectors

These are the simplest. They apply styles to all instances of a given HTML tag:
```css
p {
  font-family: Arial;
  color: #333;
}
```
This rule styles *every* `<p>` tag on the page.

---

## 🏷️ 2. Class Selectors

Use when you want to apply styles to multiple elements that share the same "label."

In HTML:
```html
<p class="important">Don't forget your towel.</p>
```
In CSS:
```css
.important {
  font-weight: bold;
  color: red;
}
```
You can apply the `.important` class to any element: `<p>`, `<h3>`, etc. It will override any general styling with the class-specific rules.

---

## 🆔 3. ID Selectors

Used for **one specific element** on the page:

In HTML:
```html
<h2 id="my-heading">You can select this by ID</h2>
```
In CSS:
```css
#my-heading {
  text-transform: uppercase;
  color: darkgreen;
}
```
🔸 IDs should be unique per page.
🔸 Use sparingly for styling—better suited for JavaScript hooks.

---

## 🎯 4. Group Selectors

Style multiple types of elements with a single rule:
```css
h1, h2, h3 {
  font-family: Georgia, serif;
  color: cyan;
}
```
This saves time and avoids repetition—great for consistent headings, list styles, etc.

---

## 🧬 5. Descendant Selectors

Targets elements **inside** other elements:

HTML:
```html
<div class="card">
  <h2>Silly Card Heading</h2>
  <p>This text is inside the card.</p>
</div>
```
CSS:
```css
.card p {
  color: purple;
}
```
This changes only `<p>` tags *inside* elements with the class `card`. The heading remains unaffected unless targeted separately.

---

## 🌀 6. Pseudo-class Selectors

Apply styles based on **interaction** or **state**.
Example:
```css
a:hover {
  text-decoration: underline;
  color: blue;
}
```
Other pseudo-classes include:
- `:focus` — when a form field is active
- `:visited` — after a link has been clicked
- `:first-child`, `:last-child` — structural position

---

## ✅ Recap

- **Element**: styles all of one kind (`p`, `h1`, etc.)
- **Class**: reusable, starts with `.`
- **ID**: unique, starts with `#`
- **Group**: combine selectors with commas
- **Descendant**: targets elements inside others
- **Pseudo-class**: style based on state or interaction

> Mastering selectors gives you precision and control in your designs. It's the heart of CSS power.

---

_This chapter was transcribed from a live lecture and organized with the help of ChatGPT to ensure clarity and completeness._

---

# 📘 Chapter 5: Flexbox and Grid Layout

> “Think of your layout like Tupperware—containers within containers.”

## 🎯 Why Layout Systems Matter
Before this chapter, we styled individual elements—colors, fonts, and hover effects. But now it's time to lay out those elements in an organized and responsive way. Enter: **Flexbox** and **CSS Grid**.

---

## 🔳 Flexbox: One-Dimensional Layout
Flexbox (Flexible Box Layout) is great when you want to arrange items **in a row** or **in a column**, but not both.

### ✅ Key Concepts
- Works in one direction at a time: horizontal **or** vertical
- Align items, center content, create spacing between elements

### 🧪 Example: Simple Row Layout
HTML:
```html
<div class="container">
  <div class="box">A</div>
  <div class="box">B</div>
  <div class="box">C</div>
</div>
```
CSS:
```css
.container {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  height: 200px;
}

.box {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}
```

You can also change layout direction with:
```css
flex-direction: column;
```
Or align content with:
```css
justify-content: flex-start | center | flex-end | space-between;
```

---

## 🔲 Grid: Two-Dimensional Layout
Grid is perfect when you want to control layout **both horizontally and vertically**.

### ✅ Key Concepts
- Defines rows and columns
- Uses **fractional units (fr)** to divide space
- Great for photo galleries, card layouts, dashboards

### 🧪 Example: Grid with Two Columns
HTML:
```html
<div class="grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```
CSS:
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.item {
  background-color: peachpuff;
  padding: 20px;
  text-align: center;
}
```

You can also use:
```css
grid-template-columns: 1fr 2fr 1fr;
```
Or mix fixed and flexible:
```css
grid-template-columns: 100px repeat(2, 1fr) 50px;
```

---

## 🧠 When to Use Flex vs. Grid
| Layout Need                | Use     |
| -------------------------- | ------- |
| Single direction (row/col) | Flexbox |
| Complex layout, rows+cols  | Grid    |
| Stacking or aligning       | Flexbox |
| Page/template layout       | Grid    |
| Unknown item count         | Grid    |

---

## 🧪 Activity
Build a layout that uses both Flexbox and Grid:
1. Use Flexbox to horizontally center a title and navigation links.
2. Use Grid to lay out a 3x2 set of product cards or boxes.
3. Use `gap`, `align-items`, and `justify-content` to space your elements neatly.

> Try inspecting your layout with Chrome DevTools to visualize spacing and container dimensions.

---

_This chapter was transcribed from a live lecture and organized with the help of ChatGPT to ensure clarity and completeness._

---

# 📘 Chapter 6: Responsive Design and Media Queries

> "Think of your website as a shapeshifter—it should adapt to whatever screen it’s viewed on."

## 📱 Why Responsive Design?
A responsive website looks good on all devices: smartphones, tablets, laptops, and even TVs. Without it, your users will likely experience broken layouts, cut-off content, and tiny unreadable text. Responsive design ensures usability and visual appeal no matter the screen size.

---

## 🧪 Building a Non-Responsive Page First
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-Responsive Page</title>
  <style>
    .container {
      width: 1000px;
      margin: 0 auto;
      background: #eee;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Hello</h1>
    <p>This page has a fixed width of 1000 pixels.</p>
  </div>
</body>
</html>
```
### 🚫 What Happens?
When you shrink the browser or use a smaller device, the layout breaks. Content overflows or gets cut off—bad UX!

---

## ✅ Making it Responsive
```css
.container {
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  background: #f8f8f8;
  padding: 20px;
}
```
This lets the container scale to 90% of the screen width, but never exceed 1000px. It feels fluid and adjusts to different devices.

---

## 🖼️ Responsive Images
### 🚫 Fixed Size Image:
```html
<img src="big-photo.jpg" alt="Big Photo">
```
### ✅ Responsive Image:
```html
<img src="big-photo.jpg" alt="Big Photo" style="width: 100%; height: auto;">
```
This ensures the image scales within its container and doesn’t overflow on smaller screens.

---

## 🎛️ Media Queries
Media queries allow you to apply CSS styles **conditionally**, based on screen width or device type.

### 🧪 Example:
```css
.flex-container {
  display: flex;
  gap: 20px;
}

.box {
  flex: 1;
  background: lightblue;
  padding: 20px;
  text-align: center;
}

@media (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
}
```
This layout switches from a horizontal row to a vertical column when the screen is narrower than 600px.

---

## 🧱 Responsive Grid
You can also combine Grid with media queries, or use modern grid techniques like:
```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.item {
  background: peachpuff;
  padding: 20px;
  text-align: center;
}
```
This automatically adjusts the number of columns depending on screen width. Items will stack or expand fluidly.

---

## 🔢 Common Breakpoints
Use media queries around points where your layout starts to break:
- `480px` (smartphones)
- `768px` (tablets)
- `1024px` (desktops)

Avoid targeting specific devices—just focus on layout behavior.

---

## 📌 Summary
- Use relative widths (`%`, `vw`, `fr`) instead of fixed (`px`)
- Add `max-width` to avoid layout sprawl
- Make images responsive with `width: 100%`
- Use media queries to apply styles based on screen size
- Prefer `auto-fit` and `minmax()` in grid layouts for maximum flexibility

Responsive design ensures a **great experience** for all users, on all screens.

---

_This chapter was transcribed from a live lecture and refined with the help of ChatGPT for clarity and completeness._

---

# **Chapter 7: Git and GitHub Basics**





Welcome to Chapter 7 of our Living Web Development Textbook! In this chapter, we introduce **Git**, a version control system, and **GitHub**, a collaborative platform where developers host their projects online.





## **🧠 Key Concepts**





- The difference between **Git** and **GitHub**
- Installing Git (Mac/Linux/Windows)
- Initializing and cloning repositories
- Git workflow: add, commit, push, pull
- Creating files and committing changes
- Understanding branches and version history





------





## **🛠️ What is Git vs GitHub?**





- **Git** is a local tool that tracks changes to your files over time.
- **GitHub** is an online platform where you can host Git repositories and collaborate with others.





Git is like a local journal of your coding progress.

GitHub is the place you publish that journal to share and collaborate.



------





## **🧰 Installing Git**







### **Mac:**



```
brew install git
```



### **Linux:**



```
sudo apt-get install git
```



### **Windows:**





1. Go to https://git-scm.com
2. Download and run the installer.
3. Install both **Git Bash** and the GUI if you want it.





Check your installation:

```
git --version
```



------





## **📦 Creating and Cloning a GitHub Repository**





1. Create a GitHub account at https://github.com
2. Create a new repo (e.g., webdev-su2025)
3. Do **not** initialize with README or license
4. Copy the HTTPS clone link



```
mkdir class_repos
cd class_repos
git clone https://github.com/your-username/webdev-su2025.git
cd webdev-su2025
```



------





## **📝 Basic Workflow**





Create a file and add content:

```
touch index.html
echo "<h1>Hello GitHub</h1>" > index.html
```

Check status:

```
git status
```

Stage the file:

```
git add index.html
```

Commit it:

```
git commit -m "Add index.html"
```

Push it:

```
git push
```

Check GitHub to verify your file is there.



------





## **📖 Summary of Commands**



| **Command**         | **Description**                |
| ------------------- | ------------------------------ |
| git clone           | Copy repo from GitHub to local |
| git add             | Stage changes                  |
| git commit -m "msg" | Save a snapshot                |
| git push            | Upload to GitHub               |
| git pull            | Sync changes from GitHub       |
| git status          | Check file state               |
| git log             | View commit history            |



------





## **💡 Pro Tips**





- Use git add . to stage all changes
- Always write meaningful commit messages
- Run git pull before starting work
- Use branches to safely test new ideas





------





## **🧪 Try It Yourself**





1. Create your own GitHub repo
2. Clone it locally
3. Add a README.md
4. Commit and push your changes
5. Edit the file on GitHub and then git pull to sync





------





## **❓ Practice Questions**





1. What’s the difference between git and GitHub?
2. Why is git add needed before git commit?
3. What happens if you forget to git pull before pushing?
4. How does branching help prevent data loss or bugs?





------



This chapter was transcribed and formatted with the assistance of ChatGPT to reflect Dr. Trevor Tomesh’s live lecture for CSCI 270 at Ave Maria University.

---

# 📘 Chapter 8: The README.md File

> “If someone visits your repo, the README is the handshake—it says hello, this is what I’m about.”

## 📄 What is a README.md?
A `README.md` file is the **first thing people see** when they visit your GitHub repository. It:
- Explains what your project does
- Provides setup and usage instructions
- Communicates your goals and structure
- Is written in **Markdown** (the `.md` extension stands for markdown)

---

## 📚 Why Markdown?
Markdown is a simple, readable formatting language.
- Easy to write
- Converts cleanly to HTML
- Supported natively on GitHub and many other platforms

---

## 🧪 Example README.md
```markdown
# Recipe App

A simple recipe manager that lets you search and save your favorite meals.

## Features
- Search recipes by name or ingredient
- Save your favorite recipes
- Works on desktop and mobile

## Tech Stack
- HTML, CSS, JavaScript
- Django (Python)
- PostgreSQL

## Installation
1. Clone the repo
2. Run `npm install`
3. Start the server with `npm start`

## Screenshots
![screenshot](screenshot.png)

## License
MIT
```

---

## ✍️ Basic Markdown Syntax
| Markdown       | Output      |
| -------------- | ----------- |
| `# Heading 1`  | Heading 1   |
| `## Heading 2` | Heading 2   |
| `**bold**`     | **bold**    |
| `*italic*`     | *italic*    |
| `- List item`  | • List item |
| `` `code` ``   | `code`      |
| `[link](url)`  | [link](url) |

---

## ✅ What to Include in Your README
- Project title and brief description
- Technologies used
- Setup instructions (install, run, build)
- Screenshots or gifs (if possible)
- Links (e.g., deployed site, documentation)
- License (e.g., MIT)

You can add more sections like:
- Contributing
- Known issues
- Roadmap
- Credits

---

## 🧠 Tips
- Keep it short but informative
- Use proper headings for structure
- Write in complete sentences
- Assume your reader knows nothing about your project

> A good README can make your project more approachable, professional, and shareable.

---

_This chapter was transcribed from a live lecture and refined with the help of ChatGPT for clarity and completeness._



---



# 📘 Chapter 9: Introduction to JavaScript

> “If HTML is the skeleton and CSS the skin, JavaScript is the soul that brings a webpage to life.”

## 🧠 What Is JavaScript?
JavaScript is the **programming language of the web**. It gives behavior to otherwise static pages. With JavaScript, you can:
- Respond to user input
- Modify HTML content
- Animate elements
- Validate forms
- Load new data without reloading the page

In short: JavaScript makes your webpage **interactive**.

---

## 🛠 Where Does JavaScript Go?
You can write JavaScript in two main ways:
- Inline in an HTML document using `<script>` tags
- In a separate `.js` file that you reference from your HTML

```html
<!-- Inline example -->
<script>
  alert("Hello world!");
</script>
```

---

## ✍️ Your First Script
```html
<h1 id="welcome-message"></h1>
<script>
  const username = "John";
  let greeting = "Welcome to the site, ";
  document.getElementById("welcome-message").textContent = greeting + username + "!";
</script>
```
This sets the content of the `<h1>` element to display a personalized welcome message.

---

## 💡 Declaring Variables
- `const`: For values that never change
- `let`: For values that might change later
- `var`: **Deprecated**—don’t use in modern code

```javascript
const username = "John";
let greeting = "Welcome!";
```

---

## 🧠 Variable Scope
- `let` and `const` have **block scope**
- `var` has **function scope**, which is confusing and prone to bugs

---

## 🔁 Updating Web Content
You can target elements and change their content using:
```javascript
document.getElementById("welcome-message").textContent = greeting + username + "!";
```
This is part of the **Document Object Model (DOM)**—a representation of your HTML structure that JavaScript can manipulate.

---

## 🎨 Interactive Background Color Example
You can use JavaScript to dynamically update styles:

```html
<body>
  <h1 id="welcome-message"></h1>
  <h2>Click the button to change the background color</h2>
  <button onclick="changeBackgroundColor()">Change Background</button>

  <script>
    let color = "lightblue";
    function changeBackgroundColor() {
      color = (color === "lightblue") ? "lightcoral" : "lightblue";
      document.body.style.backgroundColor = color;
    }
  </script>
</body>
```

This toggles the page background color each time the button is clicked.

---

## ❔ Ternary Operator
```javascript
color = (color === "lightblue") ? "lightcoral" : "lightblue";
```
This is a shortcut for `if...else`, checking if the color is "lightblue" and toggling it accordingly.

---

## ✅ Summary
- JavaScript adds interactivity and behavior to your pages
- Use `<script>` tags to include JavaScript
- Use `const` and `let` instead of `var`
- JavaScript can read and modify the HTML using the DOM
- Use event handlers (like `onclick`) to trigger JavaScript actions
- Ternary operators provide concise `if...else` logic

---

_This chapter was transcribed and edited with the help of ChatGPT, based on a live lecture by Dr. Trevor Tomesh for CSCI 270 at Ave Maria University._

---

# 📘 Chapter 10: JavaScript Arrays and the DOM

> “An array gives us structure. The DOM lets us show it.”

## 🧠 Key Concepts
- Declaring and using arrays
- Looping with `forEach()`
- Injecting HTML using JavaScript
- Linking external `.js` files
- `innerHTML` vs `textContent`

---

## 📂 Setting Up External JavaScript Files
To keep things clean, JavaScript code can be moved from `<script>` tags to external `.js` files.

**Steps:**
1. Create a `.js` file (e.g. `script.js`)
2. Paste your code inside it
3. In your HTML:
```html
<script src="script.js"></script>
```

This lets you reuse and organize code more efficiently.

---

## 🍎 Building an Array and Rendering to the DOM
You can store data in an array and render it to the page dynamically:

**HTML:**
```html
<h1>Fruit</h1>
<ul id="fruit-list"></ul>
<button onclick="addFruit()">Add Fruit</button>
<script src="fruit.js"></script>
```

**JavaScript (fruit.js):**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];

displayFruit();

function displayFruit() {
  const list = document.getElementById("fruit-list");
  list.innerHTML = ""; // Clear list before rendering new content

  fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

function addFruit() {
  fruits.push("Dragonfruit");
  displayFruit();
}
```

Each time you click the button, `addFruit()` adds a new item to the array and re-renders the list.

---

## 🧠 `innerHTML` vs `textContent`
- `textContent`: Just changes the text
- `innerHTML`: Can inject HTML tags (e.g. `<li>`, `<strong>`, etc.)

⚠️ **Security Note**: Avoid using `innerHTML` with untrusted user input.

---

## ✅ Summary
- Arrays let us store and manage lists of items
- `forEach()` can loop through and render data
- DOM manipulation lets JavaScript change what users see
- External JS files improve code organization
- Use `textContent` for safe text changes, `innerHTML` for structured HTML injection

---

_This chapter was transcribed and structured with the help of ChatGPT, based on Dr. Trevor Tomesh's live lecture for CSCI 270 at Ave Maria University._



---



# 📘 Chapter 11: Loops in JavaScript

> “Loops let your code *breathe*. Instead of copying and pasting, you *trust the machine* to do repetition right.”

## 🔁 Types of Loops
In JavaScript, there are three primary types of loops:
- `for` loop – When you know **how many times** you want to run a block
- `while` loop – When you want to repeat **until a condition becomes false**
- `forEach()` – When you're iterating over **arrays**

---

## 🚀 For Loop: Counting Up
```html
<h2>Count from 1 to 10</h2>
<div id="for-output"></div>
<script>
  let div = document.getElementById("for-output");
  for (let i = 1; i <= 10; i++) {
    let p = document.createElement("p");
    p.textContent = `Number ${i}`;
    div.appendChild(p);
  }
</script>
```
This creates a `<p>` tag for each number from 1 to 10 and appends it to the `div`.

---

## ⏳ While Loop: Counting Down
```html
<h2>Countdown</h2>
<div id="while-output"></div>
<script>
  let div = document.getElementById("while-output");
  let count = 10;
  while (count > 0) {
    let p = document.createElement("p");
    p.textContent = `T-minus ${count}`;
    div.appendChild(p);
    count--;
  }
</script>
```
This creates a countdown using a `while` loop from 10 to 1.

---

## 🧩 forEach Loop: Listing Pokémon
```html
<h2>My Pokémon Team</h2>
<ul id="team-list"></ul>
<script>
  let team = ["Porygon", "Mew", "Mewtwo", "Mimikyu", "Pikachu", "Celebi"];
  let ul = document.getElementById("team-list");

  team.forEach(pokemon => {
    let li = document.createElement("li");
    li.textContent = pokemon;
    ul.appendChild(li);
  });
</script>
```
This example loops through a list of Pokémon and creates `<li>` items in the list.

---

## 📌 Summary
- `for` = repeat a set number of times
- `while` = repeat *as long as* a condition is true
- `forEach` = loop through array items (best for array-based data)
- Use `textContent` over `innerHTML` unless you *need* to inject HTML tags

> Loops are the cornerstone of interactivity. They allow your site to respond to users and scale up efficiently.

---

_This chapter was transcribed from a live lecture by Dr. Trevor Tomesh for CSCI 270 and refined with ChatGPT to clarify concepts and code._



---



# **📘 Chapter 12: JavaScript Object Basics**





> “Objects are like Pokédex entries—they hold everything you need to know about a thing.”





## **🧠 What Are JavaScript Objects?**





Objects store related data and functionality in key-value pairs. Think of them as labeled boxes:

```
const porygon = {
  name: "Porygon",
  type: "Normal",
  level: 25,
  ability: "Download"
};
```

Each **key** (e.g., name) is associated with a **value** (e.g., "Porygon").



------





## **🧪 Interacting with Objects**





You can read or change values like this:

```
console.log(porygon.name); // "Porygon"
porygon.level += 1;
porygon.move = "Tackle";
```

You can also loop through all properties:

```
for (let key in porygon) {
  console.log(key + ": " + porygon[key]);
}
```



------





## **🖼️ Displaying an Object in the DOM**



```
<h1>Pokémon Viewer</h1>
<div id="pokemon-info"></div>
<button onclick="levelUp()">✨ Level Up</button>
<button onclick="teachMove(prompt('Enter a new move:'))">⚔️ Teach Move</button>
const porygon = {
  name: "Porygon",
  type: "Normal",
  level: 25,
  ability: "Download"
};

function displayPokemon() {
  const container = document.getElementById("pokemon-info");
  container.innerHTML = "<h3>Porygon Stats</h3>";
  for (let key in porygon) {
    const p = document.createElement("p");
    p.textContent = `${key}: ${porygon[key]}`;
    container.appendChild(p);
  }
}

displayPokemon();

function levelUp() {
  porygon.level++;
  displayPokemon();
}

function teachMove(moveName) {
  if (moveName) {
    porygon.move = moveName;
    displayPokemon();
  }
}
```



------





## **🧩 Arrays of Objects**



```
const party = [
  { name: "Pikachu", type: "Electric", level: 18 },
  { name: "Squirtle", type: "Water", level: 16 },
  { name: "Charmander", type: "Fire", level: 17 }
];
<h2>🐍 Pokémon Party</h2>
<ul id="party-list"></ul>
function displayParty() {
  const list = document.getElementById("party-list");
  list.innerHTML = "";
  party.forEach(pokemon => {
    const li = document.createElement("li");
    li.textContent = `${pokemon.name} (Lvl ${pokemon.level} - ${pokemon.type})`;
    list.appendChild(li);
  });
}

displayParty();
```



------





## **✅ Summary**





- JavaScript objects store related info with named keys.
- You can read, update, and loop through object properties.
- Arrays of objects model collections of structured data.
- DOM integration lets you visualize objects and interact with them.





> Objects are the foundation of modern JavaScript design—mastering them opens the door to everything from DOM scripting to full-on OOP.



------



*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh for CSCI 270 and refined with ChatGPT to clarify concepts and code.*

---



# 📘 Chapter 13: The DOM (Document Object Model)

> “The DOM is not a concept—it’s real. It’s what the browser builds so you can reach into the page and *do stuff*.”

## 🧠 What Is the DOM?
DOM stands for **Document Object Model**. It's how the browser represents your webpage as a live tree of objects that JavaScript can manipulate.

Every element, attribute, and piece of content in HTML becomes a **node** in the DOM. With JavaScript, we can:
- Change content
- Add/remove elements
- Modify styles
- Respond to user actions

---

## 🧪 Inspecting the DOM
Use **Chrome DevTools** to see the DOM in action:
- Right-click any page element → *Inspect*
- View the HTML structure and styles in real time
- Click console and try: `document.body`

---

## 📂 DOM Tree Structure
HTML:
```html
<body>
  <h1>Hello</h1>
  <p>This is a test</p>
</body>
```
DOM Representation:
```
document
 └── html
     ├── head
     └── body
         ├── h1
         └── p
```

JavaScript can navigate this structure like:
```javascript
document.body.children[0].textContent = "New Title!";
```

---

## 📌 Getting Elements
Common DOM selection methods:
- `document.getElementById("id")`
- `document.querySelector(".class")`
- `document.querySelectorAll("tag")`

Example:
```javascript
const heading = document.querySelector("h1");
heading.textContent = "Updated Heading!";
```

---

## 🛠 DOM Manipulation
Change styles:
```javascript
document.body.style.backgroundColor = "lightyellow";
```

Add elements:
```javascript
const p = document.createElement("p");
p.textContent = "I was added by JavaScript!";
document.body.appendChild(p);
```

Remove elements:
```javascript
const header = document.querySelector("h1");
header.remove();
```

---

## 🔄 Updating Sections Dynamically
Example:
```html
<h2>Greeting:</h2>
<div id="greeting"></div>
```

```javascript
const name = "Trevor";
document.getElementById("greeting").textContent = `Hello, ${name}!`;
```

---

## 📖 Summary
- The DOM is a live object tree of your webpage
- You can use JavaScript to modify structure, content, and styles
- Common methods: `getElementById`, `querySelector`, `createElement`, `appendChild`
- DOM manipulation powers most interactive features on modern websites


---

_This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT to provide a clear, accurate, and structured guide to DOM fundamentals._



---



# 📘 Chapter 14: Event Listeners

> “Event listeners are how your site comes alive—your JavaScript listens and responds.”

## 🧠 What Is an Event Listener?
An **event listener** is a function that waits for a specific interaction—like a click, keypress, or input—and then responds by running code. Events are how we interact with users in real-time.

---

## 🧪 Syntax: `addEventListener`
```javascript
element.addEventListener("eventType", callback);
```
- `eventType`: The name of the event (e.g., "click", "input", "submit")
- `callback`: A function that runs when the event happens

---

## ✍️ Basic Example: Button Click
**HTML:**
```html
<button id="click-me">Click Me</button>
<p id="response">Waiting for action...</p>
```

**JavaScript:**
```javascript
const button = document.getElementById("click-me");
const response = document.getElementById("response");

button.addEventListener("click", () => {
  response.textContent = "Button clicked!";
});
```

---

## 🧠 Understanding Callbacks
A **callback function** is a function passed to another function to be run later. In the example above, the arrow function is the callback—it runs only when the event fires.

Arrow functions are commonly used for this purpose:
```javascript
() => { response.textContent = "Button clicked!"; }
```
You could also use a named function instead:
```javascript
function showClickMessage() {
  response.textContent = "Button clicked!";
}
button.addEventListener("click", showClickMessage);
```

---

## 🎯 Other Common Events
- `click`
- `input`
- `change`
- `submit`
- `keydown`
- `mouseover`

---

## 📦 Input Example: Personalized Greeting
**HTML:**
```html
<label for="name-input">Type your name:</label>
<input type="text" id="name-input" placeholder="Your name here">
<p>Hello, <span id="name-output">stranger</span>!</p>
```

**JavaScript:**
```javascript
const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    output.textContent = "stranger";
  } else {
    output.textContent = input.value;
  }
});
```

This example updates the name dynamically as the user types.

---

## ✅ Summary
- Event listeners let your site respond to user actions
- Use `addEventListener()` to hook into events
- Callback functions define what happens when the event fires
- Arrow functions are great for short, inline responses
- Try experimenting with different event types and elements

> Practice tip: Try using event listeners for multiple types of events on different elements to see what’s possible.

---

_This chapter was transcribed and refined from a live lecture by Dr. Trevor Tomesh for CSCI 270 and formatted with the help of ChatGPT._



---



# **📡 Chapter 15: AJAX and the Fetch API**





> “Don’t reload the whole page. Just fetch what you need.”



AJAX allows web pages to update asynchronously by exchanging data with a web server behind the scenes. This makes it possible to update parts of a web page without reloading the entire page.



In this chapter, you’ll learn about:



- What AJAX is
- How to use the modern fetch() API
- Promises and asynchronous code
- Making GET and POST requests
- Handling errors
- Why this matters for user experience





------





## **🔍 What Is AJAX?**





**AJAX** stands for *Asynchronous JavaScript and XML*, but don’t let that last part fool you. These days, it’s all about JSON.



It refers to JavaScript’s ability to:



- Send requests to a server *without* refreshing the page
- Receive data (usually in JSON format)
- Update the web page dynamically





Examples include:



- Infinite scrolling
- Live search suggestions
- Submitting a form without reloading the page





------





## **⚙️ The Fetch API**





The fetch() function is how we do AJAX in modern JavaScript. It’s built into the browser and returns a **Promise**.

```
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP error ' + response.status);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Fetch error:', error));
```

This is a **GET** request.





### **🧠 Promises Refresher**





A Promise represents a value that may be available *now*, *later*, or *never*.



States:



- pending: not yet finished
- fulfilled: completed successfully
- rejected: failed





Use .then() for success and .catch() for errors.



------





## **📬 POST Requests with Fetch**



```
const postData = {
  title: 'Hello World',
  body: 'This is my first post!',
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(postData)
})
  .then(response => response.json())
  .then(data => console.log('Post created:', data))
  .catch(error => console.error('Error:', error));
```

> 🔧 You must stringify your object and set the Content-Type to application/json.



------





## **🧵 Async/Await Syntax**





This is a cleaner way to write asynchronous code:

```
async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('HTTP error ' + response.status);
    const posts = await response.json();
    console.log(posts);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

loadPosts();
```

Looks more like synchronous code and is easier to read!



------





## **⚠️ Error Handling**





Two types of errors:



1. **Network errors** (e.g. no internet): use .catch() or a try/catch
2. **HTTP errors** (e.g. 404): manually check with response.ok





Always check both!



------





## **🧪 Activity**





Create a simple HTML page with a button. When clicked, it should:



- Fetch user data from https://jsonplaceholder.typicode.com/users
- Display the names of the users
- Do it all *without refreshing the page*





------





## **❓ Practice Questions**





1. What does AJAX stand for?
2. What are the three states of a Promise?
3. How do you handle HTTP errors in a fetch call?
4. Why do we use JSON.stringify() in a POST request?
5. What are the advantages of using async/await over .then() chaining?





------





## **✅ Summary**





- AJAX enables asynchronous communication between browser and server
- fetch() is the modern way to make HTTP requests
- Promises manage async flow with .then() and .catch()
- async/await offers cleaner syntax for handling asynchronous code
- Always check for both HTTP and network errors
- AJAX improves user experience by avoiding full page reloads





------



*This chapter was transcribed and refined from a live lecture by Dr. Trevor Tomesh and formatted with the help of ChatGPT.*

---

# 📘 Chapter 16: HTTP Methods

> "If you know what method to use, you're already halfway to building a web app."

---

## 💡 What Are HTTP Methods?

HTTP methods tell a server **what action** you want to perform on a resource. Think of them like **verbs**:

* `GET` — Retrieve something
* `POST` — Send data to create something
* `PUT` — Update something entirely
* `PATCH` — Update something partially
* `DELETE` — Remove something

These methods are part of the HTTP protocol, which governs how clients (like your browser) communicate with servers.

---

## 🧰 Real-Life Analogy: Pizza Orders

* `GET`: "What pizzas do you have?"
* `POST`: "I'd like to order a pepperoni pizza."
* `PUT`: "Change my whole order to a veggie pizza."
* `PATCH`: "Just remove the mushrooms from my pizza."
* `DELETE`: "Cancel my order."

---

## 📃 Common Use Cases

| Method   | Description                         | Use Case                           |
| -------- | ----------------------------------- | ---------------------------------- |
| `GET`    | Read/retrieve data                  | Load a list of blog posts          |
| `POST`   | Create new data                     | Submit a form to create a new user |
| `PUT`    | Update/replace existing data        | Overwrite user profile             |
| `PATCH`  | Update part of an existing resource | Change a user's email address      |
| `DELETE` | Remove a resource                   | Delete a to-do item                |

---

## 💪 Safe and Idempotent

Some methods are **safe** (don't change anything) or **idempotent** (same result if run multiple times):

| Method   | Safe | Idempotent |
| -------- | ---- | ---------- |
| `GET`    | Yes  | Yes        |
| `POST`   | No   | No         |
| `PUT`    | No   | Yes        |
| `PATCH`  | No   | No         |
| `DELETE` | No   | Yes        |

---

## 💡 Fetching Data with `GET`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => console.log(data));
```

This retrieves data using the `GET` method (default for `fetch`).

---

## ✉️ Sending Data with `POST`

```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "My Post",
    body: "This is an awesome post.",
    userId: 1
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

This sends JSON data to the server to create a new resource.

---

## 🔄 Updating with `PUT` and `PATCH`

**PUT:** Replace entire resource

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    id: 1,
    title: "New Title",
    body: "New content",
    userId: 1
  })
})
```

**PATCH:** Update part of a resource

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Patched Title"
  })
})
```

---

## 📍 Deleting a Resource

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE"
})
```

This removes the post with ID 1 from the server.

---

## ✅ Summary

* HTTP methods define the **action** taken on resources
* `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` are the most common
* Use `fetch()` with method, headers, and body to make requests
* Understand safe/idempotent behavior for better API usage


---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT to ensure clarity and completeness.*

---

# 📘 Chapter 17: RESTful APIs

> “REST is not a new idea. It’s a really well-structured old idea.”

---

## 🧰 What is a RESTful API?

REST stands for **Representational State Transfer**. It's an architectural style for designing **networked applications**, especially web APIs.

A **RESTful API** uses HTTP methods to perform CRUD operations (Create, Read, Update, Delete) on resources.

Each resource is typically represented as a URL, and the actions are determined by the HTTP method:

| HTTP Method | Purpose | Action                |
| ----------- | ------- | --------------------- |
| GET         | Read    | Retrieve data         |
| POST        | Create  | Add new data          |
| PUT         | Update  | Replace data          |
| PATCH       | Update  | Partially update data |
| DELETE      | Delete  | Remove data           |

---

## 🔗 Example: RESTful Routes for a Blog API

Let’s say you have a blog API. Each post is a resource.

| Action        | HTTP Method | Endpoint     |
| ------------- | ----------- | ------------ |
| List posts    | GET         | `/posts`     |
| Get one post  | GET         | `/posts/:id` |
| Create a post | POST        | `/posts`     |
| Update a post | PUT         | `/posts/:id` |
| Delete a post | DELETE      | `/posts/:id` |

These endpoints follow REST conventions.

---

## 📂 JSON: The Standard Format

RESTful APIs usually send data in **JSON** (JavaScript Object Notation):

```json
{
  "id": 1,
  "title": "My First Blog Post",
  "body": "This is the content of my first post."
}
```

JavaScript has native support for JSON with:

* `JSON.stringify()` to convert JS to JSON
* `JSON.parse()` to convert JSON to JS

---

## 📰 Making a GET Request

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    console.log(posts);
  })
  .catch(error => console.error('Fetch error:', error));
```

This gets a list of posts.

---

## 📧 POST Request to Create Data

```javascript
const newPost = {
  title: "My Post",
  body: "This is a RESTful POST request.",
  userId: 1
};

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newPost)
})
  .then(response => response.json())
  .then(data => console.log('Created post:', data))
  .catch(error => console.error('Error:', error));
```

The server will create the post and respond with JSON.

---

## ✅ Summary

* REST is an architectural style for designing web APIs
* It uses standard HTTP methods to manage resources
* Each URL represents a resource
* Responses are usually in JSON
* JavaScript's `fetch()` makes it easy to call these APIs asynchronously

> Understanding REST will help you build both clients and servers that talk clearly, efficiently, and logically.

---

*This chapter was transcribed and refined from a live lecture by Dr. Trevor Tomesh and formatted with the help of ChatGPT.*
---

# 📘 Chapter 18: Object-Oriented Programming in JavaScript (Part 1)

> "We're going from objects to blueprints. Think of this like building your own Pokémon species."

---

## 🤔 What is Object-Oriented Programming (OOP)?

**OOP** is a programming paradigm built around the concept of **objects** that encapsulate data and behavior. In JavaScript, we can use this approach to structure complex applications more clearly.

You already know how to use objects:

```javascript
const pikachu = {
  name: "Pikachu",
  level: 12,
  type: "Electric",
  attack: function() {
    console.log("Zap!");
  }
};
```

But if we want to create *many* similar objects, we need a more scalable system. That's where **constructors** and **classes** come in.

---

## 🔧 Constructor Functions (Classic Way)

```javascript
function Pokemon(name, type, level) {
  this.name = name;
  this.type = type;
  this.level = level;
  this.attack = function() {
    console.log(`${this.name} attacks with a ${this.type}-type move!`);
  };
}

const bulbasaur = new Pokemon("Bulbasaur", "Grass", 5);
bulbasaur.attack();
```

* `this` refers to the new object being created
* The `new` keyword creates a new instance of `Pokemon`

### 🔍 Pros and Cons

* ✅ Easy to understand
* ❌ Repeats methods for every object (memory inefficient)

---

## 💼 Prototypes to the Rescue

We can improve the above method by attaching shared methods to the **prototype**:

```javascript
Pokemon.prototype.attack = function() {
  console.log(`${this.name} attacks with a ${this.type}-type move!`);
};
```

* Saves memory by storing the method once and sharing it across instances

---

## 🏗️ JavaScript Classes (Modern Way)

Introduced in ES6, JavaScript `class` syntax makes OOP cleaner and more familiar to people coming from other languages like Python or Java.

```javascript
class Pokemon {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  attack() {
    console.log(`${this.name} attacks with a ${this.type}-type move!`);
  }
}

const charmander = new Pokemon("Charmander", "Fire", 8);
charmander.attack();
```

### 🧳 Benefits

* Cleaner and more readable
* Uses prototype under the hood
* Supports inheritance and encapsulation (coming up in Part 2)

---

## 💡 Real-World Use Case

You could use a `Pokemon` class to build a whole battle simulator:

* Create many Pokémon
* Track levels and HP
* Add methods like `levelUp`, `faint`, or `useMove`

This OOP structure scales well for big projects.

---

## ✅ Summary

* OOP lets you create reusable blueprints for objects
* Constructor functions are the old-school way
* Prototypes make shared methods efficient
* Classes are the modern, clean syntax
* `this` refers to the instance being created
* `new` creates a new object instance


---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh for CSCI 270 at Ave Maria University and formatted with the help of ChatGPT.*
---

# Chapter 19 – OOP in JavaScript, Part 2: Click Counter Example

✝️ Opening Prayer

“Heavenly Father, thank you for this day. Send down your Holy Spirit to guide our hearts, minds, and words. Prepare us to receive the truth. Open our ears to hear, our eyes to see, our mouths to speak, and our minds to understand the truth and beauty of your perfect design. Amen.”

⸻

🗂️ Learning Goals

By the end of this lesson, you should be able to:
•	Define and instantiate a class in JavaScript
•	Attach event listeners to HTML elements from within a class
•	Maintain internal state using object properties
•	Build modular, interactive web components using OOP

⸻

💡 Quick Refresher: What Is OOP?

Object-Oriented Programming (OOP) is a paradigm that organizes code around reusable, modular units called objects, which combine:
•	Properties (data)
•	Methods (functions)

In JavaScript:
•	Classes are blueprints for objects
•	Each object created from a class is called an instance
•	Functions inside a class are called methods

⸻

🧪 Building the Click Counter (Hands-On)

We’ll create a modular click counter using a JavaScript class. It’ll track button presses and update a visible count in the DOM.

🧱 Basic HTML Layout

<h1>Click Counter Example</h1>

<button id="clickButton">Click Me</button>
<p>Total Clicks: <span id="clickCount">0</span></p>

<button id="clickButton2">Another Button</button>
<p>Other Clicks: <span id="clickCount2">0</span></p>

<script src="clicker.js"></script>


⸻

🧠 JavaScript Class – ClickCounter

```javascript
class ClickCounter {
constructor(buttonID, displayID) {
this.count = 0;
this.button = document.getElementById(buttonID);
this.display = document.getElementById(displayID);

    this.button.addEventListener("click", () => {
      this.increment();
      this.updateDisplay();
    });
}

increment() {
this.count++;
}

updateDisplay() {
this.display.textContent = this.count;
}
}
```

🔧 Key Concepts:
•	this.count holds the internal state
•	DOM elements are bound once during instantiation
•	Arrow function ensures this refers to the class instance
•	increment() and updateDisplay() are instance methods

⸻

🧪 Instantiating Counters

```javascript
const counter1 = new ClickCounter("clickButton", "clickCount");
const counter2 = new ClickCounter("clickButton2", "clickCount2");
```

This creates two independent counters with their own buttons and displays.

⸻

🎯 Benefits of Using OOP Here

Without classes:
•	You’d need unique logic and variables for each button

With OOP:
•	Reuse logic by creating new instances
•	Easy to scale and extend (e.g., add reset, limit, color change)

⸻

📌 Activity (For Assignment 2)

Extend your click counter by:
•	Adding a reset button
•	Implementing a reset() method in the class
•	Updating the display to show “0” when reset

👉 You’ll turn this in with Assignment #2.

⸻

🧾 Summary

Concept	Description
Class	Blueprint for creating similar objects
Constructor	Initializes properties and binds elements
Instance	A unique object created from a class
Event Listener	Attaches behavior to UI interactions
Encapsulation	Each instance manages its own state

Object-Oriented Programming helps you write cleaner, more reusable, and easier-to-extend code—especially when working with interactive elements in the DOM.

⸻

# 📘 Chapter 20: Django (Part 1) - The Big Picture

> "Django is like Rails but for Python. Batteries included."

---

## 🌟 What is Django?

**Django** is a high-level Python web framework that encourages **rapid development** and **clean, pragmatic design**. It's built on the principle of **Don't Repeat Yourself (DRY)** and emphasizes **convention over configuration**.

You can think of Django as the full stack:

* Models (database)
* Views (logic)
* Templates (HTML rendering)

It handles routing, authentication, admin dashboards, and more **out of the box**.

---

## 🔍 Why Use Django?

* Fast to develop with
* Highly secure
* Scalable
* Comes with a powerful admin interface
* Great for beginners and pros

---

## 🔄 Django vs Flask

| Feature       | Flask            | Django               |
| ------------- | ---------------- | -------------------- |
| Type          | Micro-framework  | Full-stack framework |
| Configuration | Manual           | Convention-based     |
| Admin panel   | DIY              | Built-in             |
| Use case      | Lightweight apps | Feature-rich apps    |

Django is the opinionated, batteries-included choice.

---

## 🚀 Starting a Django Project

First, install Django:

```bash
pip install django
```

Then create a new project:

```bash
django-admin startproject mysite
```

Your directory now looks like:

```
mysite/
├── manage.py
└── mysite/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    ├── asgi.py
    └── wsgi.py
```

Run the server:

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000` to see your Django site.

---

## 🚫 Don't Touch the Inner `mysite/` Right Away

The inner `mysite/` folder is like the central nervous system of your app. Leave it mostly alone until you need to:

* Add middleware
* Configure installed apps
* Change database settings

Most of your work will go into **apps** you create.

---

## 📁 Django Apps

Django projects are made of **apps**. Each app is a Python package with a specific function:

```bash
python manage.py startapp blog
```

This creates:

```
blog/
├── admin.py
├── apps.py
├── models.py
├── tests.py
├── views.py
└── migrations/
```

You'll wire this app into your project using `INSTALLED_APPS` in `settings.py` and connect its views in `urls.py`.

---

## 🌐 The MTV Pattern (Not MVC)

Django uses **MTV**:

* **Model** → Data layer (like tables)
* **Template** → Presentation layer (HTML)
* **View** → Business logic layer

You map URLs to views, which pull data from models and render templates.

---

## ✅ Summary

* Django is a high-level Python web framework
* Full stack: models, views, templates
* Comes with admin, auth, ORM, routing, and more
* Projects contain apps
* Start projects with `startproject` and apps with `startapp`



---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 21: Django (Part 2) — Building the Feedback App

> “Every Django app begins with a single view and grows organically from there.”

This chapter walks through the **creation of your first Django app**, step by step. We build a basic feedback application to demonstrate how URLs, views, and templates all connect.

---

## 🌐 Project Structure Overview

By now, your project should include a new app called `feedback`:

```
mysite/
├── feedback/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   └── templates/
│       └── feedback/
│           └── home.html
├── manage.py
└── mysite/
    ├── __init__.py
    ├── settings.py
    ├── urls.py
```

---

## 🚀 Step 1: Create a View

Edit `feedback/views.py`:

```python
from django.shortcuts import render

def home(request):
    return render(request, "feedback/home.html")
```

---

## 🔍 Step 2: Wire Up URLs

Create a `urls.py` inside the `feedback/` app:

```python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home")
]
```

Then connect it to your main `urls.py` in the `mysite/` directory:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("feedback.urls"))
]
```

---

## 📄 Step 3: Add a Template

Create the file `feedback/templates/feedback/home.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Feedback</title>
</head>
<body>
    <h1>Leave Your Feedback</h1>
    <form>
        <input type="text" placeholder="Your name"><br>
        <textarea placeholder="Your feedback"></textarea><br>
        <button type="submit">Submit</button>
    </form>
</body>
</html>
```

Make sure your app's template folder is configured in `settings.py` if necessary. But Django usually finds it automatically if the structure is correct.

---

## 🔓 Step 4: Register the App

In `mysite/settings.py`, add `'feedback'` to `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    ...
    'feedback',
]
```

Then run:

```bash
python manage.py runserver
```

Navigate to `http://127.0.0.1:8000` and you should see your new homepage.

---

## ✅ Summary

* You created a `feedback` app
* Built your first view, template, and URL route
* Connected everything with Django’s MTV pattern
* Ran your server and tested it live


---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 22: Django (Part 3) — Building a Simple Photo Gallery

> “In Django, you can build something beautiful and useful before lunch.”

This chapter guides you through the beginning of a simple **photo gallery app** using Django. You’ll learn how to structure the app, create views and templates, and prepare for adding dynamic image handling later.

---

## 🚀 Step 1: Start a New App

From your project directory:

```bash
python manage.py startapp gallery
```

Update `settings.py` to register the app:

```python
INSTALLED_APPS = [
    ...
    'gallery',
]
```

---

## 📁 Step 2: Set Up Folder Structure

Create a template directory inside the `gallery/` app:

```
gallery/
└── templates/
    └── gallery/
        └── home.html
```

---

## 🔧 Step 3: Write the View

In `gallery/views.py`:

```python
from django.shortcuts import render

def home(request):
    return render(request, "gallery/home.html")
```

---

## 🔍 Step 4: URL Configuration

Create a new `gallery/urls.py` file:

```python
from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="gallery-home")
]
```

Then include it in your project’s main `urls.py`:

```python
from django.urls import path, include

urlpatterns = [
    ...
    path("gallery/", include("gallery.urls"))
]
```

---

## 📄 Step 5: Create the Template

In `gallery/templates/gallery/home.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Photo Gallery</title>
</head>
<body>
    <h1>Welcome to the Gallery</h1>
    <div>
        <img src="https://placekitten.com/200/200" alt="Placeholder kitten">
        <img src="https://placekitten.com/201/200" alt="Another kitten">
    </div>
</body>
</html>
```

You should now be able to visit `http://127.0.0.1:8000/gallery/` and see your placeholder images.

---

## ✅ Summary

* Created a new Django app called `gallery`
* Registered it and configured routing
* Created a basic template with placeholder content
* Set the stage for dynamic image handling and uploads in the next step


---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*
---
# 📘 Chapter 23: Django (Part 4) — Handling Image Uploads

> "At some point, your gallery needs to actually hold images. That means dealing with uploads."

This chapter walks through how to **accept image uploads** in Django, store them, and display them dynamically on the front end.

---

## 📁 Step 1: Add a Model

In `gallery/models.py`:

```python
from django.db import models

class Photo(models.Model):
    image = models.ImageField(upload_to='images/')
    description = models.CharField(max_length=255)

    def __str__(self):
        return self.description
```

Run the following commands:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 📄 Step 2: Enable Media in Settings

In `settings.py`:

```python
import os

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
```

And in `urls.py`:

```python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

---

## 📒 Step 3: Register the Model in Admin

In `gallery/admin.py`:

```python
from django.contrib import admin
from .models import Photo

admin.site.register(Photo)
```

---

## 🚀 Step 4: Create a Photo Upload Form

In `gallery/forms.py`:

```python
from django import forms
from .models import Photo

class PhotoForm(forms.ModelForm):
    class Meta:
        model = Photo
        fields = ['image', 'description']
```

---

## 🔧 Step 5: Update Views

In `gallery/views.py`:

```python
from .forms import PhotoForm
from .models import Photo

def home(request):
    if request.method == 'POST':
        form = PhotoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
    else:
        form = PhotoForm()

    photos = Photo.objects.all()
    return render(request, 'gallery/home.html', {'form': form, 'photos': photos})
```

---

## 📷 Step 6: Update the Template

In `gallery/templates/gallery/home.html`:

```html
<form method="POST" enctype="multipart/form-data">
    {% csrf_token %}
    {{ form.as_p }}
    <button type="submit">Upload</button>
</form>

<hr>

<h2>Gallery</h2>
{% for photo in photos %}
    <div>
        <img src="{{ photo.image.url }}" alt="{{ photo.description }}" height="200">
        <p>{{ photo.description }}</p>
    </div>
{% endfor %}
```

---

## ✅ Summary

* Created a model for uploaded photos
* Registered the model in the admin
* Enabled media settings
* Wrote a form and view logic to handle image uploads
* Displayed the uploaded images in the gallery


---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 24: SQL and Django

> "Every Django app eventually hits the database. Understanding how SQL works behind the scenes makes you a better Django developer."

In this chapter, we explore how **Django uses SQL under the hood**. You’ll learn how to inspect queries, understand migrations, and build models with better insight into what's happening in the database.

---

## 🔄 Django's ORM in Action

Django provides an **Object-Relational Mapper (ORM)**. You interact with Python classes, but Django translates these into SQL queries.

```python
from gallery.models import Photo

Photo.objects.all()
Photo.objects.filter(description__icontains="kitten")
Photo.objects.get(id=1)
```

These generate SQL like:

```sql
SELECT * FROM gallery_photo;
SELECT * FROM gallery_photo WHERE description ILIKE '%kitten%';
SELECT * FROM gallery_photo WHERE id = 1;
```

You can view the SQL directly by turning on the query log or using:

```python
str(Photo.objects.filter(...).query)
```

---

## 📊 Understanding Migrations

When you change a model in Django, you must generate and apply a migration. This syncs your Python code with the actual database schema.

```bash
python manage.py makemigrations
python manage.py migrate
```

Migrations create SQL `CREATE TABLE`, `ALTER TABLE`, and `DROP COLUMN` statements under the hood.

You can inspect them in `migrations/`.

---

## 🎡 Common SQL Concepts via Django

| SQL Term    | Django Equivalent           |
| ----------- | --------------------------- |
| Table       | Model                       |
| Row         | Instance                    |
| Column      | Field                       |
| Primary Key | `id` (auto by default)      |
| Foreign Key | `models.ForeignKey(...)`    |
| Join        | QuerySet relation traversal |

---

## 👀 Inspecting the Database

To look at what's in your SQLite database:

```bash
python manage.py dbshell
```

Or use a GUI like **DB Browser for SQLite**.

Alternatively, for PostgreSQL:

```bash
psql <dbname>
```

---

## 🌍 Real-World Example: Feedback Table

Let's say you created this model:

```python
class Feedback(models.Model):
    name = models.CharField(max_length=100)
    comment = models.TextField()
```

Django will create a table called `app_feedback`, with SQL like:

```sql
CREATE TABLE app_feedback (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100),
    comment TEXT
);
```

---

## ✅ Summary

* Django ORM abstracts away SQL, but SQL is still running underneath
* You can log or inspect raw SQL queries
* Migrations convert model changes into SQL schema changes
* Knowing SQL helps you debug and optimize your Django apps

---

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 25: Getting Started with React.js

> "React breaks down complex interfaces into small, manageable pieces. Think in components."

In this chapter, we begin our journey with **React.js**, one of the most widely used libraries for building interactive user interfaces in the modern web.

We’ll install all the necessary tooling, set up a brand-new project using **Vite**, and write our very first React component.

------

## 📁 What You'll Need

- Node.js + npm (JavaScript runtime + package manager)
- Vite (fast React app starter)
- WebStorm (recommended IDE)

> This chapter assumes you already have WebStorm installed. If not, install it first.

------

## ⚙️ Step 1: Install Node.js and npm

React requires Node.js and npm.

- **Website:** [https://nodejs.org](https://nodejs.org/)

### 📍 Mac

```bash
brew install node  # if you use Homebrew
```

Or use the `.pkg` installer from the Node.js site.

### 📍 Windows

- Download the `.msi` installer from the site.
- Check "Add to PATH" during installation.
- Restart your terminal afterward.

### 📍 Linux (Ubuntu/Debian)

```bash
sudo apt update
sudo apt install nodejs npm
```

Or (recommended):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install --lts
```

### ✅ Verify installation

```bash
node -v
npm -v
```

You should see version numbers.

------

## 🚀 Step 2: Create a React App Using Vite

Open **WebStorm** and:

- Choose **New Project**
- If Vite is available, select **React + JavaScript**
- Otherwise, create an empty folder and open a terminal

Then run:

```bash
npm create vite@latest my-react-app --template react
```

Follow the prompts:

- Project name: `my-react-app`
- Framework: React
- Variant: JavaScript

Then install dependencies:

```bash
cd my-react-app
npm install
```

------

## ▶️ Step 3: Run Your App

```bash
npm run dev
```

You’ll see something like:

```bash
Local: http://localhost:5173/
```

Open that link in your browser.

------

## 📒 Step 4: Create Your First Component

Inside `src/`, create a new file: `WelcomeMessage.jsx`

```jsx
function WelcomeMessage() {
  const name = "Trevor";
  const isStudent = true;

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>{isStudent ? "Welcome back to class." : "Please register to begin."}</p>
    </div>
  );
}

export default WelcomeMessage;
```

Then edit `App.jsx`:

```jsx
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}

export default App;
```

Save and view your component live in the browser.

------

## 🧪 WebStorm Tips

- Run scripts: open `package.json`, click ▶ next to `dev`
- Format code: `Cmd + Alt + L` (Mac) / `Ctrl + Alt + L` (Win/Linux)
- Auto-imports: Start typing and use autocomplete

------

## 🚩 Troubleshooting

- `npm: command not found` → Node.js not installed
- Browser not updating → Restart `npm run dev`
- WebStorm can't find modules → Run `npm install`

------

## ✅ Summary

- Installed Node.js, npm, and Vite
- Created a new React app
- Ran it in the browser
- Built your first component
- Viewed live updates in WebStorm

> You're now ready to dive into the React lecture series and build interactive, component-based applications.

------

*This chapter was developed by Dr. Trevor Tomesh with refinement assistance from ChatGPT to ensure clarity and instructional consistency.*

---

# 📘 Chapter 26: React State

> "State is the soul of a component. It’s what makes your app dynamic, interactive, and alive."

This chapter introduces the concept of **state in React**, with hands-on examples using the `useState` hook. You’ll learn how state variables can drive updates and how to use them to create interactive components.

------

## ❓ What is State?

In React, **state** represents data that can change over time within a component. Whenever state changes, React automatically re-renders the component with the updated data.

Unlike props (which are passed in), **state is local** to a component and managed internally.

------

## 🎲 useState Hook

React provides the `useState` hook to define state inside functional components.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
```

### Breakdown:

- `useState(0)` initializes `count` with a default of 0
- `count` is the current value
- `setCount` is a function that updates it
- When `setCount()` is called, the component rerenders

------

## 🔧 Multiple State Variables

You can use as many `useState` calls as needed:

```jsx
function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
    </form>
  );
}
```

This pattern is common in forms and user input handling.

------

## 🤔 Things to Know

- State updates are **asynchronous**. Don’t expect `setState` to update the value immediately.
- Don’t mutate state directly. Always use the setter:

```jsx
// Wrong:
count++;

// Right:
setCount(count + 1);
```

- React batches multiple state updates to improve performance.

------

## ✅ Summary

- `useState` lets you manage local component state
- Calling the setter function triggers re-renders
- You can use multiple pieces of state in one component
- Avoid direct mutation

> In the next chapter, we’ll see how to lift state up and share it between components.

------

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 27: Props and Component Reuse

> "Props let you write a function once and use it everywhere with different data."

In this chapter, we explore how to pass data into React components using **props**. This concept allows you to create reusable UI components and makes your application more maintainable and modular.

------

## 📝 What Are Props?

**Props** (short for *properties*) are read-only values passed to components. They make components dynamic and configurable.

You pass props when calling a component:

```jsx
<WelcomeMessage name="Trevor" isStudent={true} />
```

Inside the component, props are received like this:

```jsx
function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

Or using **destructuring**:

```jsx
function WelcomeMessage({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

------

## 🚪 Why Use Props?

Props let you:

- Reuse components with different data
- Keep components modular and clean
- Separate logic from presentation

Example:

```jsx
function ProductCard({ title, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>${price}</p>
    </div>
  );
}

<ProductCard title="Banana" price={1.29} />
<ProductCard title="Apple" price={0.99} />
```

------

## 🧬 Passing Functions as Props

You can also pass functions as props:

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

<Button label="Click Me" onClick={() => alert('Hi!')} />
```

This is essential for handling events and callbacks.

------

## ❓ Props vs State

| Feature         | Props        | State                  |
| --------------- | ------------ | ---------------------- |
| Who sets it?    | Parent       | Component itself       |
| Can be changed? | No           | Yes (with setState)    |
| Use case        | Pass data in | Track internal changes |

------

## ✅ Summary

- Props pass data *into* components
- Use destructuring for cleaner code
- Props can include any value: strings, numbers, objects, or functions
- State and props serve different but complementary roles

> Next up: lifting state up to a parent component so children can communicate.

------

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---

# 📘 Chapter 28: ReactDOM and Client-Side Routing with React Router

> "React Router is how you give your React app the illusion of multiple pages."

In this chapter, we explore how **ReactDOM** mounts your app to the browser, and how **React Router** enables single-page applications with fast, client-side navigation.

------

## 🔍 What is ReactDOM?

`ReactDOM` is responsible for rendering your React components into the actual browser DOM.

Example:

```jsx
// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

This boots your React app and attaches it to the `#root` element in your HTML.

------

## 📅 Setting Up a React Project

### Option 1: Vite (Recommended)

```bash
npm create vite@latest my-app --template react
cd my-app
npm install
npm run dev
```

### Option 2: Create React App

```bash
npx create-react-app my-app
cd my-app
npm start
```

------

## 🔄 What is Client-Side Routing?

Traditional websites reload the entire page when navigating.

React apps use **client-side routing** to dynamically switch components without full-page reloads. This creates a smooth, seamless user experience.

------

## 📆 Installing React Router

Install it in your project:

```bash
npm install react-router-dom
```

------

## 📚 File Structure

```text
src/
  ├─ App.jsx
  ├─ main.jsx
  └─ pages/
       ├─ Home.jsx
       ├─ About.jsx
       └─ Contact.jsx
```

------

## 📌 Basic Routing with React Router

### App.jsx:

```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">🏠 Home</Link> |
        <Link to="/about">ℹ️ About</Link> |
        <Link to="/contact">📬 Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404 - Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Home.jsx

```jsx
function Home() {
  return <h1>Welcome to the Home Page!</h1>;
}
export default Home;
```

### About.jsx

```jsx
function About() {
  return <h1>About Our Application</h1>;
}
export default About;
```

### Contact.jsx

```jsx
function Contact() {
  return <h1>Contact Us at contact@example.com</h1>;
}
export default Contact;
```

------

## 🛠️ Nested Routes

You can also create **nested routes** using `Outlet`.

### App.jsx (Additions)

```jsx
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
  </Route>
</Routes>
```

### Dashboard.jsx

```jsx
import { Outlet, Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <h2>Dashboard</h2>
      <nav><Link to="profile">Go to Profile</Link></nav>
      <Outlet />
    </>
  );
}
export default Dashboard;
```

### Profile.jsx

```jsx
function Profile() {
  return <h3>This is your profile page.</h3>;
}
export default Profile;
```

------

## 📝 Summary

- `ReactDOM` renders the app into the DOM
- `BrowserRouter` enables client-side navigation
- `Routes` and `Route` define pages
- `Link` allows in-app navigation
- `Outlet` supports nested layouts
- `path="*"` catches invalid routes for 404 pages

> In the next chapter, we'll explore how to pass route parameters and navigate programmatically.

------

*This chapter was developed by Dr. Trevor Tomesh with refinement assistance from ChatGPT to ensure clarity and instructional consistency.*

---

# 📘 Chapter 29: Understanding Single-Page Applications (SPAs)

> "A single-page application feels like magic—but it's built on careful routing and smart component swapping."

In this chapter, we dive into the concept of **Single-Page Applications (SPAs)** and explore why SPAs matter, how they work under the hood, and how they differ from traditional multi-page apps. We also examine how SPAs behave with routing, rendering, and component lifecycle.

------

## 📚 What Is a SPA?

A **Single-Page Application** is a web application that loads a single HTML page and dynamically updates content without refreshing the page. React, Vue, and Angular are common SPA frameworks.

In an SPA:

- Routing is handled client-side.
- Pages are not reloaded on navigation.
- Components are swapped in and out.

Instead of getting a new HTML document from the server on each navigation, the client fetches and updates only the necessary data or component.

------

## 📊 Benefits of SPAs

- ✨ **Smooth User Experience:** No full-page reloads.
- ⚡ **Faster Navigation:** Only fetch what you need.
- ⚙️ **Reusable Components:** Modular codebase via React components.
- 🛍️ **Offline Support:** Easier to cache static assets.

------

## 📝 How Routing Works in SPAs

Traditional websites rely on the server for routing. In SPAs, routing is handled in the browser.

With **React Router**, your app listens for URL changes and displays the correct components:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

> The browser history API lets React intercept navigation events and avoid full page reloads.

------

## 🤖 Lifecycle in SPAs

Because the page doesn't reload, **React components mount and unmount** dynamically as users navigate.

- On first load, your root component renders.
- When the route changes, React unmounts the current page and mounts the new one.
- Components can use `useEffect` to run logic when mounted or unmounted.

------

## 🚫 SPA Gotchas

While SPAs are powerful, they come with tradeoffs:

- 🌐 **SEO Challenges:** SPAs don’t work well with web crawlers unless you add server-side rendering (SSR).
- ❌ **Initial Load Time:** SPAs load all JavaScript upfront.
- 🧰 **State Management:** Can become complex in large apps.
- 🕵️‍♂️ **Analytics:** Traditional pageview tracking breaks.

------

## ✅ Summary

- SPAs load a single HTML page and swap components dynamically.
- Client-side routing handles navigation without reloading.
- React Router is used to implement SPA behavior in React apps.
- Watch out for SEO, load time, and analytics tradeoffs.

> In the next chapter, we'll look at data persistence and how SPAs save and reload user state.

------

*This chapter was transcribed from a live lecture by Dr. Trevor Tomesh and refined with the help of ChatGPT.*

---



# **Chapter: Asynchronous UI and the Event Loop**







## **Introduction**





Modern web applications must remain responsive while performing tasks like data fetching, animation, or handling user input. This is achieved through *asynchronous programming*. In this chapter, we explore how asynchronous user interfaces (UI) work, how JavaScript uses the *event loop* to manage concurrency, and how you can design applications that feel fast and responsive even when operations take time.



------





## **Learning Objectives**





By the end of this chapter, you should be able to:



- Understand the core principles of asynchronous user interaction
- Explain the event loop and its role in UI responsiveness
- Implement dynamic interactions using async data
- Handle loading states, error states, and data updates
- Design for perceived performance and smooth user experience





------





## **1. What Is Asynchronous UI?**





Most modern UIs are asynchronous by design. Unlike synchronous execution, where the browser waits for one task to finish before starting the next, asynchronous UIs remain responsive while background tasks run.





### **Real-world Example**





When you open a messaging app, old messages load in the background while you continue to scroll, type, or switch chats. That responsiveness is made possible through async programming.





### **Key Characteristics**





- **Non-blocking behavior**: UI elements remain interactive while waiting.
- **Feedback mechanisms**: Spinners and placeholders provide user feedback.
- **Dynamic state updates**: UI reflects changes as they happen.





------





## **2. The JavaScript Event Loop**





JavaScript uses a *single-threaded* concurrency model based on the **event loop**. While it can only do one thing at a time, it uses *queues* to manage when and how things are done.





### **Event Loop Core Components**





- **Call Stack**: Executes synchronous code line-by-line.
- **Web APIs**: Browser-managed async tasks (e.g., setTimeout, fetch).
- **Microtask Queue**: High-priority tasks like Promise.then().
- **Macrotask Queue**: Lower-priority tasks like setTimeout, UI events.







### **Analogy**





Think of the event loop as a chef handling orders:



- Immediate tasks go on the stove (call stack).
- Promise-based microtasks are like pre-made side dishes—fast and ready to serve.
- Macrotasks are dishes that need to bake in the oven—delayed but still important.







### **Execution Order**





1. Run all synchronous code (call stack).
2. Process microtasks.
3. Process a macrotask.
4. Repeat (loop).





------





## **3. Example: Exploring Task Order**





Consider the following code:

```
console.log("Start");

setTimeout(() => {
    console.log("Timer done");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise done");
});

console.log("End");
```



### **Output:**



```
Start
End
Promise done
Timer done
```



### **Explanation**





- Start and End are synchronous and run first.
- The Promise.then() is a microtask and is processed after the call stack clears.
- setTimeout is a macrotask and is processed after all microtasks.





------





## **4. Microtasks vs. Macrotasks**



| **Task Type** | **Examples**                   | **Priority** | **Processed After** |
| ------------- | ------------------------------ | ------------ | ------------------- |
| Microtasks    | Promise.then, MutationObserver | High         | Synchronous code    |
| Macrotasks    | setTimeout, UI events          | Lower        | Microtasks          |



### **Rule of Thumb**





> Microtasks always run before macrotasks, even if they are registered after.



------





## **5. Visualization: How the Event Loop Works**



```
+-------------------+
|     Call Stack    | <- Executes sync code
+-------------------+
        ↓
+-------------------+
|  Microtask Queue  | <- Executes next (Promises, etc.)
+-------------------+
        ↓
+-------------------+
|  Macrotask Queue  | <- Executes last (Timers, Events)
+-------------------+
```

The event loop checks if the call stack is empty. If yes, it runs all microtasks, then one macrotask, and loops again.



------





## **6. Practical UI Example (HTML + JS)**





Create a simple button that loads data asynchronously and updates the DOM.





### **HTML**



```
<button id="loadButton">Load Data</button>
<div id="output"></div>
```



### **JavaScript**



```
document.getElementById("loadButton").addEventListener("click", () => {
    const output = document.getElementById("output");
    console.log("Clicked");
    output.innerHTML = "Loading..."; // Synchronous

    // Microtask: Promise
    Promise.resolve().then(() => {
        console.log("Promise resolved");
        output.innerHTML += "<br>✅ Promise data loaded";
    });

    // Macrotask: setTimeout
    setTimeout(() => {
        console.log("Timeout finished");
        output.innerHTML += "<br>
```



---

# **Chapter: Babel and the Evolution of JavaScript**







## **Introduction**





Modern JavaScript is powerful, expressive, and continuously evolving. But with new syntax and features come compatibility challenges across browsers—especially older ones. Enter **Babel**, a tool that transpiles modern JavaScript into backwards-compatible code.



This chapter will guide you through the purpose, history, and use of Babel, how it fits into the JavaScript toolchain, and how you can configure it for your projects.



------





## **Learning Objectives**





By the end of this chapter, you should be able to:



- Explain the origins and purpose of Babel
- Understand the difference between transpiling and compiling
- Use Babel to transpile modern JavaScript
- Integrate Babel with development tools like Webpack or Vite
- Configure Babel presets and plugins





------





## **1. The Need for Babel**





JavaScript started in 1995 as a lightweight scripting language for browsers. For years, most browsers implemented ECMAScript 3 (ES3). Significant updates came in ES5 (2009), and even more in **ES6 (2015)**, also called ECMAScript 2015.





### **ES6 Introduced Features Like:**





- let and const
- Arrow functions
- Classes
- Template literals
- Destructuring
- Modules (import/export)
- Promises
- Spread/rest operators







### **The Problem**





Many browsers—especially older ones—do not support these features. Waiting for browser support can slow development.



------





## **2. What is Babel?**





**Babel** is a JavaScript *transpiler*, originally named 6to5, that converts modern JS (ES6+) into ES5. It’s named after the biblical Tower of Babel—because it helps unify “languages.”



Babel ensures modern JavaScript runs in older browsers by transforming unsupported syntax into equivalent code.





### **Example: Arrow Function**





**Modern JS:**

```
const f = () => console.log("Hello");
```

**Babel Output:**

```
var f = function() {
  return console.log("Hello");
};
```



------





## **3. Transpiling vs. Compiling**



| **Term**    | **Meaning**                                                  |
| ----------- | ------------------------------------------------------------ |
| Transpiling | Converting code from one version to another (e.g., ES6 to ES5) |
| Compiling   | Converting code from one language to another (e.g., C++ to machine code) |

Babel is a **transpiler**, not a compiler.



------





## **4. Babel Playground**





Visit [babeljs.io/repl](https://babeljs.io/repl) to try Babel live.



- Write ES6+ code on the left
- See ES5 output on the right







### **Try:**



```
class Greeting {
  name = "Trevor";
  render() {
    return `<h1>Hello ${this.name}</h1>`;
  }
}
```

This will be transformed into ES5-compatible syntax using Babel plugins and presets.



------





## **5. Babel in the Toolchain**





Babel is often used *behind the scenes* in tools like:



- Webpack
- Vite
- Create React App
- Next.js
- Vue CLI







### **Typical Workflow**





1. Write modern JavaScript or JSX
2. Babel transpiles it to ES5
3. Webpack bundles the result





------





## **6. Babel Presets and Plugins**







### **Presets**





Presets are collections of plugins. Common presets:



- @babel/preset-env – for general JavaScript
- @babel/preset-react – for JSX
- @babel/preset-typescript – strips TypeScript types







### **Plugins**





Plugins support specific features:



- @babel/plugin-proposal-class-properties
- @babel/plugin-proposal-optional-chaining
- @babel/plugin-proposal-nullish-coalescing-operator







### **Example** 

### **.babelrc**



```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator"
  ]
}
```



------





## **7. Polyfills vs Transpiling**





- **Babel transpiles syntax** (e.g., arrow functions)
- **Polyfills** add *functionality* that doesn’t exist (e.g., Promise, fetch)







### **Polyfill Examples**





- core-js
- regenerator-runtime





Use polyfills to support runtime features missing in older browsers.



------





## **8. Manual Babel Setup (Optional)**



```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

Then create a .babelrc:

```
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

Run Babel:

```
npx babel src --out-dir dist
```



------





## **Summary**





- **Babel** is a transpiler that converts modern JavaScript into compatible versions.
- It allows developers to use the latest language features without sacrificing browser support.
- Babel integrates seamlessly with build tools and frameworks.
- Babel does *not* polyfill—use libraries like core-js for that.
- Most modern web projects already use Babel under the hood.





------





## **Practice Questions**





1. What does Babel do?
2. What is the difference between transpiling and compiling?
3. How does Babel help React development?
4. What’s the role of .babelrc?
5. How do polyfills differ from Babel transpilation?





------





## **Answers**





1. Babel converts modern JavaScript into ES5-compatible code.
2. Transpiling is from one version to another; compiling is from one language to another.
3. Babel transpiles JSX and modern syntax so React code works in all browsers.
4. .babelrc defines presets and plugins used by Babel.
5. Polyfills add missing functionality; transpilation rewrites syntax.





------



# **Chapter: Web Security Concepts**







## **Summary**





This chapter introduces three foundational web security concepts—Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), and Cross-Origin Resource Sharing (CORS). You’ll learn how attackers exploit vulnerabilities in web applications and how to prevent these attacks through proper input sanitization, secure coding practices, and HTTP header configurations. Live examples demonstrate real-world attacks and defenses.



------





## **Opening Prayer**





> “In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Heavenly Father, thank you for this day. Send down your Holy Spirit to guide our hearts, minds, and words. Prepare us to receive the truth. Open our ears to hear. Open our eyes to see. Open our mouths to speak. And open our minds to understand the truth and beauty of your perfect design. Amen.”



------





## **1. Introduction to Web Security Vulnerabilities**





Web security is a broad topic that spans many disciplines. In this chapter, we’ll focus on three specific and commonly exploited areas:



- **XSS (Cross-Site Scripting)**
- **CSRF (Cross-Site Request Forgery)**
- **CORS (Cross-Origin Resource Sharing)**





Each of these represents a different threat vector and requires unique mitigation strategies.



------





## **2. Cross-Site Scripting (XSS)**







### **What is XSS?**





XSS occurs when an attacker injects malicious scripts—typically JavaScript—into web content that is then served to other users. If the web app doesn’t properly sanitize or encode user input, attackers can execute code in a victim’s browser session.





### **Types of XSS:**





- **Stored XSS:** The malicious script is saved (e.g., in a database) and served to other users.
- **Reflected XSS:** The script is reflected from the URL and executed immediately when the user clicks a malicious link.
- **DOM-based XSS:** JavaScript manipulates the DOM (e.g., using innerHTML) to introduce a script dynamically.







### **Example: Reflected XSS**





If a site reflects input without sanitization:

```
https://example.com/search?q=<script>alert('hacked')</script>
```

This will execute alert('hacked') in the user’s browser.



A safer alternative uses textContent instead of innerHTML to avoid executing embedded scripts.

```
const params = new URLSearchParams(location.search);
const q = params.get("q");
document.getElementById("output").textContent = `Results for ${q}`;
```



### **Mitigation Strategies**





- Avoid innerHTML—use textContent or DOM-safe methods.
- Implement a Content Security Policy (CSP).
- Sanitize user input and escape output.





------





## **3. Cross-Site Request Forgery (CSRF)**







### **What is CSRF?**





CSRF tricks a user into submitting a request to a trusted site where they are authenticated. The browser includes session cookies automatically, so the forged request looks legitimate.





### **Example Scenario**





You’re logged into:

```
https://bank.com (cookie: session_id=abc123)
```

Then you visit a malicious page that runs:

```
<img src="https://bank.com/transfer?to=attacker&amount=1000" style="display:none" />
```

Your browser sends the cookies automatically, transferring money to the attacker.





### **Mitigation Strategies**





- **CSRF Tokens:** Include a unique, unpredictable token with every form.
- **SameSite Cookies:** Use the SameSite attribute to limit cross-site cookie use.
- **Double Submit Cookies:** Send the CSRF token in both a cookie and request body.
- **Check Referrer/Origin Headers:** Verify the request’s source.





------





## **4. Cross-Origin Resource Sharing (CORS)**







### **What is CORS?**





CORS is not a vulnerability—it’s a browser-enforced security mechanism. It restricts how content on one origin can interact with another origin.





### **Origin Defined By:**





- Protocol (http/https)
- Domain (example.com)
- Port (e.g., 8080)







### **Example:**



```
https://api.example.com ≠ https://www.example.com
```



### **Key CORS Headers**





- Access-Control-Allow-Origin
- Access-Control-Allow-Methods
- Access-Control-Allow-Headers
- Access-Control-Allow-Credentials





These headers tell the browser which domains and HTTP methods are permitted to access the resource.





### **Common Pitfalls**





- Overly permissive Access-Control-Allow-Origin headers
- Misconfigured servers that expose sensitive APIs





------





## **5. Final Thoughts**





Web security is a moving target. Minor oversights can lead to major vulnerabilities. You should:



- **Validate Input**
- **Escape Output**
- **Configure Servers Correctly**
- **Never treat security as an afterthought**





This chapter only scratches the surface. Entire fields of study and certifications exist to explore web security in more depth.



------





## **Practice Questions**





1. What’s the difference between reflected and stored XSS?
2. How does using textContent help mitigate XSS?
3. What role does a CSRF token play in preventing CSRF?
4. Why do modern browsers restrict cross-origin requests?
5. Name one HTTP header involved in CORS and explain its function.





------



> “Security is not a feature—it’s a discipline. Build it in from the start.”
