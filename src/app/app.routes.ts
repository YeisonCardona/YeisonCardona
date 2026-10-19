import { Routes } from '@angular/router';

import { EmptyLayoutComponent } from '@shared/layouts/empty/empty.component';
import { FullScreenLayoutComponent } from '@shared/layouts/fullscreen/full-screen-layout.component';
// import { AppSideNavAutoLayoutComponent } from '@shared/layouts/app-sidenav-auto/app-sidenav-auto.component';
// import { AppSideNavCollapseLayoutComponent } from '@shared/layouts/app-sidenav-collapse/app-sidenav-collapse.component';
// import { AppHandledComponent } from '@shared/layouts/app-handled-mode/app-handled.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cv',
    pathMatch: 'full',
  },

  {
    path: '',
    component: FullScreenLayoutComponent,
    data: {
      showToolbar: false,
      showButtonThemeSwitcher: false,
      showTitleInToolbar: false,
    },
    children: [
      {
        path: 'cv',
        loadComponent: () =>
          import('./features/components/header/header.component').then((m) => m.HeaderComponent),
      },
    ],
  },
];
