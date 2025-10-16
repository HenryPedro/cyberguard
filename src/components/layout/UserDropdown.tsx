import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Settings, 
  LogOut, 
  UserCircle, 
  Shield,
  Bell,
  HelpCircle,
  Moon,
  Sun
} from 'lucide-react'
interface UserDropdownProps {
  onClose: () => void
}
export function UserDropdown({ onClose }: UserDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [onClose])
  const handleLogout = () => {
    // Aqui você pode adicionar a lógica de logout
    console.log('Logging out...')
    onClose()
  }
  const handleSwitchUser = () => {
    // Aqui você pode adicionar a lógica para trocar de usuário
    console.log('Switching user...')
    onClose()
  }
  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-12 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50"
    >
      {/* User Info */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
            <User className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-slate-400">admin@cyberguard.com</p>
            <p className="text-xs text-green-400">● Online</p>
          </div>
        </div>
      </div>
      {/* Menu Items */}
      <div className="py-2">
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <UserCircle className="h-4 w-4" />
          <span>Profile Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <Shield className="h-4 w-4" />
          <span>Security Settings</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <Bell className="h-4 w-4" />
          <span>Notification Preferences</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <Moon className="h-4 w-4" />
          <span>Dark Mode</span>
          <span className="ml-auto text-xs text-green-400">ON</span>
        </button>
      </div>
      <div className="border-t border-slate-700 py-2">
        <button 
          onClick={handleSwitchUser}
          className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
        >
          <User className="h-4 w-4" />
          <span>Switch User</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover:text-white transition-colors">
          <HelpCircle className="h-4 w-4" />
          <span>Help & Support</span>
        </button>
      </div>
      <div className="border-t border-slate-700 py-2">
        <button 
          onClick={handleLogout}
          className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}