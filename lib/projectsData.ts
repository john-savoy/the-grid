export interface Project {
  id: string;
  title: string;
  tagline: string;
  image: string;
  category: "full-stack" | "backend" | "frontend" | "academic";
  userContent: string[];
  techContent: string[];
  challengeContent: string[];
}

export const projects: Project[] = [
  {
    id: "rollup",
    title: "ROLLUP PLATFORM",
    tagline: "Mobile-first food truck ordering platform",
    image: "/projects/rollup.png", // Placeholder for now
    category: "full-stack",
    userContent: [
      "Mobile ordering interface for iOS and Android",
      "Real-time order status tracking with notifications",
      "Vendor management dashboard for food trucks",
      "Secure user authentication and profiles",
      "Location-based food truck discovery",
    ],
    techContent: [
      "React Native with Expo Router for cross-platform mobile apps",
      "Spring Boot 3.x backend with Java 17",
      "PostgreSQL database with optimized relationships",
      "JWT-based authentication and authorization",
      "RESTful API architecture",
      "Axios for API communication with React Query state management",
    ],
    challengeContent: [
      "Problem: Food truck customers struggle to find trucks, view menus, and order efficiently",
      "Approach: Built dual-app architecture optimized for both customer and vendor workflows",
      "Solution: Mobile-first platform with real-time updates and flexible menu management",
      "Result: Production-ready full-stack application with complete order lifecycle",
      "Learning: Gained experience in mobile development, secure authentication flows, and real-world problem-solving",
    ],
  },
  {
    id: "corner-post-farms",
    title: "CORNER POST FARMS",
    tagline: "Modern farm website with e-commerce integration",
    image: "/projects/corner-post.png", // Placeholder for now
    category: "full-stack",
    userContent: [
      "Clean, professional farm website showcasing products",
      "Product catalog for beef and pork offerings",
      "Secure checkout with Square payment integration",
      "Responsive design for mobile, tablet, and desktop",
      "Customer order management system",
    ],
    techContent: [
      "Next.js for server-side rendering and optimal SEO",
      "React with TypeScript for type-safe frontend",
      "Square API integration for payment processing",
      "Responsive design with modern CSS frameworks",
      "Optimized performance and fast loading times",
    ],
    challengeContent: [
      "Problem: Farm pivoting from produce to beef/pork needed modern web presence with e-commerce",
      "Approach: Custom-built solution tailored to business needs rather than generic website builder",
      "Solution: Professional site with integrated Square payments and product management",
      "Result: 80% complete, delivering modern e-commerce for small farm business",
      "Learning: E-commerce integration, third-party API usage, adapting to changing client requirements",
    ],
  },
];