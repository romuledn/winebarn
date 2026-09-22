import { useMemo, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import OrdersList from './components/OrdersList';
import CatalogView from './components/CatalogView';
import AcademyView from './components/AcademyView';
import OrderDetailsPanel from './components/OrderDetailsPanel';
import { WINES, CLASSES } from './data/catalog';
import type { CartItem, NavKey, Wine } from './types';

const WINE_TABS = ['All', 'Red', 'White', 'Champagne', 'Sparkling', 'Rosé', 'Dessert'];
const CHAMPAGNE_TABS = ['All', 'Brut', 'Blanc de Blancs', 'Rosé', 'Vintage', 'Grower', 'Demi-Sec'];

export default function App() {
  const [view, setView] = useState<NavKey>('menu');
  const [cat, setCat] = useState('Red');
  const [champCat, setChampCat] = useState('All');
  const [classTab, setClassTab] = useState('All classes');
  const [qty, setQty] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 1, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 });
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, name: 'Château Marceau', variant: 'Bottle', serve: 'Cellar Temp', cents: 4800, qty: 1 },
    { id: 4, name: 'Maison Clairette', variant: 'Bottle', serve: 'Chilled', cents: 7400, qty: 1 },
  ]);
  const [enrolled, setEnrolled] = useState<Record<number, boolean>>({});

  const isAcademy = view === 'academy';
  const champView = view === 'champagne';

  const bump = (id: number, delta: number) => {
    setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] || 0) + delta) }));
  };

  const addToCart = (w: Wine) => {
    const n = Math.max(1, qty[w.id] || 1);
    setCart((prev) => {
      const i = prev.findIndex((c) => c.id === w.id);
      if (i >= 0) {
        const next = prev.slice();
        next[i] = { ...next[i], qty: next[i].qty + n };
        return next;
      }
      return [...prev, { id: w.id, name: w.name, variant: w.variant, serve: w.serve, cents: w.cents, qty: n }];
    });
    setQty((q) => ({ ...q, [w.id]: 0 }));
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  const activeCat = champView ? champCat : cat;
  const tabs = champView ? CHAMPAGNE_TABS : WINE_TABS;

  const wines = useMemo(() => {
    const pool = champView ? WINES.filter((w) => w.cat === 'Champagne') : WINES;
    return pool.filter((w) => activeCat === 'All' || (champView ? w.style === activeCat : w.cat === activeCat));
  }, [champView, activeCat]);

  const classes = useMemo(
    () => CLASSES.filter((c) => classTab === 'All classes' || c.track === classTab),
    [classTab],
  );

  const toggleEnroll = (id: number) => {
    setEnrolled((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="wb-shell">
      <Sidebar active={view} onNavigate={setView} />

      <div className="wb-main">
        <TopBar userName="Sofia Mirren" date="12 Sep 2026" />

        <div className="wb-content">
          <div className="wb-center-col">
            {isAcademy ? (
              <AcademyView
                activeTab={classTab}
                onTabChange={setClassTab}
                classes={classes}
                enrolled={enrolled}
                onEnroll={toggleEnroll}
              />
            ) : (
              <>
                <OrdersList />
                <CatalogView
                  title={champView ? 'Champagne List' : 'Wine List'}
                  searchPlaceholder={champView ? 'Search champagne' : 'Search wine'}
                  tabs={tabs}
                  activeTab={activeCat}
                  onTabChange={champView ? setChampCat : setCat}
                  wines={wines}
                  qty={qty}
                  onInc={(id) => bump(id, 1)}
                  onDec={(id) => bump(id, -1)}
                  onAdd={addToCart}
                />
              </>
            )}
          </div>

          <OrderDetailsPanel cart={cart} onRemove={removeFromCart} onReset={() => setCart([])} />
        </div>
      </div>
    </div>
  );
}
