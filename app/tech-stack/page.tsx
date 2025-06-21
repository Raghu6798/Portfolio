import type { Metadata } from "next"
import TechStackContent from "@/components/pages/techStackContent"

export const metadata: Metadata = {
  title: "Tech Stack | Raghu Nandan",
  description:
    "Comprehensive overview of technologies, frameworks, and tools I work with in AI, ML, and software development",
}

export default function TechStackPage() {
  return <TechStackContent />
}
