import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h3>Hello, application made on visual studio 2017 with {{name}}</h3>`,
})
export class AppComponent  { name = 'Angular 5 + ASP.NET Framework'; }
