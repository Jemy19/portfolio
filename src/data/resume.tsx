import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Albert Jeremy Bernard P. Gellido",
  initials: "AJBPG",
  url: "https://ajbg.vercel.app",
  location: "Pasig City, Philippines",
  locationLink: "",
  description:
    "A motivated Software Engineer and recent graduate with a strong passion for building innovative web applications.",
  summary:
    "I graduated in 2025 with a [Bachelor's in Information Technology and a Diploma in Information and Communication Technology](/#education). My experience includes internships as a Web Developer, where I built analytics dashboards and chatbot models, and as a QA Tester, ensuring quality in AI projects. I excel in both frontend and backend development and have experience in deployment with Docker and Nginx, driven by a passion for creating impactful tech solutions.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "TypeScript",
    "Node.js",
    "Python",
    "Java",
    "C++",
    "PostgreSQL",
    "MongoDB",
    "Firebase",
    "Docker",
    "Docker Compose",
    "Nginx",
    "AWS EC2",
    "Automation Testing"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "Gellidojeremy@gmail.com",
    tel: "09763854233",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Jemy19",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ajbg19/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:Gellidojeremy@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mind You",
      href: "https://www.mindyou.com.ph",
      badges: [],
      location: "Remote",
      title: "Web Developer Intern",
      logoUrl: "/mindyou.jpg",
      start: "March 2025",
      end: "June 2025",
      description:
        "Developed an analytics page with Streamlit for live data visualizations. Integrated generative AI and created chatbot models. Implemented a parser to clean and preprocess data from support tickets, which was integrated with a machine learning model that reads the subject of a support tickets and outputs categorized results and deployed applications using Docker and Nginx.",
    },
    {
      company: "BlastAsia",
      badges: [],
      href: "https://www.blastasia.com",
      location: "Remote",
      title: "QA Tester Intern",
      logoUrl: "/blastasia.png",
      start: "December 2024",
      end: "February 2025",
      description:
        "Designed and executed comprehensive regression testing protocols for an AI-driven project, utilizing Katalon to identify and resolve critical errors.",
    },
    {
      company: "Outlier",
      href: "https://outlier.ai",
      badges: [],
      location: "Remote",
      title: "Advanced Coders - AI Training",
      logoUrl: "/outlier.png",
      start: "November 2024",
      end: "April 2025",
      description:
        "Created and validated test cases to ensure high-quality AI outputs, reviewed responses for accuracy, and contributed to AI training by performing coding tasks in various programming languages, including Java, C++, Python, SQL, and HTML.",
    },
  ],
  education: [
    {
      school: "National University - Manila",
      href: "https://www.national-u.edu.ph/",
      degree: "Bachelor's Degree in Information Technology Major in Web and Mobile Development",
      logoUrl: "/NU.png",
      start: "2023",
      end: "2025",
    },
    {
      school: "Polytechnic University of the Philippines",
      href: "https://www.pup.edu.ph/",
      degree: "Diploma in Information and Communication Technology",
      logoUrl: "/PUP.png",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "E-Kumpas",
      href: "https://ekumpas.vercel.app",
      dates: "June 2024 - October 2024",
      active: true,
      description:
        "E-Kumpas is a mobile and web application designed to bridge communication gaps between the Deaf community and hearing individuals in the Philippines. The app translates text into Filipino Sign Language (FSL) through animations.",
      technologies: [
        "React.js",
        "MongoDB",
        "Node.js",
        "Express.js",
        "TailwindCSS",
        "Spline",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://ekumpas.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jemy19/Kumpas",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/ekumpasvid.mp4",
    },
    {
      title: "Streamlit Analytics",
      href: "",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "Developed multiple Streamlit analytics pages for company insights, created APIs in Python to fetch data, and implemented Docker and Docker Compose for containerization. Deployed the application on an EC2 instance with an Nginx web server to expose the app.",
      technologies: [
        "Streamlit",
        "Python",
        "Django",
        "HTML/CSS",
        "Docker",
        "Nginx",
      ],
      links: [

      ],
      image: "",
      video: "/streamlitvid.mp4",
    },
    {
      title: "Prompt the Word",
      href: "https://prompttheword.vercel.app",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Built a prompt-based word guessing game where players try to make the AI say a hidden word one clever prompt at a time.",
      technologies: [
        "Next.js",
        "TypeScript",
        "React",
        "TailwindCSS",
        "Shadcn UI",
        "Lucide Icons",
        "Gemini (Google AI)",
        "Embla Carousel",
        "next-themes",
      ],
      links: [
        {
          type: "Website",
          href: "https://prompttheword.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Jemy19/PromptTheWord",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/PTW.png",
      video: "",
    },
  ],
} as const;
