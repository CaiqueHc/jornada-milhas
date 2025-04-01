import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../shared/modal/modal.component';
import { MatChipSelectionChange } from '@angular/material/chips';

@Injectable({
  providedIn: 'root',
})
export class FormBuscaService {
  formBusca: FormGroup;

  constructor(public dialog: MatDialog) {
    this.formBusca = new FormGroup({
      somenteIda: new FormControl(false),
      origem: new FormControl(null),
      destino: new FormControl(null),
      tipo: new FormControl('Executiva'),
      adultos: new FormControl(1),
      criancas: new FormControl(0),
      bebes: new FormControl(0),
    });
  }

  getDescricaoPassageiro(): string {
    let descricao = '';
    const adultos = this.formBusca.get('adultos')?.value;
    const criancas = this.formBusca.get('criancas')?.value;
    const bebes = this.formBusca.get('bebes')?.value;

    if (adultos && adultos > 0)
      descricao += `Passagem do tipo adulto com ${adultos} adulto${
        adultos > 1 ? 's' : ''
      }`;
    if (criancas && criancas > 0)
      descricao += `${
        descricao ? ', ' : ''
      }Passagem do tipo criança com  ${criancas} criança${
        criancas > 1 ? 's' : ''
      }`;
    if (bebes && bebes > 0)
      descricao += `${
        descricao ? ', ' : ''
      }Passagem do tipo bebê com ${bebes} bebe${bebes > 1 ? 's' : ''}`;

    return descricao;
  }

  obterControle(nome: string): FormControl {
    const control = this.formBusca.get(nome);
    if (!control) {
      throw new Error(`FormControl com nome "${nome}" não existe.`);
    }
    return control as FormControl;
  }

  openDialog() {
    this.dialog.open(ModalComponent, {
      width: '50%',
    });
  }

  alterarTipo(evento: MatChipSelectionChange, tipo: string) {
    if (evento.selected) {
      this.formBusca.patchValue({
        tipo,
      });
      console.log(`Tipo alterado para: ${tipo}`);
    }
  }

  trocarOrigemDestino(): void {
    const origem = this.formBusca.get('origem')?.value;
    const destino = this.formBusca.get('destino')?.value;

    this.formBusca.patchValue({
      origem: destino,
      destino: origem,
    });
  }
}
