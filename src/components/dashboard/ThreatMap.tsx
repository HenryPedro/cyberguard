import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Globe } from 'lucide-react'
const threats = [
  { country: 'Russia', attacks: 45, severity: 'high', lat: 55.7558, lng: 37.6176 },
  { country: 'China', attacks: 32, severity: 'medium', lat: 39.9042, lng: 116.4074 },
  { country: 'North Korea', attacks: 18, severity: 'high', lat: 39.0392, lng: 125.7625 },
  { country: 'Iran', attacks: 12, severity: 'medium', lat: 35.6892, lng: 51.3890 },
  { country: 'Brazil', attacks: 8, severity: 'low', lat: -14.2350, lng: -51.9253 },
]
export function ThreatMap() {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-white">
          <Globe className="h-5 w-5" />
          <span>Global Threat Map</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative bg-slate-900 rounded-lg p-6 h-80 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <div className="relative z-10 space-y-4">
            {threats.map((threat, index) => (
              <div key={threat.country} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-red-400" />
                  <div>
                    <p className="font-medium text-white">{threat.country}</p>
                    <p className="text-sm text-slate-400">{threat.attacks} attacks detected</p>
                  </div>
                </div>
                <Badge 
                  variant={threat.severity === 'high' ? 'destructive' : threat.severity === 'medium' ? 'default' : 'secondary'}
                  className="capitalize"
                >
                  {threat.severity}
                </Badge>
              </div>
            ))}
          </div>
          <div className="absolute bottom-4 right-4">
            <div className="flex items-center space-x-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span>Live threat detection</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}