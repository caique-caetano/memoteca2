import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent {
  listaPensamentos = [

        {
          conteudo: 'Passo informações para o componente filho.',
          autoria: 'Componente Pai',
          modelo: 'modelo3'
        },
        {
          conteudo: 'Minha propriedade é decorada com @Input()',
          autoria: 'Componente Filho',
          modelo: 'modelo1'
        },
        {
          conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.         Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
          autoria: 'Componente Pai',
          modelo: 'modelo3'
        },

  ];

}
