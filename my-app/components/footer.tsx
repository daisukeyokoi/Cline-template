import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-orange-100 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-800">Dify AIエージェント</h3>
            <p className="text-sm text-orange-900/80">
              オフィスワークを効率化するAIエージェントを提供しています。 業務の自動化、効率化にお役立てください。
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-800">リンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-orange-900/80 hover:text-orange-600 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-orange-900/80 hover:text-orange-600 transition-colors">
                  Difyについて
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-orange-900/80 hover:text-orange-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-800">お問い合わせ</h3>
            <p className="text-sm text-orange-900/80">
              AIエージェントの導入についてのご質問は、お気軽にお問い合わせください。
            </p>
            <Link
              href="#contact"
              className="inline-block mt-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
            >
              お問い合わせフォーム
            </Link>
          </div>
        </div>
        <div className="border-t border-orange-200 mt-8 pt-6 text-center text-sm text-orange-900/80">
          <p>&copy; {new Date().getFullYear()} Dify AIエージェント. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

