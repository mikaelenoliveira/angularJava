import { ContatoService } from './contato.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-java';

  constructor(private service: ContatoService){
    this.service.getContatos().subscribe(data =>{console.log(data)})

  }

}
