import useHotkey from "@/lib/hooks/use-hotkey"
import {
  IconBrandGithub,
  IconBrandX,
  IconHelpCircle,
  IconQuestionMark,
  IconBrandLinkedin // Import LinkedIn icon
} from "@tabler/icons-react"
import Link from "next/link"
import { FC, useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "../ui/dropdown-menu"
import { Announcements } from "../utility/announcements"

interface ChatHelpProps {}

export const ChatHelp: FC<ChatHelpProps> = ({}) => {
  useHotkey("/", () => setIsOpen(prevState => !prevState))

  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <IconQuestionMark className="bg-primary text-secondary size-[24px] cursor-pointer rounded-full p-0.5 opacity-60 hover:opacity-50 lg:size-[30px] lg:p-1" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link
              className="cursor-pointer hover:opacity-50"
              href="https://x.com/AfCFTA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandX size={24} /> {/* Adjust size */}
            </Link>
            <Link
              className="cursor-pointer hover:opacity-50"
              href="https://linkedin.com/company/afcfta-secretariat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={24} /> {/* Add LinkedIn icon */}
            </Link>
          </div>

          <div className="flex items-center space-x-2">
            <Announcements />

            <Link
              className="cursor-pointer hover:opacity-50"
              href="/help"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconHelpCircle size={24} /> {/* Adjust size */}
            </Link>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="flex justify-between">
          <div>Show Help</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              /
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex w-[300px] justify-between">
          <div>New Chat</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              O
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Toggle Files</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              F
            </div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex justify-between">
          <div>Open Settings</div>
          <div className="flex opacity-60">
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              ⌘
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              Shift
            </div>
            <div className="min-w-[30px] rounded border-[1px] p-1 text-center">
              I
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
