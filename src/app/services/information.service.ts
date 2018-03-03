import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformationService
{
	info:any;
	ready:boolean = false;
	ready_about_us = false;
	team:any[] = [];

	constructor(public http:Http )
	{
		this.staticInfo();
		this.infoAboutUs();
	}

	public staticInfo()
	{
		this.http.get('assets/data/info.page.json')
			.subscribe(respuesta => {
				this.info = respuesta.json();
				this.ready = true;
		});
	}

	public infoAboutUs()
	{
		this.http.get('https://portfolio-13530.firebaseio.com/equipo.json')
			.subscribe(respuesta => {
				this.team = respuesta.json();
				this.ready_about_us = true;
		});
	}
}