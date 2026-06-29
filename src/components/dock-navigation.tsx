"use client"

import { Dock, DockIcon } from "@/components/ui/dock"
import { Briefcase, FolderOpen, Wrench, Mail } from "lucide-react"

export function DockNavigation() {
  return (
    <Dock iconSize={50} maxAdditionalSize={8}>
      <DockIcon
        href="#experience"
        name="Experience"
        icon={<Briefcase className="h-5 w-5" />}
      />
      <DockIcon
        href="#projects"
        name="Projects"
        icon={<FolderOpen className="h-5 w-5" />}
      />
      <DockIcon
        href="#skills"
        name="Skills"
        icon={<Wrench className="h-5 w-5" />}
      />
      <DockIcon
        href="#contact"
        name="Contact"
        icon={<Mail className="h-5 w-5" />}
      />
    </Dock>
  )
}