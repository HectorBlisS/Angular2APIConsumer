import { Component, OnInit } from '@angular/core';
import { ApiDataService } from '../the.service';
 

@Component({
  selector: 'app-api-externa',
  templateUrl: './api-externa.component.html',
  styleUrls: ['./api-externa.component.css']
})
export class ApiExternaComponent implements OnInit {

  constructor(private apiDataService: ApiDataService) { }

  ngOnInit() {
  	this.apiDataService.getAlumnos()
    .subscribe(alumnos => this.alumnos = alumnos);
  }

}
