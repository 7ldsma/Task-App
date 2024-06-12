import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: 'general-taks',
                title: 'General Tasks',
                loadComponent: () => import('./dashboard/pages/general-tasks/general-tasks.component'),
            },
            {
                path: 'regulatory-tasks',
                title: 'Regulatory Tasks',
                loadComponent: () => import('./dashboard/pages/regulatory-tasks/regulatory-tasks.component'),
            },

            {
                path: '', redirectTo: 'general-taks', pathMatch: 'full',
            }
        ]
    },{
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    }


];
