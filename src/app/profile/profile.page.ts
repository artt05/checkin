import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  user = {
    name: 'John Doe',
    id: '12345',
    email: 'john.doe@company.com',
    department: 'Engineering',
    role: 'Software Developer',
  };
  constructor() {}

  ngOnInit() {}
}
