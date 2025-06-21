import type { Metadata } from "next"
import HomeContent from "@/components/pages/HomeContent"

export const metadata: Metadata = {
  title: "Raghu Nandan | Generative AI Developer",
  description: "Generative AI Developer portfolio showcasing projects and skills in AI and machine learning",
}

export default function Home() {
  return <HomeContent />
}
