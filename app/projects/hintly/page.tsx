import { CaseStudyTemplate } from "@/components/case-study-template"

const jobApplicationTrackerData = {
  title: "Job Application Tracker",
  subtitle:
    "Backend-focused job application management platform with searchable APIs, file uploads, reminders, and application tracking",

  problem: {
    title: "Problem",
    content: [
      "Job seekers often manage applications across spreadsheets, emails, browser tabs, and notes. This makes it difficult to keep track of application stages, company information, job details, follow-ups, documents, and upcoming reminders.",
      "The goal was to build a centralized system where users could manage the complete application lifecycle and quickly retrieve applications using search, filtering, sorting, and pagination.",
    ],
  },

  role: {
    title: "My Role",
    content:
      "Full-stack developer with primary responsibility for backend API development. Designed the database models and relationships, authentication flow, application and company APIs, filtering and pagination logic, attachment handling, reminder processing, and integration with the React frontend.",
  },

  techStack: [
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "Sequelize",
    "JWT",
    "Multer",
    "Node-Cron",
    "Axios",
  ],

  challenge: {
    title: "Key Challenge",
    content: [
      "The application needed to support flexible searching and filtering without making the API difficult to maintain. Users can search across applications and combine filters such as status, company, and date ranges with pagination and sorting.",
      "Another challenge was handling reminders and uploaded attachments as part of the same application workflow while keeping the backend modular and user-specific.",
    ],
  },

  solution: {
    title: "Solution",
    content: [
      "Built RESTful APIs with Node.js and Express.js using Sequelize for database access and relationships between users, applications, companies, job listings, attachments, and reminders.",
      "Implemented JWT authentication and user-specific data access so application records are isolated between users.",
      "Added search, filtering, sorting, pagination, and date-based querying to allow users to efficiently retrieve application records.",
      "Implemented attachment uploads using Multer and connected uploaded files to the corresponding job application records.",
      "Added scheduled reminder processing with Node-Cron to identify pending reminders and trigger email notifications for upcoming follow-ups.",
    ],
  },

  impact: {
    title: "Impact",
    content: [
      "Centralized job application, company, and job listing management in one platform.",
      "Search, filtering, sorting, and pagination make large application datasets easier to manage.",
      "Attachment support keeps resumes, documents, and related files associated with applications.",
      "Automated reminders reduce the need to manually track application follow-ups.",
    ],
  },

  github:
    "https://github.com/Neha-singh16/SharpenerDev/tree/main/jobApplicationTracker",
  demo: "#",
  image: "/images/job-tracker.png",
}

export default function JobApplicationTrackerCaseStudy() {
  return <CaseStudyTemplate data={jobApplicationTrackerData} />
}