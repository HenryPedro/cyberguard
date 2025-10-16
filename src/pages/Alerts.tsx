import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { 
  AlertTriangle, 
  Shield, 
  Clock, 
  Filter, 
  Search,
  Eye,
  Archive,
  Trash2
} from 'lucide-react'
const alerts = [
  {
    id: 1,
    title: 'Critical: Advanced Persistent Threat Detected',
    description: 'Sophisticated malware attempting to establish persistence on server-01',
    severity: 'critical',
    category: 'Malware',
    time: '2 minutes ago',
    source: '192.168.1.45',
    status: 'active'
  },
  {
    id: 2,
    title: 'High: Brute Force Attack in Progress',
    description: 'Multiple failed SSH login attempts from external IP address',
    severity: 'high',
    category: 'Authentication',
    time: '5 minutes ago',
    source: '203.0.113.42',
    status: 'investigating'
  },
  {
    id: 3,
    title: 'Medium: Suspicious Network Traffic',
    description: 'Unusual data exfiltration patterns detected on network segment',
    severity: 'medium',
    category: 'Network',
    time: '15 minutes ago',
    source: '10.0.0.23',
    status: 'resolved'
  },
  {
    id: 4,
    title: 'Low: Configuration Change Detected',
    description: 'Firewall rules modified outside of maintenance window',
    severity: 'low',
    category: 'Configuration',
    time: '1 hour ago',
    source: 'admin-console',
    status: 'acknowledged'
  }
]
export function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Alerts & Threats</h1>
          <p className="text-slate-400 mt-1">Monitor and manage security incidents</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">3 Active Threats</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Search alerts..."
            className="pl-10 bg-slate-800 border-slate-700"
          />
        </div>
        <Button variant="outline" className="flex items-center space-x-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-red-500/10 border-red-500/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <div>
                <p className="text-2xl font-bold text-white">2</p>
                <p className="text-sm text-red-400">Critical</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-orange-500/10 border-orange-500/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-orange-400" />
              <div>
                <p className="text-2xl font-bold text-white">5</p>
                <p className="text-sm text-orange-400">High</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-yellow-500/10 border-yellow-500/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-white">12</p>
                <p className="text-sm text-yellow-400">Medium</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-blue-500/10 border-blue-500/20">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-sm text-blue-400">Low</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div key={alert.id} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-white">{alert.title}</h3>
                      <Badge 
                        variant={
                          alert.severity === 'critical' ? 'destructive' : 
                          alert.severity === 'high' ? 'destructive' :
                          alert.severity === 'medium' ? 'default' : 'secondary'
                        }
                        className="capitalize"
                      >
                        {alert.severity}
                      </Badge>
                      <Badge variant="outline" className="text-slate-400">
                        {alert.category}
                      </Badge>
                    </div>
                    <p className="text-slate-400 mb-2">{alert.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>Source: {alert.source}</span>
                      <span>•</span>
                      <span>{alert.time}</span>
                      <span>•</span>
                      <span className="capitalize">Status: {alert.status}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Button size="sm" variant="ghost">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Archive className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}