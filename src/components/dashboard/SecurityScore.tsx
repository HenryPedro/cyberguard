import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Shield, TrendingUp } from 'lucide-react'
export function SecurityScore() {
  const score = 87
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Shield className="h-5 w-5" />
          <span>Security Score</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-4xl font-bold text-white mb-2">{score}/100</div>
          <Progress value={score} className="h-3" />
          <p className="text-sm text-slate-400 mt-2">Excellent security posture</p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Firewall Status</span>
            <span className="text-sm text-green-400">Active</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Antivirus</span>
            <span className="text-sm text-green-400">Updated</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Intrusion Detection</span>
            <span className="text-sm text-green-400">Monitoring</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">SSL Certificates</span>
            <span className="text-sm text-yellow-400">Expiring Soon</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-sm text-green-400">
          <TrendingUp className="h-4 w-4" />
          <span>+5 points this week</span>
        </div>
      </CardContent>
    </Card>
  )
}