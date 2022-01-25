import { SearchCircleIcon, CogIcon, DatabaseIcon, ViewGridIcon, ServerIcon, ShieldCheckIcon, DesktopComputerIcon, CloudIcon } from "@heroicons/react/solid";
import React from "react";

export const projects = [
  {
    title: "YRAP Volunteer Profiler",
    subtitle: "React + Django + PostgreSQL",
    description:
      "This portal helps YRAP board members with managing their volunteer's application and projects.",
    image: "./YRAP_Volunteer_Profiler.gif",
    link: "https://www.youtube.com/watch?v=fkLFOinUaU4",
  },
  {
    title: "Moodie",
    subtitle: "Bootsrap + Django + SQLite",
    description:
      "A 24-Hour Hackathon project with mental wellness theme. User can track their moods and receive mood-elevating recommendations from the app.",
    image: "./Moodie.gif",
    link: "https://www.youtube.com/watch?v=RSxcEnDtrq8",
  },
  {
    title: "ScITech WebCMDB",
    subtitle: "Django + SQLite + RabbitMQ + Celery + Docker",
    description:
      "Internal website for keeping logs and update details of desktops, printers, and servers. The app allow importing CSV and compare it with the authorative CSV hosted on Github.",
    image: "./webcmdb.gif",
    link: "",
  }
]

export const certificates = [
  {
    status: 'Current',
    quote:
      "The eLearnSecurity Junior Penetration Tester (eJPT) is a 100% practical certification on penetration testing and information security essentials.",
    image: "./ejpt.WEBP",
    name: "eJPT",
    company: "eLearn Security",
    comment: "I passed with a 95% score."
  },
  {
    status: 'Upcoming',
    list: [
      {
        quote:
          "",
        image: "./aws-ccp.png",
        name: "AWS Certified Cloud Practitioner",
        company: "Amazon"
      },
      {
        quote:
        "",
        image: "./comptia-security.png",
        name: "Security+ SY0-601",
        company: "CompTIA"
      }
    ]
  },
];

export const skills = [
  {
    title: 'Django - Django Rest Framework',
    icon: <CogIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'PostgreSQL - SQLite - Firebase',
    icon: <DatabaseIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'Bootstrap - React Hooks - Tailwind CSS',
    icon: <ViewGridIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'Docker - Nginx - Gunicorn',
    icon: <ServerIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'Metasploit - Hydra - SQLMap',
    icon: <ShieldCheckIcon className="text-red-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'Burp Suite - Wireshark',
    icon: <SearchCircleIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'AWS - Git',
    icon: <CloudIcon className="text-white-400 w-6 h-6 flex-shrink-0 mr-4"/>
  },
  {
    title: 'Windows - Linux - Kali Linux',
    icon: <DesktopComputerIcon className="text-white-400 w-6 h-6 flex-shrink-0 mr-4"/>
  }
]