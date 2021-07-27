import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'https://accp-whiteboard.tutosh.com/chat.html?profileId=20',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
