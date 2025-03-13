import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-orange-50 shadow-md">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-700">
            Dify AIエージェント
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-orange-800 hover:text-orange-600 transition-colors">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-orange-800 hover:text-orange-600 transition-colors">
                  Difyについて
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

