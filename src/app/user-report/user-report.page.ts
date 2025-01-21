import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.page.html',
  styleUrls: ['./user-report.page.scss'],
  standalone: false,
})
export class UserReportPage implements OnInit {
  constructor() {}
  report = {
    date: '2024-01-15',
    inTime: '09:00 AM',
    outTime: '05:00 PM',
    totalHours: '8h',
  };

  ngOnInit() {}
}
