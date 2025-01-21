import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
  standalone: false,
})
export class ReportsPage implements OnInit {
  users = [{ name: 'John Doe' }, { name: 'Jane Smith' }];
  constructor(private router: Router) {}

  ngOnInit() {}
  viewUser(name: string) {
    this.router.navigate(['reports/user', name]);
  }
}
