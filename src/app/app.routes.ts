import { RouterModule, Routes } from '@angular/router';
import { AboutComponent, ItemComponent, PortfolioComponent, SearchComponent } from './components/index.pages';

const APP_ROUTES: Routes = [
	{ path: 'home', component: PortfolioComponent },
	{ path: 'item/:id', component: ItemComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'search/:value', component: SearchComponent },
	{ path: '**', pathMatch: 'full', redirectTo: 'home' },
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });