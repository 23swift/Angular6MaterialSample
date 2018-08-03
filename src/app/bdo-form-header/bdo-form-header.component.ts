import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bdo-form-header',
  templateUrl: './bdo-form-header.component.html',
  styleUrls: ['./bdo-form-header.component.css'],
  inputs: ['text','sub_text'],
})
export class BdoFormHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
