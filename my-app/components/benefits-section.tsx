import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, TrendingUp, Users, Shield } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-orange-600" />,
      title: "業務時間の削減",
      description: "繰り返し行う作業をAIに任せることで、最大40%の時間削減が可能です。創造的な業務に集中できます。",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-orange-600" />,
      title: "生産性の向上",
      description: "AIによる情報整理と分析で、意思決定のスピードが向上。より効率的な業務遂行を実現します。",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-600" />,
      title: "チームワークの強化",
      description: "情報共有とコミュニケーションをAIがサポートし、チーム全体の連携を強化します。",
    },
    {
      icon: <Shield className="h-10 w-10 text-orange-600" />,
      title: "ミスの削減",
      description: "AIによるチェック機能で、ヒューマンエラーを防止。品質の一貫性を保ちます。",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-orange-800">AIエージェント導入のメリット</h2>
          <p className="text-lg text-orange-900/80 max-w-3xl mx-auto">
            Dify AIエージェントを導入することで、あなたのオフィスワークはどう変わるのでしょうか？
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white hover:shadow-md transition-all duration-300 h-full border border-orange-100"
            >
              <CardHeader className="flex justify-center pb-2">{benefit.icon}</CardHeader>
              <CardContent className="text-center">
                <h3 className="text-xl font-bold mb-2 text-orange-800">{benefit.title}</h3>
                <p className="text-orange-900/80">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

