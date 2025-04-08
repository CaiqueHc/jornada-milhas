import { Component } from '@angular/core';
import { FormularioService } from '../../core/services/formulario.service';
import { CadastroService } from '../../core/services/cadastro.service';
import { PessoaUsuario } from '../../core/types/types';

@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  perfilComponent = false;

  constructor(
    private formularioService: FormularioService,
    private cadastroService: CadastroService
  ) {}

  cadastrar() {
    const formCadastro = this.formularioService.getCadastro();


    if(formCadastro?.valid){
      const novoCadastro = formCadastro.getRawValue() as PessoaUsuario;
      this.cadastroService.cadastrar(novoCadastro).subscribe({
        next: (value) => {},
        error: (err) => {}
      })
    }
  }
}
