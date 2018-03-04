import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
  // styleUrls: ['./header.component.css']
})
export class HeaderComponent
{
	constructor(public _infoservice:InformationService, private route:Router) { }

	searchItem(item:any)
  	{
  		this.route.navigate(['search', item.value]);
  	}
}