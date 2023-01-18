import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any = []
  
  constructor(
    private userService : UserService
  ){ }

  ngOnInit(): void {
    this.userService.getAllUsers()
    .subscribe((data) => 
    console.log(data))
    // this.users = data)
    // console.log(this.users)
  }
  
}
