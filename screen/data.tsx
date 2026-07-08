import {
  FaNodeJs,
  FaDocker,
  FaReact,
  FaPython,
  FaGitAlt,
  FaServer,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiPrisma,
  SiMongoose,
  SiNextdotjs,
  SiTailwindcss,
  SiSocketdotio,
  SiDocker,
} from "react-icons/si";
import { Experience } from "./components/Whereiveworked";

export const stats = [
  { label: 'ROLE', value: 'SDE-1' },
  { label: 'LOCATION', value: 'Mumbai, India' },
  { label: 'EXPERIENCE', value: ' 1 Year' },
  { label: 'FOCUS', value: 'Backend Systems' },
]

export const skills = [
  {
    title: 'Core Languages',
    skills: [
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    title: 'Backend Engineering',
    skills: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'Django', icon: SiDjango },
      { name: 'Socket.IO', icon: SiSocketdotio },
      { name: 'BullMQ', icon: FaServer },
    ],
  },
  {
    title: 'Data Layer',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'Mongoose', icon: SiMongoose },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    title: 'Infrastructure',
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'Docker Compose', icon: SiDocker },
      { name: 'Git', icon: FaGitAlt },
    ],
  },
]

// description ~150-180 characters (2 short sentences)
export const projects = [
  {
    index: "01",
    category: "Distributed Systems",
    title: "IronQueue",
    description:
      "A BullMQ-inspired distributed job queue built with Redis and Lua scripts — atomic job claiming, lock-token fencing, and exponential backoff retries for reliable background processing.",
    githubUrl: "https://github.com/yogu-code/ironqueue",
  },
  {
    index: "02",
    category: "Backend Infrastructure",
    title: "Webhook Delivery Service",
    description:
      "A production-grade webhook delivery service built with BullMQ, PostgreSQL, and Docker — at-least-once delivery, exponential backoff retries, and full delivery tracking.",
    githubUrl: "https://github.com/yogu-code/webhook-service",
  },
  {
    index: "03",
    category: "Trading Platform",
    title: "QbarTrade",
    description:
      "A unified trading platform integrating Zerodha Kite, Groww, and AngelOne — OAuth authentication, automated order execution, and cross-broker portfolio tracking.",
  },
];

export const images = [
  "/gallery/drawing-1.png",
  "/gallery/drawing-2.png",
  "/gallery/drawing-3.png",
  "/gallery/drawing-4.png",
  "/gallery/drawing-5.png",
];

export const experiences: Experience[] = [
  {
    company: "Axiom Share Broking",
    role: "Software Engineer Intern",
    period: "Oct 2025 – Mar 2026",
    location: "Mumbai, India",
    description: (
      <>
        Engineered{" "}
        <strong className="font-semibold text-neutral-900">
          QbarTrade
        </strong>
        , a unified trading platform integrating{" "}
        <strong className="font-semibold text-neutral-900">
          Zerodha Kite, Groww, and AngelOne
        </strong>
        . Built OAuth authentication, broker API integrations, automated order
        execution, PostgreSQL-backed services, and a backtesting module for
        validating trading strategies.
      </>
    ),
  },
  {
    company: "Nexcore Alliance",
    role: "Junior Software Developer Intern",
    period: "Apr 2025 – Oct 2025",
    location: "Mumbai, India",
    description: (
      <>
        Developed an{" "}
        <strong className="font-semibold text-neutral-900">
          NLP-powered chatbot
        </strong>{" "}
        using Gemini AI, implemented a{" "}
        <strong className="font-semibold text-neutral-900">
          Socket.IO real-time chat system
        </strong>
        , and built core backend features for{" "}
        <strong className="font-semibold text-neutral-900">
          NEET720
        </strong>
        , including question generation, progress tracking, and student
        dashboards.
      </>
    ),
  },
];