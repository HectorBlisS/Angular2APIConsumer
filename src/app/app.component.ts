import { Component } from '@angular/core';
// import {LoginComponent} from './login'
import { AlumnosDataService } from './login/store-data.service';
// import { HTTP_PROVIDERS } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlumnosDataService]
})
export class AppComponent {
  title = 'app works BlisS!';
}
