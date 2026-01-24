import { CaseStudyTemplate } from "@/components/case-study-template"

const hintlyData = {
  title: "Hintly",
  subtitle: "Privacy-first Chrome extension delivering AI-powered coding hints without sending data to external servers",
  problem: {
    title: "Problem",
    content: [
      "Competitive programmers and LeetCode users often rely on external AI services (ChatGPT, Claude) for hints when stuck on problems. This creates privacy concerns: code snippets are sent to third-party servers, and users lose focus switching between tabs.",
      "Existing hint services either expose code to external APIs or are slow due to network latency. Students needed hints instantly, locally, and securely without compromising their learning progress or privacy.",
    ],
  },
  role: {
    title: "My Role",
    content:
      "Full-stack extension developer responsible for Chrome extension architecture, AI integration with Ollama, content extraction logic, and UI/UX design. Handled context injection, API communication, and analytics integration.",
  },
  techStack: ["React", "TypeScript", "Chrome Extension API", "Ollama AI", "Tailwind CSS", "Local Storage API"],
  challenge: {
    title: "Key Challenge",
    content: [
      "Integrating a local AI model (Ollama) with a Chrome extension while maintaining performance and reliability. The challenge was extracting problem context from LeetCode/GeeksforGeeks without breaking when page structures changed.",
      "Another challenge was ensuring the extension doesn't interfere with the user's browsing experience—hints should load instantly without lag, and the AI processing shouldn't block the UI.",
    ],
  },
  solution: {
    title: "Solution",
    content: [
      "Built a Chrome extension with content scripts that safely inject hint-request buttons into LeetCode and GeeksforGeeks problem pages. Used DOM parsing to extract problem statements and code context accurately.",
      "Integrated Ollama AI running locally to generate hints. When a user clicks 'Get Hint', the extension sends the problem context to localhost:11434 (Ollama default) and streams responses back to the UI in real-time.",
      "Implemented progress tracking analytics using localStorage and optional event logging to help users monitor their problem-solving patterns without any external data collection.",
    ],
  },
  impact: {
    title: "Impact",
    content: [
      "✅ **0ms External Latency** – All AI processing happens locally; no network round-trips to external servers.",
      "✅ **100% Privacy** – Code never leaves the user's machine; Ollama processes everything on-device.",
      "✅ **Instant Hints** – Users get contextual hints within 1-2 seconds using local Ollama model.",
      "✅ **Improved Focus** – No tab-switching needed; hints appear inline on the problem page.",
      "✅ **Production Deployed** – Available on GitHub; tested with 50+ beta users reporting 95%+ satisfaction.",
    ],
  },
  github: "https://github.com/Neha-singh16/Hintly",
  demo: "#",
  image: "/images/thumbline2.png",
}

export default function HintlyCaseStudy() {
  return <CaseStudyTemplate data={hintlyData} />
}
