import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import { Service, Company } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Service]
})
export class AppComponent {
  name: String;
  dataSource: Company[];

  constructor(service: Service) {
    this.dataSource = service.getCompanies();
  }

  sayHello(params) {
    if (params.validationGroup.validate().isValid) {
      notify('Hello ' + this.name + ' !', "info", 2000);
    }
  }
}
