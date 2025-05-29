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

> Next up: **CSS** – bring your site to life with color, layout, and style!

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

> Next up: **Event Listeners** – how to respond to user actions like clicks, hovers, and key presses

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
