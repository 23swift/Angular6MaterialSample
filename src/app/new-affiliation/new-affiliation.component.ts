import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { NewAffiliationService } from './new-affiliation.service';
//import {FormlyFieldConfig} from 'ng-formly';
@Component({
  selector: 'app-new-affiliation',
  templateUrl: './new-affiliation.component.html',
  styleUrls: ['./new-affiliation.component.css'],
  encapsulation:ViewEncapsulation.None

})
export class NewAffiliationComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields:FormlyFieldConfig[];
  title='New Affiliation';
  subText='Create';
      
  constructor(private newAffiliationService: NewAffiliationService) { 
    
     this.fields=newAffiliationService.getPosFields();
  }

  ngOnInit() {
   

  }

  
  
  submit(model) {
    console.log(model);
  }
}
