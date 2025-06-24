// src/data/mockData.js
export const categories = [
  {
    id: 1,
    name: "Self-help",
    description: "Personal development and growth strategies",
    count: 24,
    slug: "self-help",
    color: "purple",
    icon: "🧠",
  },
  {
    id: 2,
    name: "Productivity",
    description: "Time management and efficiency techniques",
    count: 18,
    slug: "productivity",
    color: "green",
    icon: "⚡",
  },
  {
    id: 3,
    name: "Sales",
    description: "Sales strategies and customer relations",
    count: 15,
    slug: "sales",
    color: "red",
    icon: "📈",
  },
  {
    id: 4,
    name: "Leadership",
    description: "Management and team building skills",
    count: 20,
    slug: "leadership",
    color: "blue",
    icon: "👥",
  },
  {
    id: 5,
    name: "Finance",
    description: "Personal finance and investment wisdom",
    count: 12,
    slug: "finance",
    color: "yellow",
    icon: "💰",
  },
];

export const featuredBooks = [
  {
    id: 1,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    category: "Self-help",
    summary:
      "A comprehensive guide to personal and professional effectiveness through seven fundamental habits that transform how we approach life and work.",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    coverImage:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop",
    duration: "25 min",
    rating: 4.8,
    listeners: "12.5K",
    fullContent:
      "This transformative book presents seven timeless principles that form the foundation of personal effectiveness. Covey emphasizes character-based leadership and provides practical frameworks for personal and interpersonal success.",
    modules: [
      {
        title: "Be Proactive",
        description:
          "Take responsibility for your life and choices. Focus on what you can control rather than what you cannot.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "6 min",
      },
      {
        title: "Begin with the End in Mind",
        description:
          "Define your mission and goals clearly. Create a personal vision statement that guides your decisions.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "5 min",
      },
      {
        title: "Put First Things First",
        description:
          "Prioritize important activities over urgent ones. Manage your time and energy effectively.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "7 min",
      },
    ],
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-help",
    summary:
      "Small changes that make a big difference in building good habits and breaking bad ones through the compound effect of consistent actions.",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    coverImage:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
    duration: "20 min",
    rating: 4.9,
    listeners: "18.2K",
    fullContent:
      "Clear demonstrates how tiny changes can lead to remarkable results through the four laws of behavior change: make it obvious, attractive, easy, and satisfying.",
    modules: [
      {
        title: "The Four Laws of Behavior Change",
        description:
          "Learn the fundamental framework for building lasting habits through cue, craving, response, and reward.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "8 min",
      },
      {
        title: "Environment Design",
        description:
          "Optimize your environment to make good habits easier and bad habits harder to perform.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "6 min",
      },
    ],
  },
  {
    id: 3,
    title: "Getting Things Done",
    author: "David Allen",
    category: "Productivity",
    summary:
      "A productivity methodology that helps you organize tasks, reduce mental stress, and achieve a clear mind through systematic task management.",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
    coverImage:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=400&fit=crop",
    duration: "18 min",
    rating: 4.7,
    listeners: "9.8K",
    fullContent:
      "The GTD method provides a comprehensive system for capturing, clarifying, organizing, and reviewing all your commitments.",
    modules: [
      {
        title: "Capture Everything",
        description:
          "Learn to collect all tasks, ideas, and commitments in trusted external systems.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "5 min",
      },
      {
        title: "The Two-Minute Rule",
        description:
          "Handle quick tasks immediately to prevent them from cluttering your system.",
        audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
        duration: "4 min",
      },
    ],
  },
];
