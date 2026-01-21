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
    </aside>
  );
};

export default Sidebar;
