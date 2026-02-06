export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string; // e.g. "(4 pcs)"
  items: MenuItem[];
  type: 'standard' | 'simple' | 'grid' | 'cards'; // Layout variations
}

export interface NavigationItem {
  id: string;
  label: string;
}