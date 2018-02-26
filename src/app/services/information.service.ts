import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService
{
	info:any;
	ready:boolean = false;

	constructor(public http:Http )
	{
		this.http.get('assets/data/info.page.json')
			.subscribe(respuesta => {
				this.info = respuesta.json();
				this.ready = true;
		});
	}
}