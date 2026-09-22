import type { Wine } from '../types';
import { money } from '../data/catalog';
import ImageSlot from './ImageSlot';

interface CatalogViewProps {
  title: string;
  searchPlaceholder: string;
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
  wines: Wine[];
  qty: Record<number, number>;
  onInc: (id: number) => void;
  onDec: (id: number) => void;
  onAdd: (wine: Wine) => void;
}

export default function CatalogView({
  title,
  searchPlaceholder,
  tabs,
  activeTab,
  onTabChange,
  wines,
  qty,
  onInc,
  onDec,
  onAdd,
}: CatalogViewProps) {
  return (
    <div className="wb-card">
      <div className="wb-card-header wb-card-header--wrap">
        <span className="wb-card-title">{title}</span>
        <div className="wb-search wb-search--panel">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A79E93" strokeWidth="1.9" strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <span>{searchPlaceholder}</span>
        </div>
      </div>

      <div className="wb-tabs">
        {tabs.map((tab) => (
          <div
            key={tab}
            className={`wb-tab${tab === activeTab ? ' wb-tab--active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="wb-product-grid">
        {wines.map((w) => (
          <div key={w.id} className="wb-product-card">
            <ImageSlot id={`wine-${w.id}`} label={w.name} height={132} radius={10} />
            <div className="wb-product-name">{w.name}</div>
            <div className="wb-product-sub">{w.sub}</div>
            <div className="wb-product-price">{money(w.cents)}</div>
            <div className="wb-chip-row">
              <div className="wb-chip">
                <span>{w.variant}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
              <div className="wb-chip">
                <span>{w.serve}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
            <div className="wb-product-actions">
              <div className="wb-stepper">
                <div className="wb-stepper-btn" onClick={() => onDec(w.id)}>
                  −
                </div>
                <span className="wb-stepper-val">{qty[w.id] || 0}</span>
                <div className="wb-stepper-btn" onClick={() => onInc(w.id)}>
                  +
                </div>
              </div>
              <div className="wb-add-btn" onClick={() => onAdd(w)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <span>Add to cart</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
