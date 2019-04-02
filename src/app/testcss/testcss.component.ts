import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-testcss',
  templateUrl: './testcss.component.html',
  styleUrls: ['./testcss.component.css'],
  providers: [NgbProgressbarConfig]
})
export class TestcssComponent implements OnInit {
  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit() {}
}
