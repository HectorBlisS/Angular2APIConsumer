import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
// import { ALUMNOS } from './mocks';
import { AlumnosDataService } from './store-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private alumnosDataService: AlumnosDataService) {}

  ngOnInit() {
  	// this.alumnos = ALUMNOS;
  	//ya no es necesario gracias al injectable:
  	// let alumnosDataService = new AlumnosDataService();
  	//esto se tranforma:
  	// this.alumnos = alumnosDataService.getAlumnos();
  	//en esto:
  	
  	// this.alumnos = this.alumnosDataService.getAlumnos(); ahora con subscribe
  	this.alumnosDataService.getAlumnos()
    .subscribe(friends => this.friends = friends);
  }

}
