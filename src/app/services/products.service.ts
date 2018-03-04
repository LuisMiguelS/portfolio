import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductsService
{
	products:any[] = [];
	searched_products:any[] = [];

	constructor(private http:Http)
	{
		this.allProducts();
	}

	//carga todos los productos
	public allProducts()
	{
		if(this.products.length == 0)
		{
			let promesa = new Promise((resolve, reject) => {
				this.http.get('https://portfolio-13530.firebaseio.com/productos_idx.json')
					.subscribe(respuesta => {
						this.products = respuesta.json();
						resolve();
					});
			});
			
			return promesa;
		}
	}

	//carga un producto en especifico
	public product(cod:string)
	{
		return this.http.get(`https://portfolio-13530.firebaseio.com/productos/${ cod }.json`);
	}

	//encuentra los productos buscados por el usuario
	public seachProduct(item:string)
	{
		//verifico si no existen productos en el array "products"
		if(this.products.length === 0)
		{
			this.allProducts().then(() => {
				//aqui ya sé que terminó la carga
				this.filtrarProducts(item);
			});
		}

		//si entra aqui es porque ya existen productos
		else
		{
			this.filtrarProducts(item);
		}
	}

	//filtra los productos que coinciden con el criterio de busqueda del usuario
	private filtrarProducts(item:string)
	{
		this.searched_products = [];
		item = item.toLowerCase();

		this.products.forEach(product => {
			
			if(product.categoria.indexOf(item) >= 0 || product.titulo.toLowerCase().indexOf(item) >= 0)
			{
				// console.log(product);
				this.searched_products.push(product);
			}

		});
	}
}