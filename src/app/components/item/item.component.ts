import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
  // styleUrls: ['./item.component.css']
})
export class ItemComponent
{
	product:any = undefined;
	cod_prod:string;

	constructor(private route:ActivatedRoute, private _productoservicio:ProductsService)
	{
		route.params.subscribe(parametros => {
			_productoservicio.product(parametros['id'])
				.subscribe(respuesta => {
					this.product = respuesta.json();
					this.cod_prod = parametros['id'];
				});
		});
	}
}