import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormBuscaService } from '../../core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  standalone: false,
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.scss',
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    // console.log(this.formBuscaService.formBusca.value);
  }
}
