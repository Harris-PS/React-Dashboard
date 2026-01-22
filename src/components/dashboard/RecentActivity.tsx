import { useState, useEffect, useCallback } from 'react';

// useEffectEvent is experimental - using a polyfill approach
// In React 19 experimental: import { useEffectEvent } from 'react'
function useEffectEvent<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useCallback(fn, []);
  return ref as T;
}

interface Activity {
  id: number;
  action: string;
  timestamp: string;
  user?: {
    name: string;
    avatar?: string;
  };
  type: 'task' | 'profile' | 'login' | 'expense' | 'other';
}

const RecentActivity = () => {
  // State for activities
  const [activities, setActivities] = useState<Activity[]>([
    {
      id: 1,
      action: 'You added a task',
      timestamp: '2 min ago',
      user: { name: 'You', avatar: '👤' },
      type: 'task'
    },
    {
      id: 2,
      action: 'Profile updated',
      timestamp: '15 min ago',
      user: { name: 'You', avatar: '👤' },
      type: 'profile'
    },
    {
      id: 3,
      action: 'New login detected',
      timestamp: '1 hour ago',
      user: { name: 'You', avatar: '👤' },
      type: 'login'
    },
    {
      id: 4,
      action: 'Added expense: Office Supplies',
      timestamp: '2 hours ago',
      user: { name: 'You', avatar: '👤' },
      type: 'expense'
    },
    {
      id: 5,
      action: 'Completed task: Monthly Report',
      timestamp: '5 hours ago',
      user: { name: 'You', avatar: '👤' },
      type: 'task'
    },
  ]);

  // useEffectEvent - handles activity updates without re-creating the effect
  const onActivityUpdate = useEffectEvent((newActivity: Activity) => {
    setActivities(prev => [newActivity, ...prev.slice(0, 9)]); // Keep last 10
  });

  // Simulate real-time activity updates (like WebSocket events)
  useEffect(() => {
    const activityTypes: Activity['type'][] = ['task', 'profile', 'login', 'expense'];
    const activityMessages = [
      'You completed a task',
      'You added a new expense',
      'System backup completed',
      'New comment received',
      'Task priority updated',
      'Budget limit adjusted',
      'Profile photo changed',
      'Password updated',
      'Two-factor authentication enabled',
    ];

    const interval = setInterval(() => {
      const randomType = activityTypes[Math.floor(Math.random() * activityTypes.length)];
      const randomMessage = activityMessages[Math.floor(Math.random() * activityMessages.length)];

      const newActivity: Activity = {
        id: Date.now(),
        action: randomMessage,
        timestamp: 'Just now',
        user: { name: 'You', avatar: '👤' },
        type: randomType,
      };

      // Using useEffectEvent - no dependency array issues!
      onActivityUpdate(newActivity);
    }, 10000); // New activity every 10 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array - onActivityUpdate is stable via useEffectEvent

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'task':
        return (
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
        );
      case 'profile':
        return (
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
        );
      case 'login':
        return (
          <div className="p-2 bg-green-500/20 rounded-lg">
            <svg className="w-4 h-4 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
          </div>
        );
      case 'expense':
        return (
          <div className="p-2 bg-red-500/20 rounded-lg">
            <svg className="w-4 h-4 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="p-2 bg-gray-500/20 rounded-lg">
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <span>🔔</span>
          Recent Activity
          <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">Live</span>
        </h2>
        <button className="text-white/70 hover:text-white text-sm font-medium transition-colors">
          View All
        </button>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-all cursor-pointer group animate-fadeIn"
          >
            {/* Avatar */}
            {activity.user?.avatar && (
              <div className="flex-shrink-0 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-lg">
                {activity.user.avatar}
              </div>
            )}

            {/* Icon */}
            {getActivityIcon(activity.type)}

            {/* Content */}
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium group-hover:text-white/90">
                {activity.action}
              </p>
              <p className="text-white/50 text-xs mt-0.5">
                {activity.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
