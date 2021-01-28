import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [ { type: 'server', name: 'TestServer', content: 'Test' }];

  onServerAdded(serverData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.name,
      content: serverData.content
    });
  }

  onBlueprintAdded(blueprintData: { name: string, content: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.name,
      content: blueprintData.content
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
  
}
