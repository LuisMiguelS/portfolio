import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService
{
	productos:any[] = [];
	cargando_productos = true;

	constructor(private http:Http)
	{
		this.products();
	}

	public products()
	{
		if(this.productos.length == 0)
		{
			this.http.get('https://portfolio-13530.firebaseio.com/productos_idx.json')
				.subscribe(respuesta => {
					console.log(respuesta.json());
					this.cargando_productos = false;
				})
		}
	}
}