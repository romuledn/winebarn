import type { WineClass } from '../types';
import { money } from '../data/catalog';
import ImageSlot from './ImageSlot';

const CLASS_TABS = ['All classes', 'Foundations', 'Regions', 'Pairing', 'Tasting', 'Certification'];

interface AcademyViewProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  classes: WineClass[];
  enrolled: Record<number, boolean>;
  onEnroll: (id: number) => void;
}

export default function AcademyView({ activeTab, onTabChange, classes, enrolled, onEnroll }: AcademyViewProps) {
  return (
    <>
      <div className="wb-academy-hero">
        <div className="wb-academy-hero-copy">
          <div className="wb-academy-eyebrow">THE WINE BARN ACADEMY</div>
          <div className="wb-academy-headline">Learn the cellar, glass by glass.</div>
          <div className="wb-academy-body">
            Guided classes led by our in-house sommeliers. Enrollments sync straight to the register — seats hold
            for 30 minutes.
          </div>
        </div>
        <div className="wb-academy-stats">
          <div className="wb-academy-stat">
            <div className="wb-academy-stat-num">6</div>
            <div className="wb-academy-stat-label">Classes this week</div>
          </div>
          <div className="wb-academy-stat">
            <div className="wb-academy-stat-num">48</div>
            <div className="wb-academy-stat-label">Seats booked</div>
          </div>
        </div>
      </div>

      <div className="wb-card">
        <div className="wb-card-header wb-card-header--wrap">
          <span className="wb-card-title">Wine Learning Classes</span>
          <div className="wb-search wb-search--panel">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A79E93" strokeWidth="1.9" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <span>Search classes</span>
          </div>
        </div>

        <div className="wb-tabs">
          {CLASS_TABS.map((tab) => (
            <div
              key={tab}
              className={`wb-tab${tab === activeTab ? ' wb-tab--active' : ''}`}
              onClick={() => onTabChange(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="wb-class-grid">
          {classes.map((c) => {
            const isEnrolled = !!enrolled[c.id];
            return (
              <div key={c.id} className="wb-product-card">
                <ImageSlot id={`class-${c.id}`} label={c.name} height={126} radius={10} />
                <div className="wb-class-meta">
                  <span className="wb-class-level">{c.level}</span>
                  <span className="wb-class-duration">{c.duration}</span>
                </div>
                <div className="wb-product-name">{c.name}</div>
                <div className="wb-product-sub">{c.tutor}</div>
                <div className="wb-class-schedule">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8A8279" strokeWidth="1.8" strokeLinecap="round">
                    <rect x="3" y="5" width="18" height="16" rx="2.5" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                  <span>{c.date}</span>
                  <span className="wb-dot">•</span>
                  <span>{c.seats}</span>
                </div>
                <div className="wb-class-footer">
                  <span className="wb-class-price">{money(c.cents)}</span>
                  <div
                    className={`wb-enroll-btn${isEnrolled ? ' wb-enroll-btn--enrolled' : ''}`}
                    onClick={() => onEnroll(c.id)}
                  >
                    <span>{isEnrolled ? 'Enrolled' : 'Enroll'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
