import Layout from "@/components/layout"
import HeroSection from "@/components/hero-section"
import AgentList from "@/components/agent-list"
import AboutSection from "@/components/about-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <Layout>
      <HeroSection />

      <section id="agents" className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-orange-800">AIエージェント一覧</h2>
            <p className="text-lg text-orange-900/80 max-w-3xl mx-auto">
              あなたの業務をサポートする様々なAIエージェントをご紹介します。 目的に合わせてお選びください。
            </p>
          </div>
          <AgentList />
        </div>
      </section>

      <AboutSection />
      <BenefitsSection />
      <ContactSection />
    </Layout>
  )
}

