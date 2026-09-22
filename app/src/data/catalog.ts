import type { Wine, WineClass } from '../types';

export const WINES: Wine[] = [
  { id: 1, name: 'Château Marceau', sub: 'Bordeaux Blend · 2018', cents: 4800, cat: 'Red', variant: 'Bottle', serve: 'Cellar Temp' },
  { id: 2, name: 'Vallon Noir', sub: 'Pinot Noir · 2020', cents: 3600, cat: 'Red', variant: 'Glass', serve: 'Cellar Temp' },
  { id: 3, name: 'Barn Reserve Cabernet', sub: 'Napa Valley · 2017', cents: 6200, cat: 'Red', variant: 'Bottle', serve: 'Cellar Temp' },
  { id: 4, name: 'Maison Clairette', sub: 'Brut Champagne · NV', cents: 7400, cat: 'Champagne', style: 'Brut', variant: 'Bottle', serve: 'Chilled' },
  { id: 10, name: 'Veuve Aurore', sub: 'Blanc de Blancs · 2016', cents: 12500, cat: 'Champagne', style: 'Blanc de Blancs', variant: 'Bottle', serve: 'Chilled' },
  { id: 11, name: 'Barn Cuvée Rosé', sub: 'Rosé Champagne · NV', cents: 9800, cat: 'Champagne', style: 'Rosé', variant: 'Bottle', serve: 'Chilled' },
  { id: 12, name: 'Côte Dorée Grand Cru', sub: 'Vintage Brut · 2014', cents: 18500, cat: 'Champagne', style: 'Vintage', variant: 'Bottle', serve: 'Chilled' },
  { id: 14, name: 'Fleur de Craie', sub: 'Grower Brut Nature · NV', cents: 8900, cat: 'Champagne', style: 'Grower', variant: 'Bottle', serve: 'Chilled' },
  { id: 15, name: 'Nuit Dorée Demi-Sec', sub: 'Demi-Sec · NV', cents: 6800, cat: 'Champagne', style: 'Demi-Sec', variant: 'Glass', serve: 'Chilled' },
  { id: 13, name: 'Prosecco di Valdo', sub: 'Extra Dry · NV', cents: 2400, cat: 'Sparkling', variant: 'Glass', serve: 'Chilled' },
  { id: 5, name: 'Petit Colline Blanc', sub: 'Sauvignon Blanc · 2022', cents: 2800, cat: 'White', variant: 'Glass', serve: 'Chilled' },
  { id: 6, name: 'Rosé du Barn', sub: 'Provence Rosé · 2023', cents: 3200, cat: 'Rosé', variant: 'Bottle', serve: 'Chilled' },
  { id: 7, name: 'Terra Rossa Syrah', sub: 'Barossa · 2019', cents: 3400, cat: 'Red', variant: 'Bottle', serve: 'Cellar Temp' },
  { id: 8, name: 'Golden Hour Riesling', sub: 'Mosel · 2021', cents: 3000, cat: 'White', variant: 'Glass', serve: 'Chilled' },
  { id: 9, name: 'Late Harvest Moscato', sub: 'Dessert · 2020', cents: 2600, cat: 'Dessert', variant: 'Glass', serve: 'Chilled' },
];

export const CLASSES: WineClass[] = [
  { id: 1, name: 'Wine 101: Reading the Glass', tutor: 'With Sofia Mirren, Head Sommelier', level: 'BEGINNER', duration: '90 min', date: 'Thu 17 Sep, 6:30 pm', seats: '4 seats left', cents: 4500, track: 'Foundations' },
  { id: 2, name: 'Bordeaux Deep Dive', tutor: 'With Julien Fabre, Buyer', level: 'INTERMEDIATE', duration: '2 hrs', date: 'Sat 19 Sep, 4:00 pm', seats: '9 seats left', cents: 8500, track: 'Regions' },
  { id: 3, name: 'Bubbles: Champagne & Method', tutor: 'With Sofia Mirren', level: 'BEGINNER', duration: '90 min', date: 'Sun 20 Sep, 2:00 pm', seats: '2 seats left', cents: 6500, track: 'Regions' },
  { id: 4, name: 'Food & Wine Pairing Lab', tutor: 'With Chef Amara Osei', level: 'INTERMEDIATE', duration: '2.5 hrs', date: 'Wed 23 Sep, 7:00 pm', seats: '6 seats left', cents: 9500, track: 'Pairing' },
  { id: 5, name: 'Blind Tasting Bootcamp', tutor: 'With Julien Fabre', level: 'ADVANCED', duration: '3 hrs', date: 'Fri 25 Sep, 6:00 pm', seats: 'Waitlist', cents: 12000, track: 'Tasting' },
  { id: 6, name: 'WSET Level 2 Prep', tutor: 'With Sofia Mirren', level: 'ADVANCED', duration: '6 weeks', date: 'Starts 1 Oct', seats: '11 seats left', cents: 42000, track: 'Certification' },
];

export const money = (cents: number): string => '$' + (cents / 100).toFixed(2);
