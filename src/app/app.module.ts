import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { SearchComponent } from './components/search/search.component';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { InformationService } from './services/information.service';
import { ProductsService } from './services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
  ],
  providers: [
    InformationService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
