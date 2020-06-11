import { Component } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: 'YOUR_API_KEY',
  databaseURL: 'YOUR_DATABASE_URL'
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';

  constructor() {
    firebase.initializeApp(config);
  }
}
