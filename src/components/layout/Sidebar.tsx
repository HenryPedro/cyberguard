import { NavLink } from 'react-router-dom'
import { 
  Shield, 
  BarChart3, 
  Scan, 
  AlertTriangle, 
  Users, 
  Settings,
  Activity,
  Lock
} from 'lucide-react'
import { cn } from '@/lib/utils'
const navigation = [
  { name: 'Dashboard', href: '/', icon: BarChart3 },
  { name: 'Security Scanner', href: '/scanner', icon: Scan },
  { name: 'Alerts & Threats', href: '/alerts', icon: AlertTriangle },
  { name: 'Analytics', href: '/analytics', icon: Activity },
  { name: 'Admin Panel', href: '/admin', icon: Users },
  { name: 'Settings', href: '/settings', icon: Settings },
]
export function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 min-h-screen">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CyberGuard</h1>
            <p className="text-xs text-slate-400">NOC Security Platform</p>
          </div>
        </div>
      </div>
      <nav className="px-4 space-y-2">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors',
                isActive
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              )
            }
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="absolute bottom-6 left-4 right-4">
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Lock className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">System Status</p>
              <p className="text-xs text-green-400">All Systems Operational</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}