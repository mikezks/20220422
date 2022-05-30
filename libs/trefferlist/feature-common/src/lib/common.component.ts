import { Component, OnInit } from '@angular/core';
import { CommonFacade } from '@projected-routes/trefferlist/domain';

@Component({
  selector: 'trefferlist-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  constructor(private commonFacade: CommonFacade) {}

  ngOnInit() {}
}
