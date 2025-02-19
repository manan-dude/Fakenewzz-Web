import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { ImagePlus } from 'lucide-react'
import { ToggleRight } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
 
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Fake News Detection",
    description:
      "Utilizes advanced AI models to analyze news sources, headlines, and content for authenticity and misinformation.",
  },
  {
    icon: <ImagePlus />,
    text: "Multi-Format Input Support",
    description:
      "Check the credibility of news from text, URLs, and even images using Optical Character Recognition (OCR) technology.",
  },
  {
    icon: <ShieldHalf />,
    text: "Real-Time Verification",
    description:
      "Get instant feedback on news authenticity with a percentage-based credibility score for quick decision-making.",
  },
  {
    icon: <ToggleRight />,
    text: "Stylish Toggle for Image Analysis",
    description:
      "Easily switch between text and image-based verification using a sleek, interactive toggle button.",
  },
  {
    icon: <PlugZap />,
    text: "User-Friendly Interface",
    description:
      "Simple and intuitive UI with clear input fields and well-structured results to enhance readability and usability.",
  },
  {
    icon: <GlobeLock />,
    text: "Insightful Analysis Reports",
    description:
      "Receive detailed breakdowns of fake news probability, helping users understand the factors behind credibility assessments.",
  },
];

export const checklistItems = [
  {
    title: "Custom Deep Learning Models",
    description:
      "Train models to detect deepfakes in media like images, videos, and audio.",
  },
  {
    title: "Automation and Integration",
    description:
      " Automate the extraction of text from multimedia content, making the system adaptable to any media format.",
  },
  {
    title: "Broader Scope:",
    description:
      "Expand the project to detect deepfakes, not just in news but in other fields such as entertainment and politics.",
  }
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
