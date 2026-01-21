import Sidebar from '../components/layout/Sidebar'

function Dashboard() {
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
            <section className='max-w-7xl mx-auto'>
              <div className='flex items-center justify-between mb-8'>
                <h1 className='text-3xl font-bold text-white tracking-tight'>Dashboard Overview</h1>
                <button className='bg-white text-indigo-600 px-6 py-2.5 rounded-xl font-semibold hover:bg-white/90 transition-all shadow-md active:scale-95'>
                  + Add Expense
                </button>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                {[1, 2, 3].map((i) => (
                  <div key={i} className='bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-shadow'>
                    <div className='h-2 w-12 bg-white/50 rounded-full mb-4'></div>
                    <p className='text-white/80 text-sm font-medium mb-1'>Total Balance</p>
                    <h3 className='text-2xl font-bold text-white'>$12,450.00</h3>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
