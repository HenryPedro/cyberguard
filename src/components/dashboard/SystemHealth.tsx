import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Server, Cpu, HardDrive, Wifi } from 'lucide-react'
const systemMetrics = [
  { name: 'CPU Usage', value: 45, icon: Cpu, color: 'text-blue-400' },
  { name: 'Memory Usage', value: 67, icon: Server, color: 'text-green-400' },
  { name: 'Disk Usage', value: 23, icon: HardDrive, color: 'text-purple-400' },
  { name: 'Network Load', value: 89, icon: Wifi, color: 'text-orange-400' },
]
export function SystemHealth() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Server className="h-5 w-5" />
          <span>System Health</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {systemMetrics.map((metric) => (
            <div key={metric.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <metric.icon className={`h-4 w-4 ${metric.color}`} />
                  <span className="text-sm text-slate-300">{metric.name}</span>
                </div>
                <span className="text-sm font-medium text-white">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          ))}
        </div>
        <div className="mt-6 p-3 bg-slate-900 rounded-lg border border-slate-700">
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-300">Overall Health</span>
            <span className="text-sm font-medium text-green-400">Excellent</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}