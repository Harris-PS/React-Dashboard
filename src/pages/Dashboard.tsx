import { useState, useEffect } from 'react'
import Sidebar from '../components/layout/Sidebar'
import StatsCard from '../components/dashboard/StatsCard'
import ActivityPanel from '../components/dashboard/ActivityPanel'
import NotificationsPanel from '../components/dashboard/NotificationsPanel'
import Chart from '../components/dashboard/Chart'
import RecentActivity from '../components/dashboard/RecentActivity'

interface DashboardStats {
  users: number;
  revenue: number;
  tasks: number;
}

function Dashboard() {
  // State for dashboard statistics with real-time updates
  const [stats, setStats] = useState<DashboardStats>({
    users: 1245,
    revenue: 12450,
    tasks: 48
  });

  // Sample data for revenue chart (last 7 days)
  const revenueData = [
    { name: 'Mon', revenue: 2400, expenses: 1800 },
    { name: 'Tue', revenue: 3200, expenses: 2200 },
    { name: 'Wed', revenue: 2800, expenses: 2000 },
    { name: 'Thu', revenue: 3800, expenses: 2600 },
    { name: 'Fri', revenue: 4200, expenses: 3000 },
    { name: 'Sat', revenue: 3600, expenses: 2400 },
    { name: 'Sun', revenue: 4000, expenses: 2800 },
  ];

  // Sample data for tasks chart (last 7 days)
  const tasksData = [
    { name: 'Mon', tasks: 12 },
    { name: 'Tue', tasks: 19 },
    { name: 'Wed', tasks: 15 },
    { name: 'Thu', tasks: 22 },
    { name: 'Fri', tasks: 18 },
    { name: 'Sat', tasks: 25 },
    { name: 'Sun', tasks: 20 },
  ];

  // Simulate real-time updates (like WebSocket data)
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prevStats => ({
        users: prevStats.users + Math.floor(Math.random() * 3), // Slow increment
        revenue: prevStats.revenue + Math.floor(Math.random() * 100),
        tasks: Math.floor(Math.random() * 60) + 40, // Fluctuate between 40-100
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='relative min-h-screen w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className='relative z-10 max-w-[1440px] mx-auto flex flex-col'>
        <div className='flex flex-1'>
          <Sidebar />
          <main className='flex-1 p-8'>
            <section className='max-w-7xl mx-auto space-y-8'>
              {/* Header */}
              <div className='flex items-center justify-between'>
                <div>
                  <h1 className='text-3xl font-bold text-white tracking-tight'>Dashboard Overview</h1>
                  <p className='text-white/70 mt-1'>Welcome back! Here's what's happening today.</p>
                </div>
                <button className='bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-md active:scale-95'>
                  + Add Expense
                </button>
              </div>

              {/* Stats Cards Grid */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                <StatsCard
                  title="Total Users"
                  value={stats.users.toLocaleString()}
                  color="indigo"
                  trend={{ value: 12, isPositive: true }}
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  }
                />

                <StatsCard
                  title="Total Revenue"
                  value={`₹${stats.revenue.toLocaleString()}`}
                  color="green"
                  trend={{ value: 8, isPositive: true }}
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                />

                <StatsCard
                  title="Completed Tasks"
                  value={stats.tasks}
                  color="purple"
                  trend={{ value: 3, isPositive: false }}
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  }
                />
              </div>

              {/* Charts Grid */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <Chart
                  type="line"
                  title="Revenue Over Time (Last 7 Days)"
                  data={revenueData}
                  dataKey="revenue"
                  dataKey2="expenses"
                  color="#10b981"
                  color2="#ef4444"
                />

                <Chart
                  type="bar"
                  title="Tasks Completed Per Day"
                  data={tasksData}
                  dataKey="tasks"
                  color="#8b5cf6"
                />
              </div>

              {/* Recent Activity */}
              <RecentActivity />

              {/* Activity and Notifications Grid */}
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <ActivityPanel />
                <NotificationsPanel />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
