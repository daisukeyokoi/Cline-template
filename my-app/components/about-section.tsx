import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-800">Difyについて</h2>
          <p className="text-lg text-orange-900/80 max-w-3xl mx-auto">
            Difyは、AIエージェントを簡単に作成・管理できるプラットフォームです。
            専門的な知識がなくても、業務に特化したAIアシスタントを構築できます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Difyプラットフォーム"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-800">AIエージェントで業務を変革</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-orange-600 rounded-full p-1 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700">時間の節約</h4>
                  <p className="text-orange-900/80">繰り返し行う業務をAIに任せることで、創造的な仕事に集中できます。</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-600 rounded-full p-1 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700">精度の向上</h4>
                  <p className="text-orange-900/80">
                    AIによる分析と処理で、ヒューマンエラーを減らし、一貫した品質を維持します。
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-orange-600 rounded-full p-1 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-700">カスタマイズ性</h4>
                  <p className="text-orange-900/80">あなたのビジネスに合わせたAIエージェントを簡単に構築できます。</p>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Button className="bg-orange-600 hover:bg-orange-700">
                <Link href="https://dify.ai" target="_blank" rel="noopener noreferrer">
                  Difyを試してみる
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

