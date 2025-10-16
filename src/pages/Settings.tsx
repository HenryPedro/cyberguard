import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Settings as SettingsIcon, 
  Bell, 
  Shield, 
  Database, 
  Mail, 
  Globe,
  Save,
  RefreshCw
} from 'lucide-react'
export function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">System Settings</h1>
        <p className="text-slate-400 mt-1">Configure system preferences and security options</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Bell className="h-5 w-5" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Email Notifications</label>
              <Input 
                type="email" 
                placeholder="admin@company.com"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Alert Threshold</label>
              <select className="w-full p-2 bg-slate-900 border border-slate-700 rounded-md text-white">
                <option>Critical and High</option>
                <option>All Severities</option>
                <option>Critical Only</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Real-time Alerts</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Daily Reports</span>
              <Badge variant="default">Enabled</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Shield className="h-5 w-5" />
              <span>Security Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Session Timeout (hours)</label>
              <Input 
                type="number" 
                defaultValue="4"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Password Policy</label>
              <select className="w-full p-2 bg-slate-900 border border-slate-700 rounded-md text-white">
                <option>Strong (12+ chars, mixed case, numbers, symbols)</option>
                <option>Medium (8+ chars, mixed case, numbers)</option>
                <option>Basic (6+ chars)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Two-Factor Authentication</span>
              <Badge variant="default">Required</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">IP Whitelist</span>
              <Badge variant="secondary">Optional</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Database className="h-5 w-5" />
              <span>Data Management</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Log Retention (days)</label>
              <Input 
                type="number" 
                defaultValue="90"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Backup Frequency</label>
              <select className="w-full p-2 bg-slate-900 border border-slate-700 rounded-md text-white">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Auto-cleanup</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Data Encryption</span>
              <Badge variant="default">AES-256</Badge>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Globe className="h-5 w-5" />
              <span>Network Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">API Endpoint</label>
              <Input 
                placeholder="https://api.cyberguard.com"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-300">Proxy Server</label>
              <Input 
                placeholder="proxy.company.com:8080"
                className="bg-slate-900 border-slate-700"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">SSL/TLS</span>
              <Badge variant="default">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-300">Rate Limiting</span>
              <Badge variant="default">1000/hour</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-white">
            <SettingsIcon className="h-5 w-5" />
            <span>System Maintenance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-900 rounded-lg text-center">
              <Database className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="font-medium text-white mb-1">Database Optimization</h3>
              <p className="text-sm text-slate-400 mb-3">Last run: 2 days ago</p>
              <Button size="sm" variant="outline" className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Run Now
              </Button>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg text-center">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="font-medium text-white mb-1">Security Scan</h3>
              <p className="text-sm text-slate-400 mb-3">Last run: 6 hours ago</p>
              <Button size="sm" variant="outline" className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Run Now
              </Button>
            </div>
            <div className="p-4 bg-slate-900 rounded-lg text-center">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="font-medium text-white mb-1">System Backup</h3>
              <p className="text-sm text-slate-400 mb-3">Last run: 12 hours ago</p>
              <Button size="sm" variant="outline" className="w-full">
                <RefreshCw className="h-4 w-4 mr-2" />
                Run Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-end space-x-4">
        <Button variant="outline">Reset to Defaults</Button>
        <Button className="flex items-center space-x-2">
          <Save className="h-4 w-4" />
          <span>Save Changes</span>
        </Button>
      </div>
    </div>
  )
}