"use client"

import { useState, useEffect } from "react"
import AgentCard from "./agent-card"
import { agents, categories } from "@/data/agents"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"

type SortOption = "name" | "category"

export default function AgentList() {
  const [sortBy, setSortBy] = useState<SortOption>("category")
  const [filterCategory, setFilterCategory] = useState<string>("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredAgents, setFilteredAgents] = useState([...agents])

  useEffect(() => {
    let result = [...agents]

    // Apply category filter
    if (filterCategory !== "all") {
      result = result.filter((agent) => agent.category === filterCategory)
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (agent) =>
          agent.name.toLowerCase().includes(term) ||
          agent.description.toLowerCase().includes(term) ||
          agent.features.some((feature) => feature.toLowerCase().includes(term)) ||
          agent.category.toLowerCase().includes(term),
      )
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name)
      } else {
        return a.category.localeCompare(b.category)
      }
    })

    setFilteredAgents(result)
  }, [sortBy, filterCategory, searchTerm])

  return (
    <div className="container mx-auto px-4">
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="エージェントを検索..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-white border-orange-200"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Filter size={18} className="text-orange-500" />
            <Select value={filterCategory} onValueChange={(value) => setFilterCategory(value)}>
              <SelectTrigger className="w-[180px] bg-white">
                <SelectValue placeholder="カテゴリー" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">すべて</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button
              variant={sortBy === "name" ? "default" : "outline"}
              onClick={() => setSortBy("name")}
              className={
                sortBy === "name"
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-white hover:bg-orange-50 text-orange-700 border-orange-200"
              }
            >
              名前順
            </Button>
            <Button
              variant={sortBy === "category" ? "default" : "outline"}
              onClick={() => setSortBy("category")}
              className={
                sortBy === "category"
                  ? "bg-orange-600 hover:bg-orange-700"
                  : "bg-white hover:bg-orange-50 text-orange-700 border-orange-200"
              }
            >
              カテゴリー順
            </Button>
          </div>
        </div>
      </div>

      {filteredAgents.length === 0 ? (
        <div className="text-center py-12 bg-orange-50 rounded-lg">
          <p className="text-lg text-gray-500">該当するエージェントが見つかりませんでした。</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchTerm("")
              setFilterCategory("all")
            }}
            className="text-orange-600 hover:text-orange-700"
          >
            すべてのエージェントを表示
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAgents.map((agent) => (
            <div key={agent.id} className="animate-fade-in">
              <AgentCard agent={agent} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

