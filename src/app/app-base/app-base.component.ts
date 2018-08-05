import { Component, OnInit,Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-app-base',
  templateUrl: './app-base.component.html',
  styleUrls: ['./app-base.component.css']
})
export class AppBaseComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];
  title :string='Additional Facility';
  subTitle:string='Create';
  mode:string;
  executeFunction: Function;
  constructor(public route: ActivatedRoute,
    public router: Router) {

     }

  ngOnInit() {
    this.initialize();
  }
/**
 * callSuperInit
 */
public initialize() {
  this.mode = this.route.snapshot.paramMap.get('mode');
    this.selectMode();
    
}
  private selectMode(){
    switch (this.mode) {
      case 'create':
        this.subTitle="Create";
        // this.executeFunction=this.create;
        
        break;
      case 'update':
        this.subTitle="Update";
        // this.executeFunction=this.update;
      default:
        break;
    }

  }

  private create() {
    alert('create');
  }
  private update() {
    alert('updated');
  }

  private getFields() {
    // this.fields=this._branchService.getBranchFields();
  }

}
