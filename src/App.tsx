import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'

function App() {

  return (
    <div className='min-h-screen flex flex-col bg-slate-50'>
      <Navbar />
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-8'>
          <section className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-between mb-8'>
              <h1 className='text-3xl font-bold text-slate-800 tracking-tight'>Dashboard Overview</h1>
              <button className='bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95'>
                + Add Expense
              </button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
              {[1, 2, 3].map((i) => (
                <div key={i} className='bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow'>
                  <div className='h-2 w-12 bg-indigo-500 rounded-full mb-4'></div>
                  <p className='text-slate-500 text-sm font-medium mb-1'>Total Balance</p>
                  <h3 className='text-2xl font-bold text-slate-900'>$12,450.00</h3>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
