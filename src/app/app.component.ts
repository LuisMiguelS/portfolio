import { Component } from '@angular/core';
import { InformationService } from './services/information.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
	constructor(private _infoservice:InformationService, public _la:ProductsService) { }
}
