interface TopBarProps {
  userName: string;
  date: string;
}

export default function TopBar({ userName, date }: TopBarProps) {
  return (
    <div className="wb-topbar">
      <div className="wb-welcome">
        Welcome, <span>{userName}</span>
      </div>
      <div className="wb-topbar-divider" />
      <div className="wb-search">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A79E93" strokeWidth="1.9" strokeLinecap="round">
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>
        <span>Search anything</span>
      </div>
      <div className="wb-topbar-right">
        <button type="button" className="wb-icon-btn" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
            <path d="M10 19a2 2 0 0 0 4 0" />
          </svg>
        </button>
        <button type="button" className="wb-icon-btn" aria-label="Receipts">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="3" width="16" height="18" rx="2.5" />
            <path d="M8 8h8M8 12h6" />
          </svg>
        </button>
        <div className="wb-date-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="1.7" strokeLinecap="round">
            <rect x="3" y="5" width="18" height="16" rx="2.5" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          <span>{date}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
