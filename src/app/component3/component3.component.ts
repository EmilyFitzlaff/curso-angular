import { Component } from "@angular/core";

@Component({
	selector: "app-component3",
	standalone: true,
	imports: [],
	templateUrl: "./component3.component.html",
	styleUrl: "./component3.component.css",
})

export class Component3Component {
  image = './assets/imagem1.png';

  alterarImagem() {
    if (this.image === './assets/imagem1.png') {
      this.image =  './assets/imagem2.jpg';
    } else this.image = './assets/imagem1.png'
  }


}
