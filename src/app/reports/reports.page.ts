import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: false,
})
export class ReportsPage implements OnInit {
  users = [{ name: 'John Doe' }, { name: 'Jane Smith' }];
  constructor() {}

  ngOnInit() {}
}
