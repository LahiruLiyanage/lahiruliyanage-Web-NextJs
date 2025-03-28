export interface Experience {
    id: number;
    company: string;
    position: string;
    duration: string;
    responsibilities: string[];
    technologies: string[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
}

export interface Skill {
    name: string;
    level: number;
    category: 'Frontend' | 'Backend' | 'DevOps' | 'Tools';
}

export interface NavigationItem {
    href: string;
    label: string;
}