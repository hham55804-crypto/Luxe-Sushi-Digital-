import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    id: 'tartare',
    title: 'TARTARE',
    type: 'standard',
    items: [
      { id: 't1', name: 'Saumon Avocat', description: 'Riz, avocat, saumon, ciboulette, tobiko, sauce épicée', price: '59DH' },
      { id: 't2', name: 'Gambas Panées', description: 'Riz, avocat, gambas panées, tobiko, ciboulette, sauce épicée', price: '55DH' },
      { id: 't3', name: 'Thon Avocat', description: 'Thon frais épicé, ciboulette, avocat, spicy sauce', price: '49DH' },
    ]
  },
  {
    id: 'california',
    title: 'CALIFORNIA ROLLS',
    subtitle: '(4 pcs)',
    type: 'standard',
    items: [
      { id: 'c1', name: 'Cacher', description: 'thon frais, riz épicé', price: '39DH' },
      { id: 'c2', name: 'Tuna Yaki', description: 'thon cuit, avocat, cheese, shichimi, spicy sauce', price: '35DH' },
      { id: 'c3', name: 'Fresh Tuna', description: 'thon, avocat, cheese, sésame', price: '39DH' },
      { id: 'c4', name: 'Cream Cheese', description: 'saumon, surimi, avocat, cheese, tobiko' },
      { id: 'c5', name: 'Saumon Avocat', description: 'saumon, avocat, cheese, sésame' },
      { id: 'c6', name: 'Saumon Cheese', description: 'saumon, cheese, sésame' },
      { id: 'c7', name: 'Ebi Fry', description: 'cheese, avocat, gambas panées, ciboulette' },
      { id: 'c8', name: 'Saumon Cuit', description: 'saumon cuit, avocat, sauce épicée, tobiko' },
      { id: 'c9', name: 'Spicy', description: 'saumon, shichimi' },
      { id: 'c10', name: 'Grinsh', description: 'surimi, concombre, avocat, cheese' },
    ]
  },
  {
    id: 'creations',
    title: 'CRÉATIONS',
    subtitle: '(4 pcs)',
    type: 'standard',
    items: [
      { id: 'cr1', name: 'Okinawa', description: 'saumon, riz, anguille, Okinawa sauce', price: '55DH' },
      { id: 'cr2', name: 'Sunshine', description: 'saumon pané, anguille panée, gambas panées, cheese, unagi sauce, tobiko' },
      { id: 'cr3', name: 'Chicken Roll', description: 'poulet, crispy oignons, sésame, kamikaze' },
      { id: 'cr4', name: 'Maguro', description: 'thon frais épicé, anguille panée, ciboulette', price: '45DH' },
      { id: 'cr5', name: 'The Nordic', description: 'saumon, riz, cheese' },
      { id: 'cr6', name: 'King Shrimp', description: 'gambas panées, saumon, brie, cheese, tobiko' },
    ]
  },
  {
    id: 'aromaki',
    title: 'AROMAKI',
    subtitle: '(8 pcs)',
    type: 'standard',
    items: [
      { id: 'a1', name: 'Wakami Saumon', description: 'saumon, surimi, wakami, mangue, tobiko, cheese', price: '55DH' },
      { id: 'a2', name: 'Saumon', description: 'saumon, surimi, avocat, tobiko, cheese', price: '79DH' },
      { id: 'a3', name: 'Exotic', description: 'saumon, crevette, mangue, cheese, tobiko, miel, laitue', price: '85DH' },
      { id: 'a4', name: 'Gambas Panées', description: 'gambas panées, avocat, surimi, cheese, tobiko', price: '75DH' },
      { id: 'a5', name: 'Saumon Cuit', description: 'saumon cuit, avocat, surimi pané, cheese, tobiko', price: '70DH' },
    ]
  },
  {
    id: 'maki',
    title: 'MAKI',
    subtitle: '(6 pcs)',
    type: 'simple',
    items: [
      { id: 'm1', name: 'Saumon' },
      { id: 'm2', name: 'Avocat' },
      { id: 'm3', name: 'Mango' },
      { id: 'm4', name: 'Surimi' },
      { id: 'm5', name: 'Gambas panées' },
      { id: 'm6', name: 'Kappa' },
      { id: 'm7', name: 'Maki thon' },
      { id: 'm8', name: 'Saumon cheese' },
      { id: 'm9', name: 'Saumon avocat' },
    ]
  },
  {
    id: 'nigiri',
    title: 'NIGIRI',
    subtitle: '(2 pcs)',
    type: 'grid',
    items: [
      { id: 'n1', name: 'Thon', price: '30DH' },
      { id: 'n2', name: 'Saumon', price: '35DH' },
      { id: 'n3', name: 'Gambas panées', price: '30DH' },
      { id: 'n4', name: 'Ebi', price: '30DH' },
      { id: 'n5', name: 'Anguille', price: '35DH' },
    ]
  },
  {
    id: 'sashimi',
    title: 'SASHIMI',
    subtitle: '(4 pcs)',
    type: 'grid',
    items: [
      { id: 's1', name: 'Saumon', price: '55DH' },
      { id: 's2', name: 'Saumon flambé', price: '55DH' },
      { id: 's3', name: 'Thon', price: '50DH' },
      { id: 's4', name: 'Thon flambé', price: '50DH' },
    ]
  },
  {
    id: 'futomaki',
    title: 'FUTOMAKI',
    subtitle: '(5 pcs)',
    type: 'standard',
    items: [
      { id: 'f1', name: 'Saumon', description: 'saumon, riz, avocat, tobiko, laitue' },
      { id: 'f2', name: 'Gambas Panées', description: 'riz, avocat, tobiko, gambas panées, laitue' },
      { id: 'f3', name: 'Végé', description: 'riz, avocat, concombre, laitue' },
    ]
  },
  {
    id: 'pizza',
    title: 'PIZZA SUSHI',
    subtitle: '(8 pcs)',
    type: 'standard',
    items: [
      { id: 'p1', name: 'Pizza Mozzarella', description: 'saumon, crabe, mozzarella, ciboulette, tobiko', price: '55DH' },
      { id: 'p2', name: 'Pizza Thon Rouge', description: 'thon frais épicé, ciboulette, tobiko, spicy sauce, cheese', price: '55DH' },
      { id: 'p3', name: 'Pizza Saumon Frais', description: 'saumon, surimi, concombre, avocat, tobiko', price: '59DH' },
    ]
  },
  {
    id: 'fryrolls',
    title: 'FRY ROLLS',
    subtitle: '(4 pcs)',
    type: 'standard',
    items: [
      { id: 'fr1', name: 'Crispy Tuna', description: 'mangue, tuna, cheese, concombre, unagi sauce', price: '40DH' },
      { id: 'fr2', name: 'Aromaki Pané', description: 'saumon, surimi, avocat, cheese, tobiko, kamikaze', price: '45DH' },
      { id: 'fr3', name: 'Ebi Fry', description: 'gambas panées, surimi, avocat, cheese, kamikaze', price: '45DH' },
      { id: 'fr4', name: 'Ebi Tempura', description: 'ebi tempura, cheese, unagi sauce', price: '39DH' },
      { id: 'fr5', name: 'Crunchy Bites', description: 'saumon, tobiko, cheese, avocat, kamikaze', price: '39DH' },
    ]
  },
  {
    id: 'assortiments',
    title: 'ASSORTIMENTS',
    type: 'cards',
    items: [
      { id: 'as1', name: '14 pièces' },
      { id: 'as2', name: '16 pièces' },
      { id: 'as3', name: '24 pièces' },
      { id: 'as4', name: '44 pièces' },
      { id: 'as5', name: '62 pièces' },
      { id: 'as6', name: '100 pièces' },
    ]
  }
];