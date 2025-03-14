import { Component } from '@angular/core';

@Component({
  selector: 'app-depoiments',
  standalone: false,
  templateUrl: './depoiments.component.html',
  styleUrl: './depoiments.component.scss'
})
export class DepoimentsComponent {
  depoimento: string = `Recomendo fortemente a agência de viagens Jornada.
    Eles oferecem um serviço personalizado e de alta qualidade
    que excedeu minhas expectativas em minha última viagem.`;
  autoria: string = 'Dino S. Sauro'
}
