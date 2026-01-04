
export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon: string;
    image?: string;
    fullDescription?: string;
    features?: string[];
    futureSteps?: string;
    showcaseImage?: string;
    showcaseDetails?: {
        title: string;
        description: string;
        icon?: string;
    }[];
    gallery?: {
        url: string;
        description: string;
    }[];
    repoUrl?: string;
    demoUrl?: string;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    skills: string[];
}

export type BlogBlock = 
    | { type: 'text'; content: string }
    | { type: 'image'; url: string; caption?: string; className?: string }
    | { type: 'link'; prefix?: string; url: string; label?: string }
    | { type: 'gallery'; images: { url: string; caption?: string }[] };

export interface BlogPost {
    id: string;
    title: string;
    subtitle?: string; 
    date: string;
    category: string;
    excerpt: string;
    coverImage?: string;
    body?: BlogBlock[];
}