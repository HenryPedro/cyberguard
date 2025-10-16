import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  Shield,
  AlertTriangle,
  Users,
  Globe
} from 'lucide-react'
const analyticsData = [
  { metric: 'Threats Blocked', value: '2,847', change: '+12%', trend: 'up' },
  { metric: 'Attack Attempts', value: '1,234', change: '-8%', trend: 'down' },
  { metric: 'Vulnerabilities', value: '45', change: '+3%', trend: 'up' },
  { metric: 'System Uptime', value: '99.9%', change: '+0.1%', trend: 'up' },
]
const topThreats = [
  { name: 'Trojan.Win32.Agent', count: 156, percentage: 35 },
  { name: 'Phishing Attempts', count: 89, percentage: 20 },
  { name: 'SQL Injection', count: 67, percentage: 15 },
  { name: 'XSS Attacks', count: 45, percentage: 10 },
  { name: 'Brute Force', count: 34, percentage: 8 },
]
const geographicData = [
  { country: 'United States', attacks: 234, percentage: 28 },
  { country: 'Russia', attacks: 189, percentage: 23 },
  { country: 'China', attacks: 156, percentage: 19 },
  { country: 'Brazil', attacks: 98, percentage: 12 },
  { country: 'Germany', attacks: 67, percentage: 8 },
]
export function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Security Analytics</h1>
        <p className="text-slate-400 mt-1">Comprehensive security insights and trends</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsData.map((item) => (
          <Card key={item.metric} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">{item.metric}</p>
                  <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                </div>
                <div className="flex items-center space-x-1">
                  {item.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-400" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400" />
                  )}
                  <span className={`text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                    {item.change}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <AlertTriangle className="h-5 w-5" />
              <span>Top Threats</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topThreats.map((threat, index) => (
                <div key={threat.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-red-400 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-white">{threat.name}</p>
                      <p className="text-sm text-slate-400">{threat.count} incidents</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-slate-400">
                    {threat.percentage}%
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Globe className="h-5 w-5" />
              <span>Geographic Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {geographicData.map((location) => (
                <div key={location.country} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{location.country}</p>
                    <p className="text-sm text-slate-400">{location.attacks} attacks</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-20 bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${location.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-slate-400 w-10">{location.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Activity className="h-5 w-5" />
              <span>Attack Timeline</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 bg-slate-900 rounded">
                <span className="text-sm text-slate-300">00:00 - 06:00</span>
                <span className="text-sm text-white">23 attacks</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-900 rounded">
                <span className="text-sm text-slate-300">06:00 - 12:00</span>
                <span className="text-sm text-white">45 attacks</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-red-500/20 rounded border border-red-500/30">
                <span className="text-sm text-slate-300">12:00 - 18:00</span>
                <span className="text-sm text-red-400">89 attacks</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-900 rounded">
                <span className="text-sm text-slate-300">18:00 - 24:00</span>
                <span className="text-sm text-white">34 attacks</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Shield className="h-5 w-5" />
              <span>Defense Effectiveness</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">Firewall</span>
                <span className="text-green-400">98.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Antivirus</span>
                <span className="text-green-400">97.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">IDS/IPS</span>
                <span className="text-green-400">95.8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Email Security</span>
                <span className="text-yellow-400">89.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-white">
              <Users className="h-5 w-5" />
              <span>User Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-300">Active Sessions</span>
                <span className="text-white">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Failed Logins</span>
                <span className="text-red-400">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Privileged Access</span>
                <span className="text-yellow-400">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Suspicious Activity</span>
                <span className="text-red-400">5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}