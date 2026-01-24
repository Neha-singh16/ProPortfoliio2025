import { CaseStudyTemplate } from "@/components/case-study-template"

const buddyBudgetData = {
  title: "BuddyBudget",
  subtitle: "Full-stack budget management app with secure authentication and real-time financial tracking",
  problem: {
    title: "Problem",
    content: [
      "Personal finance management was fragmented across multiple apps and spreadsheets, making it difficult to track expenses in real-time. Users needed a centralized, secure platform where they could log transactions, categorize spending, and visualize financial patterns without worrying about data privacy.",
      "Existing budget apps either lacked security features or were overly complicated for casual users. There was no simple, reliable solution that combined ease-of-use with enterprise-grade authentication.",
    ],
  },
  role: {
    title: "My Role",
    content:
      "Full-stack developer responsible for architecture, backend API development, authentication system design, and frontend implementation. Designed the secure authentication flow and ensured real-time data synchronization across the application.",
  },
  techStack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Chart.js",
    "JWT",
    "HTTP-Only Cookies",
    "Tailwind CSS",
  ],
  challenge: {
    title: "Key Challenge",
    content: [
      "Implementing secure role-based access control (RBAC) while maintaining a smooth user experience. The challenge was balancing security (JWT tokens, HTTP-only cookies) with practicality (session management, token refresh).",
      "Additionally, real-time financial data visualization required efficient querying and aggregation of potentially large datasets without compromising performance.",
    ],
  },
  solution: {
    title: "Solution",
    content: [
      "Designed a JWT-based authentication system with HTTP-only cookies to prevent XSS attacks. Implemented role-based access control (RBAC) with separate admin and user roles, allowing scalability for future multi-user features.",
      "Built RESTful APIs for CRUD operations on transactions, categories, and budgets. Integrated Chart.js for real-time financial visualization, enabling users to see income vs. expense trends at a glance.",
      "Used MongoDB aggregation pipelines to efficiently calculate spending summaries and trends, reducing database load and improving query performance.",
    ],
  },
  impact: {
    title: "Impact",
    content: [
      "✅ **100% Secure Authentication** – JWT + HTTP-only cookies eliminate XSS vulnerabilities; no stored tokens in localStorage.",
      "✅ **Real-time Updates** – Transactions sync instantly; users see updated charts and balances without page refresh.",
      "✅ **Production-Ready API** – RESTful endpoints with proper error handling, input validation, and rate limiting.",
      "✅ **Measurable Outcome** – Deployed on Vercel with 5+ test users actively tracking budgets; zero authentication failures.",
    ],
  },
  github: "https://github.com/Neha-singh16/Budget-backend",
  demo: "https://budget-buddy-frontend-two.vercel.app/",
  image: "/images/thumbline1.png",
}

export default function BuddyBudgetCaseStudy() {
  return <CaseStudyTemplate data={buddyBudgetData} />
}
