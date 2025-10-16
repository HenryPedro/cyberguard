import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { 
  Scan, 
  FolderOpen, 
  FileText, 
  Link, 
  Archive, 
  Play, 
  Pause, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Upload
} from 'lucide-react'
const scanResults = [
  { name: 'system32/drivers/malware.exe', status: 'threat', severity: 'high' },
  { name: 'downloads/document.pdf', status: 'clean', severity: 'none' },
  { name: 'temp/suspicious.zip', status: 'quarantined', severity: 'medium' },
  { name: 'users/admin/desktop/file.txt', status: 'clean', severity: 'none' },
]
export function Scanner() {
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(0)
  const [scanPath, setScanPath] = useState('')
  const startScan = () => {
    if (!scanPath.trim()) {
      alert('Please enter a path or URL to scan')
      return
    }
    setIsScanning(true)
    setScanProgress(0)
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          return 100
        }
        return prev + 10
      })
    }, 500)
  }
  const stopScan = () => {
    setIsScanning(false)
    setScanProgress(0)
  }
  const handleQuickScan = (type: string) => {
    setScanPath(`Quick scan: ${type}`)
    startScan()
  }
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Security Scanner</h1>
          <p className="text-slate-400 mt-1">Scan files, folders, archives, and links for threats</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${isScanning ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
          <span className="text-sm text-slate-300">
            {isScanning ? 'Scanning in progress' : 'Scanner ready'}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <Scan className="h-5 w-5" />
                <span>Quick Scan Options</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  className="h-20 flex-col space-y-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-blue-500 transition-all" 
                  variant="outline"
                  onClick={() => handleQuickScan('Folder')}
                  disabled={isScanning}
                >
                  <FolderOpen className="h-8 w-8 text-blue-400" />
                  <span className="text-white">Scan Folder</span>
                </Button>
                <Button 
                  className="h-20 flex-col space-y-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-green-500 transition-all" 
                  variant="outline"
                  onClick={() => handleQuickScan('Files')}
                  disabled={isScanning}
                >
                  <FileText className="h-8 w-8 text-green-400" />
                  <span className="text-white">Scan Files</span>
                </Button>
                <Button 
                  className="h-20 flex-col space-y-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-purple-500 transition-all" 
                  variant="outline"
                  onClick={() => handleQuickScan('Archive')}
                  disabled={isScanning}
                >
                  <Archive className="h-8 w-8 text-purple-400" />
                  <span className="text-white">Scan Archive</span>
                </Button>
                <Button 
                  className="h-20 flex-col space-y-2 bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-orange-500 transition-all" 
                  variant="outline"
                  onClick={() => handleQuickScan('URL')}
                  disabled={isScanning}
                >
                  <Link className="h-8 w-8 text-orange-400" />
                  <span className="text-white">Scan URL</span>
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Custom Path or URL
                  </label>
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="Enter file path, folder path, or URL to scan..."
                      className="bg-slate-900 border-slate-700 text-white placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      value={scanPath}
                      onChange={(e) => setScanPath(e.target.value)}
                      disabled={isScanning}
                    />
                    <Button 
                      onClick={isScanning ? stopScan : startScan} 
                      className={`min-w-[120px] ${isScanning ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                    >
                      {isScanning ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Stop Scan
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Scan
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                {isScanning && (
                  <div className="space-y-3 p-4 bg-slate-900 rounded-lg border border-slate-700">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-300">Scanning progress</span>
                      <span className="text-white font-medium">{scanProgress}%</span>
                    </div>
                    <Progress value={scanProgress} className="h-3" />
                    <div className="text-sm text-slate-400">
                      Scanning: {scanPath}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span>Scan Statistics</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-900 rounded-lg">
                <span className="text-slate-300">Files Scanned</span>
                <span className="text-white font-medium text-lg">1,247</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                <span className="text-slate-300">Threats Found</span>
                <span className="text-red-400 font-medium text-lg">3</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                <span className="text-slate-300">Clean Files</span>
                <span className="text-green-400 font-medium text-lg">1,244</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <span className="text-slate-300">Quarantined</span>
                <span className="text-yellow-400 font-medium text-lg">2</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span>Scan Results</span>
            <Badge variant="outline" className="text-slate-400">
              {scanResults.length} items
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {scanResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-900 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                <div className="flex items-center space-x-3">
                  {result.status === 'threat' && <XCircle className="h-5 w-5 text-red-400" />}
                  {result.status === 'clean' && <CheckCircle className="h-5 w-5 text-green-400" />}
                  {result.status === 'quarantined' && <AlertTriangle className="h-5 w-5 text-yellow-400" />}
                  <div>
                    <span className="text-slate-300 font-mono text-sm block">{result.name}</span>
                    <span className="text-xs text-slate-500">Last modified: 2 hours ago</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant={
                      result.status === 'threat' ? 'destructive' : 
                      result.status === 'clean' ? 'secondary' : 'default'
                    }
                    className="capitalize"
                  >
                    {result.status}
                  </Badge>
                  {result.severity !== 'none' && (
                    <Badge variant="outline" className="text-xs">
                      {result.severity}
                    </Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}