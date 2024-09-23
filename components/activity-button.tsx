'use client'

import { LucideIcon, Home, Search, Settings } from 'lucide-react'

interface ActivityButtonProps {
  icon: 'home' | 'search' | 'settings'
  active?: boolean
}

const iconMap: Record<ActivityButtonProps['icon'], LucideIcon> = {
  home: Home,
  search: Search,
  settings: Settings,
}

function ActivityButtonComponent({ icon, active = false }: ActivityButtonProps) {
  const Icon = iconMap[icon]
  return (
    <button
      className={`w-full p-4 transition-colors duration-200 ${
        active ? 'bg-blue-100 text-blue-600' : 'text-gray-500 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-6 h-6 mx-auto" />
    </button>
  )
}

export default ActivityButtonComponent;