import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  	selector: 'app-search',
  	templateUrl: './search.component.html'
  	// styleUrls: ['./search.component.css']
})
export class SearchComponent
{
	value:string = undefined;

  	constructor(private route:ActivatedRoute, private _productoservice:ProductsService)
  	{
  		this.route.params.subscribe(parametros => {
  			this.value = parametros['value'];
  			this._productoservice.seachProduct(this.value);
  		});
  	}
}