import {
  Code2,
  Database,
  Cloud,
  Server,
  Network,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Code,
  Award,
  Briefcase,
  User,
  Send,
  MapPin,
  Calendar,
  Trophy,
  Layers,
  Globe,
  type LucideIcon,
} from 'lucide-react';

export const profile = {
  name: 'Nayan Chaudhari',
  title: 'Java Full Stack Developer & IT Engineer',
  summary:
    'Aspiring and highly motivated Java Full Stack Developer with hands-on experience in building web applications and integrating Cloud computing and Salesforce solutions. Strong problem-solving mindset and quick learner.',
  email: 'nayanhchaudhari45@gmail.com',
  location: 'Amravati, Maharashtra, India',
  image: 'https://images.pexels.com/photos/7989025/pexels-photo-7989025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  resumeUrl: '/Nayan_Chaudhari_Resume.pdf',
};

export const stats: { label: string; value: number; suffix: string; decimals: number; icon: LucideIcon; color: string }[] = [
  { label: 'CGPA', value: 8.58, suffix: '/10', decimals: 2, icon: GraduationCap, color: 'from-cyan-500 to-blue-500' },
  { label: 'Internships', value: 2, suffix: '+', decimals: 0, icon: Briefcase, color: 'from-teal-500 to-emerald-500' },
  { label: 'Cloud Points', value: 17000, suffix: '+', decimals: 0, icon: Cloud, color: 'from-violet-500 to-fuchsia-500' },
  { label: 'Certifications', value: 7, suffix: '+', decimals: 0, icon: Award, color: 'from-amber-500 to-orange-500' },
];

export const socials: { label: string; href: string; icon: LucideIcon; color: string }[] = [
  { label: 'Email', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=nayanhchaudhari45@gmail.com', icon: Mail, color: 'hover:text-rose-400' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nayan-c-708025259/', icon: Linkedin, color: 'hover:text-sky-400' },
  { label: 'GitHub', href: 'https://github.com/nayan03nc', icon: Github, color: 'hover:text-slate-200' },
  { label: 'LeetCode', href: 'https://leetcode.com/nayanchaudhari', icon: Code, color: 'hover:text-amber-400' },
];

export const navLinks: { id: string; label: string; icon: LucideIcon }[] = [
  { id: 'home', label: 'Home', icon: User },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export const skillCategories: {
  title: string;
  icon: LucideIcon;
  color: string;
  skills: string[];
}[] = [
  {
    title: 'Programming Languages & CRM',
    icon: Code2,
    color: 'from-cyan-500 to-blue-500',
    skills: ['Java', 'SQL', 'JavaScript', 'Python', 'Salesforce', 'Google Cloud'],
  },
  {
    title: 'Frameworks & Technologies',
    icon: Server,
    color: 'from-teal-500 to-emerald-500',
    skills: ['Spring Boot', 'Hibernate', 'Servlets', 'JSP', 'JDBC'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-amber-500 to-orange-500',
    skills: ['Oracle', 'PostgreSQL', 'MySQL'],
  },
  {
    title: 'Computer Fundamentals',
    icon: GraduationCap,
    color: 'from-violet-500 to-fuchsia-500',
    skills: ['OOP', 'Cloud Basics', 'DBMS', 'Operating System', 'RDBMS'],
  },
  {
    title: 'Networking & Troubleshooting',
    icon: Network,
    color: 'from-rose-500 to-pink-500',
    skills: ['Protocols & IP Management', 'Routing & Switching', 'Issue Resolution', 'Network Diagnostics', 'Windows', 'Linux', 'Trailhead'],
  },
];

export const experiences: {
  role: string;
  company: string;
  period: string;
  description: string;
  image: string;
  tags: string[];
}[] = [
  {
    role: 'SEO Intern',
    company: 'VK Control Pvt Ltd',
    period: 'Feb 2025 – Sep 2025',
    description:
      'Conducted site audits and technical analysis to improve search rankings, resolve crawl errors, and maintained website health. Optimized on-page elements and metadata ensuring 100% plagiarism-free content and organic traffic growth.',
    image: 'https://images.pexels.com/photos/942331/pexels-photo-942331.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
    tags: ['SEO', 'Site Audits', 'Metadata', 'Crawl Errors', 'Organic Traffic'],
  },
  {
    role: 'Salesforce Developer Intern',
    company: 'SmartBridge',
    period: 'Jan 2025 – July 2025',
    description:
      'Gained practical experience in Salesforce development, completing modules on Apex, Process Automation, LWS, and API Integration. Built workflows and automated processes to improve CRM efficiency.',
    image: 'https://images.pexels.com/photos/34069/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=400&w=600',
    tags: ['Apex', 'Process Automation', 'LWS', 'API Integration', 'CRM'],
  },
];

export const projects: {
  title: string;
  techStack: string;
  description: string;
  image: string;
  features: { name: string; description: string }[];
  tags: string[];
}[] = [
  {
    title: 'College Social Network System',
    techStack: 'HTML, CSS, JS, PHP, MySQL',
    description:
      'A platform enabling seamless communication between students, alumni, and faculty members within a college environment.',
    image: 'https://images.pexels.com/photos/38787318/pexels-photo-38787318.jpeg?auto=compress&cs=tinysrgb&h=500&w=800',
    features: [
      {
        name: 'Alumni Module',
        description: 'Create profiles, share experiences, interact with students, and participate in discussions.',
      },
      {
        name: 'Student Module',
        description: 'Register, connect with alumni, join discussions, and seek career guidance.',
      },
      {
        name: 'Staff Module',
        description: 'Monitor discussions, share academic updates, and guide students.',
      },
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

export const education: {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeLabel: string;
}[] = [
  {
    institution: 'Sipna College of Engineering & Technology, Amravati',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    period: '2021 – 2025',
    grade: '8.58',
    gradeLabel: 'CGPA',
  },
  {
    institution: 'Vidya Bharti Mahavidyalaya, Amravati',
    degree: 'Higher Secondary Education (Class XII)',
    period: '2020 – 2021',
    grade: '81.17%',
    gradeLabel: 'Percentage',
  },
  {
    institution: 'Nilkanth Mahavidyalaya, Amravati',
    degree: 'Secondary Education (Class X)',
    period: '2019 – 2020',
    grade: '80.40%',
    gradeLabel: 'Percentage',
  },
];

export const certifications: { title: string; issuer: string; icon: LucideIcon; color: string; highlight?: boolean }[] = [
  { title: 'Java Training Certificate', issuer: 'SCALER', icon: Code2, color: 'from-cyan-500 to-blue-600' },
  { title: 'SQL Certification of Excellence', issuer: 'SQL Authority', icon: Database, color: 'from-amber-500 to-orange-600' },
  {
    title: 'Government Affiliated Professional HTML Course Certificate',
    issuer: 'STP Computer-New Delhi',
    icon: Globe,
    color: 'from-teal-500 to-emerald-600',
  },
  {
    title: 'Salesforce Developer Virtual Internship Certificate',
    issuer: 'Smart Intern & AICTE',
    icon: Cloud,
    color: 'from-sky-500 to-indigo-600',
  },
  {
    title: 'Google Cloud Skills Boost — Diamond League Member (17K+ points)',
    issuer: 'Google Cloud',
    icon: Trophy,
    color: 'from-violet-500 to-fuchsia-600',
    highlight: true,
  },
  { title: 'Salesforce Trailhead Dashboard', issuer: 'Salesforce', icon: Award, color: 'from-blue-500 to-cyan-600' },
  {
    title: 'Technical Quiz Event — National Level Tech Fest (VIDYOTAN-2024)',
    issuer: 'SIPNA COET',
    icon: Trophy,
    color: 'from-rose-500 to-pink-600',
  },
];

// Re-export icons that might be used directly in components
export { Mail, Github, Linkedin, MapPin, Calendar, Send, Briefcase, Code2, Trophy, Award };
