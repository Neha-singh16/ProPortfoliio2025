"use client"

import { notFound } from "next/navigation"
import { CaseStudyTemplate } from "@/components/case-study-template"
import BuddyBudgetCaseStudy from "./buddy-budget/page"
import HintlyCaseStudy from "./hintly/page"
import PortfolioCaseStudy from "./pro-portfolio/page"

const caseStudyMap: Record<string, () => JSX.Element> = {
  "buddy-budget": () => <BuddyBudgetCaseStudy />,
  hintly: () => <HintlyCaseStudy />,
  "pro-portfolio": () => <PortfolioCaseStudy />,
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const CaseStudy = caseStudyMap[params.slug]

  if (!CaseStudy) {
    notFound()
  }

  return <CaseStudy />
}
