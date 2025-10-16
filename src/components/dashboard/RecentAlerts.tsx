import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, Clock } from 'lucide-react'
const alerts = [
  {
    id: 1,
    title: 'Suspicious Login Attempt',
    description: 'Multiple failed login attempts from IP 192.168.1.100',
    severity: 'high',
    time: '2 minutes ago',
  },
  {
    id: 2,
    title: 'Malware Detected',
    description: 'Trojan.Win32.Agent found in user downloads folder',
    severity: 'critical',
    time: '5 minutes ago',
  },
  {
    id: 3,
    title: 'Unusual Network Traffic',
    description: 'High bandwidth usage detected from server-03',
    severity: 'medium',
    time: '12 minutes ago',
  },
  {
    id: 4,
    title: 'Failed Backup Process',
    description: 'Daily backup failed for database server',
    severity: 'low',
    time: '1 hour ago',
  },
]
export function RecentAlerts() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <AlertTriangle className="h-5 w-5" />
          <span>Recent Alerts</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-4 bg-slate-900 rounded-lg border border-slate-700">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-white">{alert.title}</h4>
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
              </div>
              <p className="text-sm text-slate-400 mb-2">{alert.description}</p>
              <div className="flex items-center space-x-1 text-xs text-slate-500">
                <Clock className="h-3 w-3" />
                <span>{alert.time}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}