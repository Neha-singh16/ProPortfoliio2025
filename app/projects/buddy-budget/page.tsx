import { CaseStudyTemplate } from "@/components/case-study-template"

const heraPheriData = {
  title: "HeraPheri",
  subtitle:
    "Two-sided task marketplace with secure authentication, payments, real-time updates, and asynchronous backend processing",

  problem: {
    title: "Problem",
    content: [
      "People who need tasks completed and people willing to execute those tasks often lack a structured platform for managing the complete workflow. Task creation, assignment, execution, proof submission, approval, disputes, and payment can easily become fragmented across different tools.",
      "HeraPheri was built to bring this workflow into a single platform with clear roles, controlled task states, secure transactions, and real-time communication between participants.",
    ],
  },

  role: {
    title: "My Role",
    content:
      "Full-stack developer with a strong focus on backend architecture. Designed and implemented the REST API layer, authentication and authorization, database models and relationships, task lifecycle, payment workflows, asynchronous jobs, real-time events, notifications, and the React frontend integration.",
  },

  techStack: [
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "Sequelize",
    "Redis",
    "BullMQ",
    "Socket.IO",
    "JWT",
    "Razorpay",
  ],

  challenge: {
    title: "Key Challenge",
    content: [
      "The main challenge was coordinating a multi-step task lifecycle involving Requesters and Executors while keeping authorization, task state, payment state, and notifications consistent.",
      "Another challenge was handling operations that should not block API requests. Background jobs were separated from the main request flow using Redis and BullMQ, while Socket.IO was used to deliver real-time updates to connected users.",
    ],
  },

  solution: {
    title: "Solution",
    content: [
      "Designed RESTful APIs with Express.js and Sequelize using modular controllers, services, routes, middleware, validation, database transactions, and migrations.",
      "Implemented JWT-based authentication with access and refresh token flows and role-based authorization so Requester and Executor actions remain isolated to their permitted workflows.",
      "Integrated Redis and BullMQ for asynchronous background processing and Socket.IO for real-time task and notification updates.",
      "Integrated Razorpay payment workflows including order creation, payment verification, webhook handling, refunds, and payment-state tracking.",
      "Added backend security measures including request validation, CORS configuration, Helmet, and rate limiting.",
    ],
  },

  impact: {
    title: "Impact",
    content: [
      "End-to-end task workflow from creation and funding through assignment, execution, proof submission, approval, or dispute.",
      "Asynchronous background processing keeps longer-running operations outside the critical API request path.",
      "Real-time communication keeps users informed about important task and notification events.",
      "Payment workflows are connected to the application lifecycle rather than being handled as a separate manual process.",
    ],
  },

  github: "https://github.com/Neha-singh16/HeraPheri",
  demo: "#",
  image: "/images/herapheri.png",
}

export default function HeraPheriCaseStudy() {
  return <CaseStudyTemplate data={heraPheriData} />
}