// ---------------------------------------------------------------------------
// EDIT THIS FILE to personalize the portfolio. Nothing else needs to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Ihtiram khan',
  title: "I'm a Full Stack Developer",
  location: 'Peshawar, Pakistan',
  photo: '/images/profile.png',
  bio: [
    "Hi I am Ihtiram, a Full Stack Developer located in Islamabad, Pakistan. I hold a Bachelor’s degree in Computer Science. Enjoy creating websites and web applications from the ground up, to production.",
    "With 3 years of freelancing experience I have worked with clients to turn their ideas into practical digital products. Whether it is a website, a custom web app or a complete online platform, focuses on making it fast easy to use and visually polished"
  ],
  techStack: ['JavaScript (ES6+)', 'React js', 'Next js', 'Node js', 'Express js', 'MongoDB', 'GSAP', 'Locomotive Scroll',],
  cvPath: '/Ihtiram_Khan_CV.pdf',
  whatsappNumber: '923140076077', // country code + number, no + or spaces
  email: 'mihtiram2006@gmail.com',
  socials: {
    github: 'https://github.com/ihtiramkhan9798',
    linkedin: 'https://www.linkedin.com/in/ihtiramkhan0099/',
    // facebook: 'https://facebook.com/',
    twitter: 'https://x.com/ihtiramkhan0099',
    // behance: 'https://behance.net/',
    // youtube: 'https://youtube.com/',
  },
}

export const stats = [
  { label: 'Experience', value: "2 Y." , suffix: '' },
  { label: 'Projects Completed', value: 30, suffix: '+' },

  { label: 'Github Repositories', value: 48, suffix: '' },
  { label: 'Code Quality', value: 100, suffix: '' },
]

export const services = [
  {
    title: 'Responsive design',
    desc: 'Ensuring that the website/app is responsive across all platforms',
    color: 'purple',
    icon: 'layout',
  },
  {
    title: 'Web Development',
    desc: "Ensuring that a website meets the correct standards, and also ensuring it's well maintained",
    color: 'yellow',
    icon: 'code',
  },
  {
    title: 'API Development',
    desc: "Building secure, well-documented REST & GraphQL APIs that are fast, scalable, and easy to integrate with",
    color: 'pink',
    icon: 'api',
  },
]

export const experience = [
  // {
  //   company: 'Turing',
  //   role: 'Full Stack Developer @ Turing',
  //   period: 'October 2023 - Present',
  //   points: [
  //     'Build and maintain full-stack features using React, Next.js, Node.js, Express, and MongoDB.',
  //     'Craft smooth, purposeful UI animations and page transitions with GSAP, Locomotive Scroll, and Barba.js.',
  //     'Communicate with multi-disciplinary teams of engineers, team leads, and QA engineers on a daily basis.',
  //   ],
  // },
  {
    company: 'Zobyt',
    role: 'Full stack developer Intern @ Zobyt',
    period: 'March 2025 - September 2025',
    points: [
      'Designed and delivered internal tools adopted by teams across the company.',
'Paired with senior engineers on code reviews to ship polished, production-ready features.',
    ],
  },
  {
    company: 'IT Trainer',
    role: 'IT Trainer @ Local Academy',
    period: 'April 2025 - December 2025',
    points: [
      'Taught web development fundamentals to 100+ students across multiple cohorts.',
'Built and iterated on a curriculum spanning HTML, CSS, JavaScript, and React.',
    ],
  },
  // {
  //   company: 'Upwork & Freelancer',
  //   role: 'Freelance Full Stack Developer',
  //   period: '2021 - 2022',
  //   points: [
  //     'Delivered 20+ client projects across web and mobile.',
  //     'Managed client communication, timelines, and deployments end to end.',
  //   ],
  // },
  // {
  //   company: 'Fiverr',
  //   role: 'Freelance Developer',
  //   period: '2020 - 2021',
  //   points: [
  //     'Completed 50+ gigs with 5-star client ratings.',
  //     'Specialized in landing pages and small business websites.',
  //   ],
  // },
]

export const projectCategories = ['All', 'Full Stack', 'Next Js', 'Frontend', 'React', 'Backend', 'API development']

// Each project supports:
//   title      - project name (required)
//   category   - must match one of projectCategories above (required)
//   color      - fallback background shown when no `image` is provided
//   image      - OPTIONAL. Path to a screenshot, e.g. '/projects/travel-explorer.png'
//                Drop the file into `public/projects/` and reference it as
//                '/projects/your-file.png' (leading slash, no 'public/' prefix).
//   liveUrl    - OPTIONAL. Link to the deployed/live project.
//   githubUrl  - OPTIONAL. Link to the source code repo.
// If liveUrl/githubUrl are omitted, that icon is hidden on hover instead of
// linking nowhere.
export const projects = [
  { title: 'Jadoo Travel UI Website', category: 'Frontend', color: '#1461c9', image: '/projects/jaddo.png', liveUrl: 'https://jadoo-travel-ui-website.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/Jadoo-Travel-UI-Website' },
  { title: 'Gocart-ecommerce', category: 'Next Js', color: '#3a3f52', image: '/projects/Gocart.png', liveUrl: 'https://gocart-ecommerce-1fotxu35i-ihtiramkhan9798s-projects.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/Gocart-E-CommerceApp' },
  { title: 'Social-media-automation', category: 'Full Stack', color: '#1f1147', image: '/projects/social-media.png', liveUrl: 'https://social-media-automation-black.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/social-media-automation' },
  { title: 'Cripson-bottle-animation', category: 'Frontend', color: '#101418', image: '/projects/cripson-bottle.png', liveUrl: 'https://animated-bottle-scroll-peach.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/animated-bottle-scroll' },
  { title: 'Chat App', category: 'Backend', color: '#1a1a2e', image: '/projects/chatapp.png', liveUrl: 'https://chat-application-jack.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/Real-chat-app' },
  { title: 'Fresh Menu ', category: 'React js', color: '#2c5f8a', image: '/projects/fresh-menu.png', liveUrl: 'https://responsive-food-website-five.vercel.app/', githubUrl: 'https://github.com/ihtiramkhan9798/Responsive-Food-website' },
]

// --- Example of a fully-linked project (copy this shape for your own) ---
// {
//   title: 'My Task Manager',
//   category: 'Full Stack',
//   color: '#1461c9',                       // shown briefly while image loads / as fallback
//   image: '/projects/task-manager.png',     // put file in public/projects/
//   liveUrl: 'https://my-task-manager.vercel.app',
//   githubUrl: 'https://github.com/yourname/task-manager',
// },

export const testimonials = [
  {
    name: 'Kerren Ortlepp',
    role: 'Software Engineer @ Zobyt',
    quote:
      "Ihtiram khan worked at Entroost as a full-stack developer. He was excellent and had a real eye for design. If there was ever a time where we had a complicated frontend or needed to know what the best CSS approach was for something, Ihtiram was our go-to man!",
  },
  {
    name: 'Ahmed Raza',
    role: 'Product Manager @ Zobyt',
    quote:
      "Working with Ihtiram khan was a great experience. He consistently delivered clean, well-tested code and communicated proactively whenever blockers came up. A dependable engineer who genuinely cares about the product.",
  },
  {
    name: 'Sara Malik',
    role: 'Founder @ Upwork Client',
    quote:
      "Ihtiram khan rebuilt our entire website ahead of schedule and it looks fantastic. He understood exactly what we wanted and improved on it. Highly recommend him for any web or mobile project.",
  },
]

