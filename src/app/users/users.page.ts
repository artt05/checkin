import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage {
  users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      tags: ['Engineering', 'Developer'],
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      tags: ['Marketing', 'Manager'],
    },
    {
      name: 'Mike Johnson',
      email: 'mike@example.com',
      tags: ['Sales', 'Representative'],
    },
  ];
}
