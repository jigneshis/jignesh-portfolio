export interface Project {
  slug: string;              // URL-safe identifier
  title: string;             // "ProjectName"
  category: string;          // "Web Application", "Landing Page", etc.
  description: string;       // Brief description for project page
  thumbnail: string;         // Path to screenshot for grid card
  heroImage?: string;        // Path to hero image for detail page
  liveUrl?: string;          // Link to live project
  githubUrl?: string;        // Link to GitHub repo
  techStack: string[];       // Technologies used
  featured: boolean;         // Show on homepage grid (max 4)
  order: number;             // Display order
  comingSoon?: boolean;      // In development / coming soon banner
}
