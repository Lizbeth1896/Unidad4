import { Component } from '@angular/core';
import { SessionsService } from 'src/app/services/sessions.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any = []
  
  constructor(
    private userService : UserService,
  ){ }

  onSubmit() {
    this.userService.getAllUsers().subscribe((data: any) => {
      if (data.token) {
        sessionStorage.setItem("Token", data.token)
      }
      console.log(data);
    })
  }

  // logout(): void {
  //   sessionStorage.removeItem('Token');
  //   this..next(null);
  //   this.router.navigate(['/login']);
  // }
  
}
