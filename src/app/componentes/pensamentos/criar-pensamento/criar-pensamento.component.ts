import { Pensamento } from './../pensamento';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Agular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  criarPensamento(){
    alert("Novo pensamento criado!")
  }
  cancelar(){
    alert("Ação cancelada!")
  }

}
