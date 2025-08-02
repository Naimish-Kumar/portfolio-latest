import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "FoodieHub - Restaurant App",
    description: "A comprehensive food delivery app with real-time tracking, payment integration, and social features. Built with React Native and Firebase.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    category: "mobile"
  },
  {
    id: 2,
    title: "FitTracker Pro",
    description: "A fitness tracking app with workout plans, progress analytics, and social challenges. Features offline sync and wearable integration.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Flutter", "SQLite", "HealthKit", "Google Fit"],
    category: "mobile"
  },
  {
    id: 3,
    title: "CryptoWallet",
    description: "Secure cryptocurrency wallet with multi-currency support, portfolio tracking, and DeFi integration. Emphasis on security and UX.",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React Native", "Web3", "Redux", "Biometric Auth"],
    category: "mobile"
  },
  {
    id: 4,
    title: "TaskMaster Dashboard",
    description: "Project management web app with team collaboration, time tracking, and analytics. Responsive design with real-time updates.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "web"
  },
  {
    id: 5,
    title: "EcoShop Mobile",
    description: "Sustainable shopping app connecting users with eco-friendly products. Features AR try-on and carbon footprint tracking.",
    image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Swift", "ARKit", "CoreML", "CloudKit"],
    category: "mobile"
  },
  {
    id: 6,
    title: "MindfulMoments",
    description: "Meditation and mindfulness app with guided sessions, progress tracking, and community features. Calming, intuitive design.",
    image: "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Kotlin", "Room", "ExoPlayer", "Material Design"],
    category: "mobile"
  }
];