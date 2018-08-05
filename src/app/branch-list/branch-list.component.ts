import { Component, OnInit } from '@angular/core';

export interface BranchDisplayInfo {
    BranchName: String;
    BranchCode: String;
    DBAName: String;


}
const ELEMENT_DATA: BranchDisplayInfo[] = [
 {BranchName: 'Aldo', BranchCode: 'BR300', DBAName: 'AldoMegamall'},
 {BranchName: 'Bench', BranchCode: 'BR300', DBAName: 'Bench'}

];

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {
  displayedColumns: string[] = ['BranchName', 'BranchCode', 'DBAName', 'Attachment'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
