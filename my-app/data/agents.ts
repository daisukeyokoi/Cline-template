export interface Agent {
  id: string
  name: string
  description: string
  features: string[]
  category: string
  difyLink?: string
  demoLink?: string
  image?: string
  appUrl?: string
  storageUrl?: string
}

export const agents: Agent[] = [
  {
    id: "agent-001",
    name: "企業概要スクレイピング",
    description:
      "指定したURLから企業の概要情報を自動的に抽出し、データとして整理します。効率的な企業調査をサポートします。",
    features: ["Webスクレイピング", "データ抽出", "自動整形"],
    category: "データ収集",
    appUrl: "https://dify.triproadgo.com/workflow/koOG8TofzqNuoKbZ",
    storageUrl:
      "https://docs.google.com/spreadsheets/d/15gOM2fDTtgYqoV5UzGunt7uAHAxfO36oHZX2ThurZlU/edit?gid=1819443224#gid=1819443224",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-002",
    name: "【複数URL】企業概要スクレイピング",
    description: "複数のURLから一度に企業情報を収集。大量の企業データを効率的に収集・整理します。",
    features: ["一括処理", "複数URL対応", "データ整形"],
    category: "データ収集",
    appUrl: "https://dify.triproadgo.com/workflow/PpmPS7781PdntMTS",
    storageUrl: "https://docs.google.com/spreadsheets/d/1MrwW6uZjO1XKcNRgXOO0Yscl1NoM1wFmqUHsLD0HTtk/edit?gid=0#gid=0",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-003",
    name: "シナリオプランニング生成",
    description: "将来の不確実性に備えるためのシナリオプランニングを自動生成。戦略立案をサポートします。",
    features: ["シナリオ生成", "戦略分析", "リスク評価"],
    category: "戦略立案",
    appUrl: "https://dify.triproadgo.com/workflow/c9J0TzhOMzfb61dM",
    storageUrl: "https://docs.google.com/spreadsheets/d/12KJtOioCcIj02eOQcMJm6NrPWSOqKSoXvP6s_zi_h54/edit?gid=0#gid=0",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-004",
    name: "プレスリリース分析",
    description: "プレスリリースの内容を自動分析し、重要なポイントを抽出。競合情報の収集に役立ちます。",
    features: ["テキスト分析", "要点抽出", "トレンド把握"],
    category: "情報分析",
    appUrl: "https://dify.triproadgo.com/workflow/2SyZSfEmCa4zcep1",
    storageUrl: "https://docs.google.com/spreadsheets/d/18ruQwdhCp5eH87KOSX73cOZrhPGHoVFFWTWo8X4kS_Q/edit?gid=0#gid=0",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-005",
    name: "Cosense→ドキュメント変換",
    description: "Cosenseのデータを標準的なドキュメント形式に変換。情報の整理と共有を効率化します。",
    features: ["フォーマット変換", "ドキュメント生成", "データ整形"],
    category: "ドキュメント管理",
    appUrl: "https://dify.triproadgo.com/workflow/CiVfbQzyseOw751L",
    storageUrl: "https://drive.google.com/drive/u/0/folders/1DpdWCC3uJ9wgijqsKT0KHN1-ScOkHyyu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-006",
    name: "ビジネス向け文章修正",
    description: "ビジネス文書を自動的に校正し、プロフェッショナルな表現に修正。文書品質を向上させます。",
    features: ["文章校正", "表現改善", "ビジネス文書対応"],
    category: "文書作成",
    appUrl: "https://dify.triproadgo.com/workflow/Rnd0j0oobEWfmgbU",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
  {
    id: "agent-007",
    name: "【Leap社】営業準備用",
    description: "Leap社向けの営業活動に必要な情報を自動収集・整理。効果的な営業準備をサポートします。",
    features: ["情報収集", "営業資料準備", "顧客分析"],
    category: "営業支援",
    appUrl: "https://dify.triproadgo.com/workflow/N0BCriAtRVh8OVtj",
    storageUrl: "https://docs.google.com/spreadsheets/d/1R-3TbS4Q_4yQZy7QaSIP7i3WXHSKcrzpHH3wqwtSjJo/edit?gid=0#gid=0",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cat-n4alN4NuhtyeH2FqJ6TLYuqSrN2OsA.png",
  },
]

export const categories = [...new Set(agents.map((agent) => agent.category))]

