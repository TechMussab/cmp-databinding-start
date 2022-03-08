import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'testServer', content: 'nigger'}];

  onServerAdded(data: { name: string, content: string }) {
    console.log('server added');
    this.serverElements.push({
      type: 'server',
      name: data.name,
      content: data.content
    });
  }

  onBluePrintAdded(data: { name: string, content: string }) {
    console.log('BP added');
      this.serverElements.push({
        type: 'blueprint',
        name: data.name,
        content: data.content
      });
  }


}
