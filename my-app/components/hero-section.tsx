import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-orange-50 to-beige-100 py-16 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-800">
          <span className="text-orange-600">AI</span>があなたの業務を<span className="text-orange-600">効率化</span>する
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-900/80">
          Difyで作成したAIエージェントが、あなたの日常業務をサポート。
          <br />
          時間を節約し、創造的な仕事に集中しましょう。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 border-none">
            <Link href="#agents">エージェントを見る</Link>
          </Button>
          <Button size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-100">
            <Link href="#about">Difyについて詳しく</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

