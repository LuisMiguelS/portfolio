import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ItemComponent, PortfolioComponent } from './components/index.pages';

const APP_ROUTES: Routes = [
	{ path: '', component: PortfolioComponent },
	{ path: 'item', component: ItemComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });