import { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  X,
  CheckCircle,
  Eye,
  Trash2
} from 'lucide-react'
interface NotificationDropdownProps {
  onClose: () => void
}
const notifications = [
  {
    id: 1,
    title: 'Critical Threat Detected',
    message: 'Advanced malware found on server-01',
    type: 'critical',
    time: '2 min ago',
    read: false
  },
  {
    id: 2,
    title: 'Login Attempt Failed',
    message: 'Multiple failed attempts from IP 192.168.1.100',
    type: 'warning',
    time: '5 min ago',
    read: false
  },
  {
    id: 3,
    title: 'System Update Available',
    message: 'Security patch v2.1.1 is ready for installation',
    type: 'info',
    time: '1 hour ago',
    read: true
  },
  {
    id: 4,
    title: 'Backup Completed',
    message: 'Daily system backup finished successfully',
    type: 'success',
    time: '2 hours ago',
    read: true
  }
]
export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
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
  const getIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return <AlertTriangle className="h-4 w-4 text-red-400" />
      case 'warning':
        return <Shield className="h-4 w-4 text-yellow-400" />
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-400" />
      default:
        return <Clock className="h-4 w-4 text-blue-400" />
    }
  }
  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-12 w-96 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-50"
    >
      <div className="flex items-center justify-between p-4 border-b border-slate-700">
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
        <Button variant="ghost" size="sm" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className={`p-4 border-b border-slate-700 hover:bg-slate-700/50 transition-colors ${
              !notification.read ? 'bg-slate-700/20' : ''
            }`}
          >
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 mt-1">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-white truncate">
                    {notification.title}
                  </p>
                  {!notification.read && (
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 ml-2"></div>
                  )}
                </div>
                <p className="text-sm text-slate-400 mb-2">{notification.message}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{notification.time}</span>
                  <div className="flex space-x-1">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Eye className="h-3 w-3" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-slate-700">
        <Button variant="outline" className="w-full text-sm">
          View All Notifications
        </Button>
      </div>
    </div>
  )
}