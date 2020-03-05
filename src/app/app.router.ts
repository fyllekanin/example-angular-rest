import { FirstComponent } from './pages/first/first.component';
import { Routes } from '@angular/router';
import { SecondComponent } from './pages/second/second.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first'
    },
    {
        path: 'first',
        component: FirstComponent
    },
    {
        path: 'second',
        component: SecondComponent
    }
];