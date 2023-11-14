import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  whyVideoPalOptions: boolean = false;
  companyOptions: boolean = false;
  resourcesOptions: boolean = false;
  policiesOptions: boolean = false;

  showWhyVideoPalOptions() {

    this.whyVideoPalOptions = !this.whyVideoPalOptions;
  }

  showCompanyOptions() {

    this.companyOptions = !this.companyOptions;
  }

  showResourcesOptions(){

    this.resourcesOptions = !this.resourcesOptions;
  }

  showPoilciesOptions() {

    this.policiesOptions = !this.policiesOptions;
  }

}
