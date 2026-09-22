interface Order {
  id: string;
  channel: string;
  icon: React.ReactNode;
  status: string;
  statusBg: string;
  statusText: string;
  customer: string;
  orderNumber: string;
  timestamp: string;
  footer: string;
  table?: string;
}

const ORDERS: Order[] = [
  {
    id: 'o1',
    channel: 'Takeaway',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1714" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8h16l-1.5 12H5.5Z" />
        <path d="M9 8V5h6v3" />
      </svg>
    ),
    status: 'Waiting',
    statusBg: '#FBE7C2',
    statusText: '#8A6317',
    customer: 'Marcus Hale',
    orderNumber: '#324398',
    timestamp: '12-09-2026, 03:19 pm',
    footer: '4 Bottles',
  },
  {
    id: 'o2',
    channel: 'Delivery',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1714" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 16h11V8H3Z" />
        <path d="M14 11h4l3 3v2h-7Z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    ),
    status: 'Ready',
    statusBg: '#D5F0DE',
    statusText: '#1E6B3C',
    customer: 'Elena Ruiz',
    orderNumber: '#223399',
    timestamp: '12-09-2026, 03:19 pm',
    footer: '6 Bottles',
  },
  {
    id: 'o3',
    channel: 'Tasting Room',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1714" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3v7a2 2 0 0 0 4 0V3" />
        <path d="M8 10v11" />
        <path d="M17 3c-1.5 2-2 4-2 6h4c0-2-.5-4-2-6Z" />
        <path d="M17 9v12" />
      </svg>
    ),
    status: 'Canceled',
    statusBg: '#FBDBD8',
    statusText: '#9B2B22',
    customer: 'John Pantau',
    orderNumber: '#448127',
    timestamp: '12-09-2026, 02:19 pm',
    footer: '10 Glasses',
    table: 'Table 3A',
  },
];

export default function OrdersList() {
  return (
    <div className="wb-card">
      <div className="wb-card-header">
        <span className="wb-card-title">Orders List</span>
        <a href="#" className="wb-link" onClick={(e) => e.preventDefault()}>
          View all orders
        </a>
      </div>
      <div className="wb-orders-grid">
        {ORDERS.map((o) => (
          <div key={o.id} className="wb-order-card">
            <div className="wb-order-card-header">
              {o.icon}
              <span className="wb-order-channel">{o.channel}</span>
              <span className="wb-status-pill" style={{ background: o.statusBg, color: o.statusText }}>
                {o.status}
              </span>
            </div>
            <div className="wb-order-customer-row">
              <span className="wb-order-customer">{o.customer}</span>
              <span className="wb-order-number">{o.orderNumber}</span>
            </div>
            <div className="wb-order-timestamp">{o.timestamp}</div>
            <div className="wb-order-footer">
              <span>{o.footer}</span>
              {o.table && (
                <>
                  <span className="wb-dot">•</span>
                  <span>{o.table}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
