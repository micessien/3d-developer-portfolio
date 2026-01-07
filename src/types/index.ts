// Type definitions for the portfolio project

// Navigation types
export interface NavLink {
  id: string;
  title: string;
}

// Service types
export interface Service {
  title: string;
  icon: string;
}

// Technology types
export interface Technology {
  name: string;
  icon: string;
}

// Experience types
export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

// Testimonial types
export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

// Project tag types
export interface ProjectTag {
  name: string;
  color: string;
}

// Project types
export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
}

// Form state types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

// Styles object type
export interface Styles {
  paddingX: string;
  paddingY: string;
  padding: string;
  heroHeadText: string;
  heroSubText: string;
  sectionHeadText: string;
  sectionSubText: string;
}
