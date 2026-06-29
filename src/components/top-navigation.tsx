"use client"

import { NavBar } from "@/components/ui/tubelight-navbar"
import { Briefcase, GraduationCap, FolderOpen, Wrench } from "lucide-react"

export function TopNavigation() {
  const navItems = [
    { name: "Experience", url: "#experience", icon: Briefcase },
    { name: "Education", url: "#education", icon: GraduationCap },
    { name: "Projects", url: "#projects", icon: FolderOpen },
    { name: "Skills", url: "#skills", icon: Wrench },
  ]

  return <NavBar items={navItems} />
}