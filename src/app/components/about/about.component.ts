import { Component } from '@angular/core';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent
{
	constructor(public infoservice:InformationService)
	{
		//
	}
}