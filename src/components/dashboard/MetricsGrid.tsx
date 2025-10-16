import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, AlertTriangle, Activity, Users, TrendingUp, TrendingDown } from 'lucide-react'
const metrics = [
  {
    title: 'Active Threats',
    value: '23',
    change: '+12%',
    trend: 'up',
    icon: AlertTriangle,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20',
  },
  {
    title: 'Blocked Attacks',
    value: '1,247',
    change: '+8%',
    trend: 'up',
    icon: Shield,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20',
  },
  {
    title: 'System Uptime',
    value: '99.9%',
    change: '+0.1%',
    trend: 'up',
    icon: Activity,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
  },
  {
    title: 'Active Users',
    value: '156',
    change: '-2%',
    trend: 'down',
    icon: Users,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
  },
]
export function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card key={metric.title} className={`bg-slate-800 border-slate-700 ${metric.borderColor} hover:border-opacity-50 transition-all duration-200`}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">
              {metric.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor} border ${metric.borderColor}`}>
              <metric.icon className={`h-4 w-4 ${metric.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white mb-2">{metric.value}</div>
            <div className="flex items-center space-x-1 text-xs">
              {metric.trend === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-400" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-400" />
              )}
              <span className={metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}>
                {metric.change}
              </span>
              <span className="text-slate-400">from last hour</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}