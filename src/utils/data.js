import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

// Navbar
export const NAVLINKS = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
];

// Mobile Navbar
export const MOBNAVLINKS = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

// About
export const ABOUT = [{
  id: "about",
  content:
    "Welcome! I'm Shyam, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.",
  projectCount: 6,
  experienceCount: 2,
}];

//Experience
export const EXPERIENCE = [
  {
    id: 3,
    role: "Fullstack Freelancer",
    company: null,
    place: "WFH",
    work: [
      "Created several personal full-stack projects with the MERN stack to deepen understanding of architecture, performance, and maintainability whilst also exploring best practices.",
      "Built and delivered 8+ custom portfolio websites using React and Tailwind CSS, each tailored to client requirements and deployed on GitHub Pages, including client support for setup and hosting.",
      "Designed and developed TOY STUDIO, a complete e-commerce platform using MERN and Redux, featuring secure Razorpay payment integration and optimized performance.",
      "Implemented an intuitive admin dashboard within TOY STUDIO to help the client manage products, inventory, and store operations effectively.",
    ],
    timeline: "Oct 2023 — Present",
  },
  {
    id: 2,
    role: "Technical Intern",
    company: "Incanus Technologies Pvt. Ltd.",
    place: "Bengaluru, Karnataka",
    work: [
      "Designed and developed an Admin Dashboard and Organizational Dashboard for an existing application.",
      "Proficiently implemented an efficient and user-friendly Chatbox feature using socket technology, facilitating realtime communication.",
      "Acquired valuable skills in time management while collaborating closely with the team, and actively contributed to code optimization and the creation of responsive designs.",
    ],
    timeline: "Mar 2023 — Jul 2023",
  },
  {
    id: 1,
    role: "Web Developer Intern",
    company: "Smartknower",
    place: "Bengaluru, Karnataka",
    work: [
      "Acquired hands-on proficiency in key programming languages, including HTML, CSS, and JavaScript, through their comprehensive training in the first month.",
      "Actively participated in the development of frontend components for various small-scale web projects over a productive 2-month period.",
    ],
    timeline: "Mar 2022 — Apr 2022",
  },
];

// Contact
export const SOCIAL_LINKS = [
  {
    id: 1,
    platform: "GitHub",
    link: "https://github.com/PegaShyam",
    icon: FaGithub,
  },
  {
    id: 2,
    platform: "LinkedIn",
    link: "https://www.linkedin.com/in/shyam-prasad-m/",
    icon: FaLinkedinIn,
  },
];

// Footer
export const SITEMAP = [
  {
    label: "Home",
    href: "#hero",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://www.github.com/",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/",
  },
  // {
  //   label: "Twitter X",
  //   href: "https://x.com/",
  // },
  // {
  //   label: "Instagram",
  //   href: "https://www.instagram.com/",
  // },
  // {
  //   label: "CodePen",
  //   href: "https://codepen.io/",
  // },
];