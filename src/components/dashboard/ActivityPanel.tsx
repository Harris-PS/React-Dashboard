interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  type: 'expense' | 'income' | 'task' | 'alert';
}

const ActivityPanel = () => {
  // Mock recent activities
  const activities: Activity[] = [
    { id: 1, user: 'John Doe', action: 'Added new expense: Office Supplies', time: '2 min ago', type: 'expense' },
    { id: 2, user: 'Sarah Smith', action: 'Completed task: Monthly Report', time: '15 min ago', type: 'task' },
    { id: 3, user: 'Mike Johnson', action: 'Received payment: $2,500', time: '1 hour ago', type: 'income' },
    { id: 4, user: 'Emily Davis', action: 'Updated budget limit', time: '2 hours ago', type: 'alert' },
    { id: 5, user: 'David Wilson', action: 'Added new expense: Travel', time: '3 hours ago', type: 'expense' },
  ];

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'expense':
        return (
          <div className="p-2 bg-red-500/20 rounded-lg">
            <svg className="w-5 h-5 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        );
      case 'income':
        return (
          <div className="p-2 bg-green-500/20 rounded-lg">
            <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'task':
        return (
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      case 'alert':
        return (
          <div className="p-2 bg-yellow-500/20 rounded-lg">
            <svg className="w-5 h-5 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Recent Activity</h2>
        <button className="text-white/70 hover:text-white text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
            {getActivityIcon(activity.type)}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium">{activity.user}</p>
              <p className="text-white/60 text-sm truncate">{activity.action}</p>
            </div>
            <span className="text-white/50 text-xs whitespace-nowrap">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPanel;
