# Ihtiram Khan — Portfolio (React)

A pixel-matched React rebuild of the reference portfolio design, including:

- 🌗 **Dark / light mode** toggle (bottom of the sidebar) — persists in `localStorage` and respects the visitor's OS preference on first visit.
- 📄 **Download CV** button (About section) — downloads `public/Ihtiram_Khan_CV.pdf`.
- 💬 **WhatsApp chat** floating button (bottom-right) — opens a pre-filled WhatsApp chat with your number.
- ✉️ Working **contact form** (opens the visitor's email client with the message pre-filled — swap in a real backend easily, see below).
- 🖼️ **Real profile photo** in the Hero and About sections (`public/images/profile.png`).
- ✨ **GSAP opening animation** — avatar, name, socials, and CTA animate in on first load.
- 🌀 **Smooth scrolling** site-wide via [Lenis](https://github.com/darkroomengineering/lenis), driven by GSAP's ticker so it stays in sync with scroll-triggered animations.
- ⌨️ **Typewriter effect** on the hero heading — types "Ihtiram khan", pauses, deletes it letter by letter, then types "Full Stack Developer", loops forever.
- 🎬 **Scroll-reveal animations** on Services, Experience, Projects, Testimonials, and Contact — each section fades/slides in as you scroll to it (GSAP ScrollTrigger).
- Animated stat counters, sticky sidebar with scroll-spy, filterable project grid (6 projects), tabbed experience section, testimonial carousel.

## 1. Install & run

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build   # outputs to /dist
npm run preview # preview the production build locally
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, etc.

## 3. Personalize everything from one file

Open **`src/data.js`** — it's the single source of truth for:

- Your name, title, bio, tech stack
- Social links
- **WhatsApp number** → set `profile.whatsappNumber` (format: country code + number, no `+` or spaces, e.g. `"923001234567"`)
- **Contact email** → `profile.email`
- Stats, services, experience, projects, testimonials, blog posts

No other file needs to change for basic content updates.

## 4. Add your own projects (screenshots + live/GitHub links)

Each entry in the `projects` array in `src/data.js` now supports:

```js
{
  title: 'My Task Manager',
  category: 'Full Stack',                  // must match one of projectCategories
  color: '#1461c9',                         // fallback color, shown if no image
  image: '/projects/task-manager.png',      // optional screenshot — see below
  liveUrl: 'https://my-task-manager.vercel.app',   // optional
  githubUrl: 'https://github.com/yourname/task-manager', // optional
},
```

**Screenshot:** drop the image file into `public/projects/` (there's a README
in there as a reminder), then set `image: '/projects/your-file.png'` — no
`public/` prefix in the path. If you leave `image` blank, the card falls back
to the solid `color` block with the project title, same as the current demo.

**Live link:** if the project isn't deployed yet, push it to GitHub and deploy
it for free on [Vercel](https://vercel.com), [Netlify](https://netlify.com),
or [GitHub Pages](https://pages.github.com) — then paste that URL into
`liveUrl`.

**GitHub link:** just your repo URL, e.g. `https://github.com/yourname/repo`.

If you omit `liveUrl` and `githubUrl`, the hover overlay icons are hidden
automatically instead of linking nowhere — so it's safe to leave projects
partially filled in while you're still deploying them.

## 5. Replace your photo

Your photo lives at `public/images/profile.png` and is referenced via
`profile.photo` in `src/data.js`. To swap it, just replace that file with
the same name — or rename your file and update `profile.photo` to match
(e.g. `'/images/my-new-photo.jpg'`).

## 6. Customize the typewriter effect

The hero heading types out phrases in a loop. Edit the phrase list and
timing in `src/components/Hero.jsx`:

```js
const typedText = useTypewriter([profile.name, 'Full Stack Developer'], {
  typingSpeed: 95,     // ms per character while typing
  deletingSpeed: 45,   // ms per character while deleting
  pauseAfterType: 1500,   // ms to wait after a phrase finishes typing
  pauseAfterDelete: 350,  // ms to wait after a phrase finishes deleting
})
```

Add more phrases to the array (e.g. `'MERN Stack Developer'`) and they'll
cycle through automatically.

## 7. Replace the CV

Swap `public/Ihtiram_Khan_CV.pdf` with your real resume, keeping the same filename — or change `profile.cvPath` in `src/data.js` if you rename it.

## 8. Testimonial avatars

The testimonial card still uses an inline SVG placeholder avatar (Hero and
About already use your real photo — see section 5). To use a real photo per
testimonial, add a `photo` field to each entry in the `testimonials` array
in `src/data.js`, then swap the `<svg>` block in
`src/components/Testimonials.jsx` for an `<img src={t.photo} />`.

## 9. Wire the contact form to a real inbox (optional)

Right now, submitting the form opens the visitor's email client via `mailto:` (works with zero backend, but relies on them having a mail app configured). For a form that emails you directly without that dependency, drop in a service like:

- [Formspree](https://formspree.io) — point the form's `action` at your Formspree endpoint.
- [EmailJS](https://www.emailjs.com) — call `emailjs.send()` inside `handleSubmit` in `src/components/Contact.jsx`.

## Tech stack

- React 18 + Vite
- react-icons (Feather + FontAwesome icon sets)
- Plain CSS with CSS custom properties for theming — no framework lock-in

## Folder structure

```
src/
  data.js            ← edit your content here
  ThemeContext.jsx   ← dark/light mode logic
  App.jsx
  components/
    Sidebar.jsx / .css
    Hero.jsx / .css
    About.jsx / .css
    Services.jsx / .css
    Experience.jsx / .css
    Projects.jsx / .css
    Testimonials.jsx / .css
    Blog.jsx / .css
    Contact.jsx / .css
    WhatsAppButton.jsx / .css
public/
  Ihtiram_Khan_CV.pdf   ← replace with your real CV
  favicon.svg
```
