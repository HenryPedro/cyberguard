import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Scanner } from './pages/Scanner'
import { Alerts } from './pages/Alerts'
import { Analytics } from './pages/Analytics'
import { AdminPanel } from './pages/AdminPanel'
import { Settings } from './pages/Settings'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <main className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/scanner" element={<Scanner />} />
                <Route path="/alerts" element={<Alerts />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App