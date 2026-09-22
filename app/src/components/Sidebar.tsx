import type { NavKey } from '../types';
import logo from '../assets/wine-barn-logo.webp';

interface NavItem {
  key: NavKey;
  label: string;
  icon: React.ReactNode;
  badge?: string;
  chevron?: boolean;
}

const iconProps = {
  width: 19,
  height: 19,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const NAV_ITEMS: NavItem[] = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg {...iconProps}>
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
  },
  {
    key: 'menu',
    label: 'Wine Order',
    icon: (
      <svg {...iconProps}>
        <path d="M8 3h8l-1 6a4 4 0 0 1-3 3 4 4 0 0 1-3-3Z" />
        <path d="M12 12v6" />
        <path d="M8 21h8" />
      </svg>
    ),
  },
  {
    key: 'champagne',
    label: 'Champagne Order',
    icon: (
      <svg {...iconProps}>
        <path d="M9 3h6l-.6 7a2.4 2.4 0 0 1-4.8 0Z" />
        <path d="M12 12v7" />
        <path d="M9 21h6" />
        <path d="M17 5.5 19 4M18 9l2-.6" />
      </svg>
    ),
  },
  {
    key: 'academy',
    label: 'Academy',
    badge: 'NEW',
    icon: (
      <svg {...iconProps}>
        <path d="m12 4 9 4.5-9 4.5-9-4.5Z" />
        <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
      </svg>
    ),
  },
  {
    key: 'inventory',
    label: 'Cellar Inventory',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <path d="M3 9h18" />
        <path d="M10 13h4" />
      </svg>
    ),
  },
  {
    key: 'history',
    label: 'History',
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="3" width="16" height="18" rx="2.5" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
  },
  {
    key: 'analytic',
    label: 'Analytic',
    icon: (
      <svg {...iconProps}>
        <path d="M5 20V10M12 20V4M19 20v-7" />
      </svg>
    ),
  },
  {
    key: 'withdrawl',
    label: 'Withdrawl',
    icon: (
      <svg {...iconProps}>
        <path d="M9 3h6l-1.5 3h-3Z" />
        <path d="M12 6c-4 2-6 5-6 9a5 5 0 0 0 12 0c0-4-2-7-6-9Z" />
      </svg>
    ),
  },
  {
    key: 'table',
    label: 'Manage Table',
    chevron: true,
    icon: (
      <svg {...iconProps}>
        <path d="M3 8h18" />
        <path d="M6 8v8M18 8v8M12 8v4" />
        <path d="M4 5h16" />
      </svg>
    ),
  },
  {
    key: 'payment',
    label: 'Payment',
    icon: (
      <svg {...iconProps}>
        <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
        <path d="M2.5 10h19" />
      </svg>
    ),
  },
];

interface SidebarProps {
  active: NavKey;
  onNavigate: (key: NavKey) => void;
}

export default function Sidebar({ active, onNavigate }: SidebarProps) {
  return (
    <aside className="wb-sidebar">
      <div className="wb-brand">
        <img src={logo} alt="The Wine Barn" className="wb-brand-logo" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0A79C" strokeWidth="1.6" className="wb-brand-collapse">
          <rect x="3" y="4" width="18" height="16" rx="3" />
          <path d="M9 4v16" />
        </svg>
      </div>

      <nav className="wb-nav">
        {NAV_ITEMS.map((item) => {
          const isActive = active === item.key;
          return (
            <div
              key={item.key}
              className={`wb-nav-item${isActive ? ' wb-nav-item--active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.icon}
              <span>{item.label}</span>
              {item.badge && <span className="wb-nav-badge">{item.badge}</span>}
              {item.chevron && (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="wb-nav-chevron">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
            </div>
          );
        })}
      </nav>

      <div className="wb-sidebar-footer">
        <div className="wb-footer-link">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
          </svg>
          <span>Settings</span>
        </div>
        <div className="wb-footer-link">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
            <rect x="2.5" y="13" width="4" height="6" rx="2" />
            <rect x="17.5" y="13" width="4" height="6" rx="2" />
          </svg>
          <span>Help Center</span>
        </div>
        <div className="wb-user-card">
          <div className="wb-user-avatar">SM</div>
          <div className="wb-user-info">
            <span className="wb-user-name">Sofia Mirren</span>
            <span className="wb-user-email">sofia@thewinebarn.com</span>
          </div>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#B0A79C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="wb-user-chevron">
            <path d="m6 15 6-6 6 6" />
          </svg>
        </div>
      </div>
    </aside>
  );
}
