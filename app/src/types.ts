export type WineCategory = 'Red' | 'White' | 'Champagne' | 'Sparkling' | 'Rosé' | 'Dessert';

export type ChampagneStyle =
  | 'Brut'
  | 'Blanc de Blancs'
  | 'Rosé'
  | 'Vintage'
  | 'Grower'
  | 'Demi-Sec';

export type Variant = 'Bottle' | 'Glass';
export type Serve = 'Chilled' | 'Cellar Temp';

export interface Wine {
  id: number;
  name: string;
  sub: string;
  cents: number;
  cat: WineCategory;
  style?: ChampagneStyle;
  variant: Variant;
  serve: Serve;
}

export type ClassTrack = 'Foundations' | 'Regions' | 'Pairing' | 'Tasting' | 'Certification';
export type ClassLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

export interface WineClass {
  id: number;
  name: string;
  tutor: string;
  level: ClassLevel;
  duration: string;
  date: string;
  seats: string;
  cents: number;
  track: ClassTrack;
}

export interface CartItem {
  id: number;
  name: string;
  variant: Variant;
  serve: Serve;
  cents: number;
  qty: number;
}

export type NavKey =
  | 'dashboard'
  | 'menu'
  | 'champagne'
  | 'academy'
  | 'inventory'
  | 'history'
  | 'analytic'
  | 'withdrawl'
  | 'table'
  | 'payment';
