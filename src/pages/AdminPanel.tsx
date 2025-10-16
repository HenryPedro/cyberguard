import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Settings, 
  Shield, 
  Key, 
  Plus, 
  Edit, 
  Trash2, 
  Search,
  UserCheck,
  UserX,
  Crown
} from 'lucide-react'
const users = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john.smith@company.com',
    role: 'Administrator',
    status: 'active',
    lastLogin: '2 hours ago',
    permissions: ['full_access', 'user_management', 'system_config']
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    role: 'Security Analyst',
    status: 'active',
    lastLogin: '30 minutes ago',
    permissions: ['view_alerts', 'manage_threats', 'generate_reports']
  },
  {
    id: 3,
    name: 'Mike Wilson',
    email: 'mike.wilson@company.com',
    role: 'SOC Operator',
    status: 'inactive',
    lastLogin: '2 days ago',
    permissions: ['view_dashboard', 'acknowledge_alerts']
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@company.com',
    role: 'Auditor',
    status: 'active',
    lastLogin: '1 hour ago',
    permissions: ['view_logs', 'generate_reports', 'compliance_check']
  }
]
const systemSettings = [
  { name: 'Auto-scan enabled', value: 'On', status: 'active' },
  { name: 'Real-time monitoring', value: 'On', status: 'active' },
  { name: 'Email notifications', value: 'On', status: 'active' },
  { name: 'Backup retention', value: '30 days', status: 'active' },
  { name: 'Session timeout', value: '4 hours', status: 'active' },
]
export function AdminPanel() {
  const [activeTab, setActiveTab] = useState('users')
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Administration Panel</h1>
        <p className="text-slate-400 mt-1">Manage users, permissions, and system settings</p>
      </div>
      <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === 'users' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('users')}
          className="flex items-center space-x-2"
        >
          <Users className="h-4 w-4" />
          <span>User Management</span>
        </Button>
        <Button
          variant={activeTab === 'permissions' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('permissions')}
          className="flex items-center space-x-2"
        >
          <Key className="h-4 w-4" />
          <span>Permissions</span>
        </Button>
        <Button
          variant={activeTab === 'settings' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('settings')}
          className="flex items-center space-x-2"
        >
          <Settings className="h-4 w-4" />
          <span>System Settings</span>
        </Button>
      </div>
      {activeTab === 'users' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search users..."
                className="pl-10 w-80 bg-slate-800 border-slate-700"
              />
            </div>
            <Button className="flex items-center space-x-2">
              <Plus className="h-4 w-4" />
              <span>Add User</span>
            </Button>
          </div>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">User Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium text-white">{user.name}</h3>
                          {user.role === 'Administrator' && <Crown className="h-4 w-4 text-yellow-400" />}
                        </div>
                        <p className="text-sm text-slate-400">{user.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {user.role}
                          </Badge>
                          <Badge 
                            variant={user.status === 'active' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-slate-400">Last login: {user.lastLogin}</span>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost">
                        {user.status === 'active' ? <UserX className="h-4 w-4" /> : <UserCheck className="h-4 w-4" />}
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'permissions' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Role Permissions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Administrator</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Full Access</Badge>
                    <Badge variant="default">User Management</Badge>
                    <Badge variant="default">System Config</Badge>
                    <Badge variant="default">Security Settings</Badge>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Security Analyst</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">View Alerts</Badge>
                    <Badge variant="secondary">Manage Threats</Badge>
                    <Badge variant="secondary">Generate Reports</Badge>
                    <Badge variant="secondary">Incident Response</Badge>
                  </div>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                  <h4 className="font-medium text-white mb-2">SOC Operator</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">View Dashboard</Badge>
                    <Badge variant="outline">Acknowledge Alerts</Badge>
                    <Badge variant="outline">Basic Reports</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Permission Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-2 text-sm font-medium text-slate-300 pb-2 border-b border-slate-700">
                  <span>Permission</span>
                  <span>Admin</span>
                  <span>Analyst</span>
                  <span>Operator</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <span className="text-slate-400">Dashboard Access</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">✓</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <span className="text-slate-400">Manage Users</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-red-400">✗</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <span className="text-slate-400">System Settings</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-red-400">✗</span>
                  <span className="text-red-400">✗</span>
                </div>
                <div className="grid grid-cols-4 gap-2 text-sm">
                  <span className="text-slate-400">Threat Management</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-green-400">✓</span>
                  <span className="text-yellow-400">View Only</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      {activeTab === 'settings' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Shield className="h-5 w-5" />
                <span>Security Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemSettings.map((setting, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-900 rounded-lg">
                    <div>
                      <p className="font-medium text-white">{setting.name}</p>
                      <p className="text-sm text-slate-400">{setting.value}</p>
                    </div>
                    <Badge variant={setting.status === 'active' ? 'default' : 'secondary'}>
                      {setting.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">System Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-300">Version</span>
                  <span className="text-white">CyberGuard v2.1.0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">License</span>
                  <span className="text-green-400">Enterprise</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Database</span>
                  <span className="text-white">PostgreSQL 14.2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Last Update</span>
                  <span className="text-white">2024-01-15</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Uptime</span>
                  <span className="text-white">15 days, 4 hours</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}