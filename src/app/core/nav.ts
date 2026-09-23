/** Declarative sidebar navigation model. */

export interface NavLink {
  label: string;
  link: string;
  icon?: string;
  badge?: string | number;
}

export interface NavGroup {
  label: string;
  icon: string;
  children: NavLink[];
}

export interface NavSection {
  heading: string;
  items: (NavLink | NavGroup)[];
}

export function isGroup(item: NavLink | NavGroup): item is NavGroup {
  return 'children' in item;
}

export const NAV_SECTIONS: NavSection[] = [
  {
    heading: 'General',
    items: [{ label: 'Home', link: '/home', icon: 'solar:home-2-bold-duotone' }]
  }
];
