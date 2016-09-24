// import { ALUMNOS } from './mocks';
import {Friend} from './login/friend'
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiDataService {
	private alumnosUrl = 'http://api.ember-101.com/friends'; //URL to alumnos
	private blissUrl = 'http://vijusamexico.net/alumnos/'
	private FakeUrl = 'app/login/data.json';
	constructor(private http: Http){}
	getAlumnos(){
		// return ALUMNOS; se hace por http:
		return this.http
		.get(this.blissUrl)
		// .map(response => <Friend[]> response.json().data);
		.map(response => <Friend[]> response.json())
	}
}