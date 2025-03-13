import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Agent } from "@/data/agents"
import AgentActionButtons from "./agent-action-buttons"

interface AgentCardProps {
  agent: Agent
}

export default function AgentCard({ agent }: AgentCardProps) {
  return (
    <Card className="overflow-hidden bg-white hover:shadow-lg transition-all duration-300 hover:scale-[1.02] h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-orange-800">{agent.name}</h3>
          <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
            {agent.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="mb-4 flex justify-center">
          <div className="relative w-32 h-32">
            <Image
              src={agent.image || "/placeholder.svg?height=200&width=200"}
              alt={agent.name}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {agent.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="bg-orange-50 text-orange-700 border-orange-100">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col pt-4 pb-4 border-t border-orange-100">
        <div className="w-full relative">
          {agent.appUrl && <AgentActionButtons appUrl={agent.appUrl} storageUrl={agent.storageUrl} name={agent.name} />}
          {!agent.appUrl && <span className="text-sm text-gray-500">近日公開予定</span>}
        </div>
      </CardFooter>
    </Card>
  )
}

