import { MenuTab } from "./menu-tab.model";

export interface SearchResultsSideMenuState {
  menuTabs: MenuTab[];
  resultsFound: boolean;
  totalCount?: number;
}

export const DEFAULT_SEARCH_MENU_STATE: SearchResultsSideMenuState = {
    resultsFound: false,
    totalCount: 0,
    menuTabs:  [
      {
        icon: 'assets/parts.svg#parts',
        routeUri: `landing`,
        title: 'Parts',
        selected: false,
        category: 'Parts',
        entitySearchCount: 230,
        showEntitySearchCount: true
      },
      {
  
        icon: 'assets/document.svg#document',
        routeUri: `search-results`,
        title: 'Requirements',
        selected: false,
        category: 'Requirements',
        entitySearchCount: 160,
        showEntitySearchCount: true
      },
      {
  
        icon: 'assets/apps-sbs.svg#sideBySide',
        routeUri: 'search-results',
        title: 'Documents   ',
        selected: false,
        category: 'Documents',
        entitySearchCount: 210,
        showEntitySearchCount: true
      },
      {
  
        icon: 'assets/clock.svg#clock',
        routeUri: `search-results`,
        title: 'Recent Searches',
        selected: false,
        category: 'Recent',
        entitySearchCount: 0,
        showEntitySearchCount: true
      },
  
    ]
}
  