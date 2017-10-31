# Decisões técnicas

## Angular

* Baseado em TypeScript um projeto open-source de front-end criado pelo time da Google. Angular é um framework construído para rolar no cliente (client applications). 

* No Angular temos: 

  * Templates;
  * Injeção de dependências;
  * Modularização;
  * Diretivas;
  * Componentes;
  * Services;
  * Rotas.

* Grande vantagem em utilizar o Angular é pela sua ótima maneira de organizar o projeto, podemos criar módulos independentes, criar vários componentes de maneira simples.

* Exemplo de criação de um módulo:

  ```TypeScript
  import { BookFormService } from './book-form/book-form.service';
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { BookFormComponent } from './book-form/book-form.component';

  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [BookFormComponent],
    providers: [BookFormService]
  })
  export class BookModule { }
  ```

  * Componente

  ```typescript
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

  export class AppComponent {}
  ```

  * Rotas

  ````typescript
  import { NgModule } from "@angular/core";
  import { Routes, RouterModule } from "@angular/router";
  import { ClientFormComponent } from "./client/client-form/client-form.component";
  import { BookFormComponent } from './book/book-form/book-form.component';

  const appRoutes: Routes = [  
    { path: 'client', component: ClientFormComponent},
    { path: 'book', component: BookFormComponent},
    { path: '', pathMatch: 'full', redirectTo: 'client' }
  ]

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {

  }
  ````

  ​


##  Bootstrap

* É um framework front-end que facilita a vida dos desenvolvedores web a criar sites com tecnologia mobile (responsivo) sem ter que digitar uma linha de CSS.

* Características:

  * Possui uma interface super amigável e moderna;
  * Atualmente possui uma grande diversidade de themas;
  * Grande quantidade de plugins adaptados ou desenvolvidos para o framework;
  * Integração com qualquer linguagem de programação;
  * Sistema responsivo;
  * Um dos frameworks mais utilizados no desenvolvimento de portais e sistemas do mundo.



## TypeScript

  * TypeScript crida pela Microsoft que seria um super biblioteca de javascript além de implementar funcionalidades do ES6 traz mais funcionalidades. Traz uma melhor organização do código. O TypeScript tem uma sintaxe mais clara e fácil de entender. Segue o exemplo.

**TypeScript**
```typescript
class HelloWorld {
  text: string;
  constructor(text: string) {
    this.text = text;
  }
  let text = new HelloWorld("Hello World!");
  console.log(text);
}
```

**Javascript**
```javascript
var HelloWorld = (function () {
  function HelloWorld(text) {
    this.text = text;
  }
  return HelloWorld;
})();
var text = new HelloWorld("Hello World!");
console.log(text);
```



## Less

* Pré-processador de CSS3 com funcionalidades para o CSS sem quebrar a compatibilidade entre browseres;
* Utiliza sintaxe padrão do CSS;
* Variáveis: Podem ser declaradas e usadas através das folhas de estilo. Elas podem ter qualquer valor que seja um valor em CSS;
* Mixins: São funções que permitem reusar propriedades através de nossas folhas de estilo;
* Herança: É a habilidade de outros seletores CSS herdarem as propriedades de outro seletor;
* Importação: Possibilita importar um arquivo LESS.

```CSS
@blue: #3b6caa;

.blue {
    color: @blue !important;
}
```

## Webpack

* Um bundler (empacotador) de módulos JavaScript.
* Ele cuida do empacotamento e retorna um único arquivo pronto para ser interpretado pelo navegador.
* Eliminação de ativos inutilizados.
* Um ótimo sistema / loader para usar módulos nosso JavaScript.
* Ótimos plugins pra agilizar mais ainda o processo de desenvolvimento, integrando com o Babel, minificação dos assets e etc.