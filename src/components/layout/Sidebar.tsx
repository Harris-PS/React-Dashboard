const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Expenses', icon: '💸' },
    { name: 'Wallets', icon: '👛' },
    { name: 'Statistics', icon: '📈' },
    { name: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex sticky top-20 h-[calc(100vh-80px)]">
      <div className="p-6 flex-1">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-slate-50 hover:text-indigo-600 transition-all duration-200 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="p-6 border-t border-slate-100">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-4 text-white shadow-lg shadow-indigo-200">
          <p className="text-sm font-medium opacity-80">Pro Plan</p>
          <p className="font-bold mb-3">Upgrade for more insights</p>
          <button className="w-full bg-white/20 hover:bg-white/30 py-2 rounded-lg text-sm font-semibold transition-colors backdrop-blur-md">
            Go Pro
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
