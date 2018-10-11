import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'rb-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {

  @Input() formData;

  constructor() { }

  ngOnInit() {
    console.log(this.formData)
  }

  ngOnChanges(){
    
  }
}
