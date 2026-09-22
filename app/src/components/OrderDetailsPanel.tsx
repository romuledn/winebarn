import type { CartItem } from '../types';
import { money } from '../data/catalog';

interface OrderDetailsPanelProps {
  cart: CartItem[];
  onRemove: (id: number) => void;
  onReset: () => void;
}

export default function OrderDetailsPanel({ cart, onRemove, onReset }: OrderDetailsPanelProps) {
  const subtotal = cart.reduce((t, c) => t + c.cents * c.qty, 0);
  const discount = Math.round(subtotal * 0.1);
  const taxes = Math.round((subtotal - discount) * 0.02);
  const total = subtotal - discount + taxes;

  return (
    <aside className="wb-order-panel">
      <div className="wb-order-panel-title">Order Details</div>
      <div className="wb-order-panel-scroll">
        <div className="wb-panel-block">
          <div className="wb-panel-block-title">Customer Information</div>
          <div className="wb-field-label">Customer name</div>
          <div className="wb-field">Jay Kowalski</div>
          <div className="wb-field-grid">
            <div>
              <div className="wb-field-label">Order Type</div>
              <div className="wb-field wb-field--select">
                <span>Take Away</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div>
              <div className="wb-field-label">Table number</div>
              <div className="wb-field wb-field--select wb-field--placeholder">
                <span>Select table</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="wb-panel-block wb-panel-block--items">
          <div className="wb-panel-block-header">
            <span className="wb-panel-block-title">Order Items</span>
            <span className="wb-reset-link" onClick={onReset}>
              Reset Order
            </span>
          </div>
          <div className="wb-cart-list">
            {cart.map((c) => (
              <div key={c.id} className="wb-cart-row">
                <div className="wb-cart-tile">{c.name.charAt(0).toUpperCase()}</div>
                <div className="wb-cart-details">
                  <div className="wb-cart-row-top">
                    <span className="wb-cart-name">{c.name}</span>
                    <div className="wb-cart-actions">
                      <button type="button" className="wb-cart-icon-btn wb-cart-icon-btn--danger" onClick={() => onRemove(c.id)} aria-label="Remove item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C0392B" strokeWidth="1.9" strokeLinecap="round">
                          <path d="M4 7h16M9 7V5h6v2M6 7l1 13h10l1-13" />
                        </svg>
                      </button>
                      <button type="button" className="wb-cart-icon-btn" aria-label="Edit item">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 20h4L20 8l-4-4L4 16Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="wb-cart-meta">Format : {c.variant}</div>
                  <div className="wb-cart-meta">Serve : {c.serve}</div>
                  <div className="wb-cart-row-bottom">
                    <span className="wb-cart-price">{money(c.cents * c.qty)}</span>
                    <span className="wb-cart-qty">x{c.qty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {cart.length === 0 && (
            <div className="wb-cart-empty">No items yet — add a wine from the list.</div>
          )}
        </div>

        <div className="wb-payment-block">
          <div className="wb-payment-title">Payment Details</div>
          <div className="wb-payment-method">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5C554E" strokeWidth="1.7" strokeLinecap="round">
              <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
              <circle cx="8" cy="12" r="2" />
            </svg>
            <span>Cash</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="wb-payment-method-chevron">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
          <div className="wb-promo-row">
            <div className="wb-promo-input">Promo Code</div>
            <div className="wb-promo-apply">Apply</div>
          </div>
          <div className="wb-summary-row">
            <span>Sub total</span>
            <span>{money(subtotal)}</span>
          </div>
          <div className="wb-summary-row">
            <span>Discount (10%)</span>
            <span>-{money(discount)}</span>
          </div>
          <div className="wb-summary-row">
            <span>Taxes (2%)</span>
            <span>{money(taxes)}</span>
          </div>
        </div>
      </div>

      <div className="wb-order-panel-footer">
        <div className="wb-total-row">
          <span>Total</span>
          <span className="wb-total-amount">{money(total)}</span>
        </div>
        <div className="wb-confirm-btn">Confirm Payment</div>
      </div>
    </aside>
  );
}
