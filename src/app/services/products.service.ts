import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService
{
	products:any[] = [];
	cargando_productos = true;

	constructor(private http:Http)
	{
		this.allProducts();
	}

	public allProducts()
	{
		if(this.products.length == 0)
		{
			this.http.get('https://portfolio-13530.firebaseio.com/productos_idx.json')
				.subscribe(respuesta => {
					this.products = respuesta.json();
					this.cargando_productos = false;
				})
		}
	}
}