import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Sayan Mukherjee",
  initials: "SM",
  location: "Economic Research Unit, Indian Statistical Institute, Kolkata",
  locationLink: "",
  about:
    "Welcome to my homepage!",
  summary:
    "I am currently a final year graduate student working on evolution and learning in games under the supervision of Prof. Souvik Roy. Prior to joining my Phd, I completed my Masters in Statistics (M.Stat) from Indian Statistical Institute, Kolkata and my Bachelors of Science in Statistics from Presidency University, Kolkata.",
  avatarUrl: "https://avatars.githubusercontent.com/u/157164979?s=400&u=1dbbca65c2e8fffdbe89f2922404439042c7b4ed&v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "bartosz.jarocki@hey.com",
    tel: "+48530213401",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
  work: [
    {
      company: "Universite Paris Dauphine",
      link: "https://parabol.co",
      badges: ["Paris, France"],
      title: "Visiting Summer Ph.D Student",
      logo: ParabolLogo,
      start: "May 2022",
      end: "July 2022",
      description:
        "Adaptive Cancer Therapy",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ],
} as const;
