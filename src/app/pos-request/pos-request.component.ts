import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { PosFieldsService } from '../services/pos-fields.service';
import {MatDatepickerModule} from '@angular/material/datepicker';

@Component({
  selector: 'app-pos-request',
  templateUrl: './pos-request.component.html',
  styleUrls: ['./pos-request.component.css']
})
export class PosRequestComponent implements OnInit {
 form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields:FormlyFieldConfig[];
  title='Pos Request';
  subText='Create';    
  constructor(private posFieldService: PosFieldsService) { 
    
     this.fields=posFieldService.getPosFields();
  }

  ngOnInit() {
   

  }

  
  
  submit(model) {
    console.log(model);
  }

}
