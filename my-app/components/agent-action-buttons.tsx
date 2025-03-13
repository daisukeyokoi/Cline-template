"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Play, Database } from "lucide-react"

interface AgentActionButtonsProps {
  appUrl: string
  storageUrl?: string
  name: string
}

export default function AgentActionButtons({ appUrl, storageUrl, name }: AgentActionButtonsProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="default"
                className="flex-1 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 rounded-md py-5"
                asChild
              >
                <Link
                  href={appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Play size={18} className="mr-1" />
                  アプリ
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Difyアプリを開く</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {storageUrl && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  className="flex-1 border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 hover:bg-gradient-to-br hover:from-orange-100 hover:to-orange-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-md py-5"
                  asChild
                >
                  <Link
                    href={storageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Database size={18} className="mr-1" />
                    保存先
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>データの保存先を開く</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  )
}

