import React from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    </div>
  )
}

export default App