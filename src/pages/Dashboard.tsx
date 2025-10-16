import { MetricsGrid } from '@/components/dashboard/MetricsGrid'
import { ThreatMap } from '@/components/dashboard/ThreatMap'
import { RecentAlerts } from '@/components/dashboard/RecentAlerts'
import { SystemHealth } from '@/components/dashboard/SystemHealth'
import { SecurityScore } from '@/components/dashboard/SecurityScore'
export function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Security Operations Center</h1>
          <p className="text-slate-400 mt-1">Real-time monitoring and threat detection</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-slate-300">Live Monitoring Active</span>
        </div>
      </div>
      <MetricsGrid />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ThreatMap />
        </div>
        <div>
          <SecurityScore />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentAlerts />
        <SystemHealth />
      </div>
    </div>
  )
}