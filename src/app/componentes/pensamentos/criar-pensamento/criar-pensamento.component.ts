import { Router } from '@angular/router';
import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor (
    private service: PensamentoService,
    private router: Router
    ) {}

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=> {
      this.router.navigate(['/listarPensamento'])
    })
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
