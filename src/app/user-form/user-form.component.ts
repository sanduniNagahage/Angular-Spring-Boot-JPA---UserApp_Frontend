import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  user: User;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(
      result => this.goToUserList()
    );
  }

  goToUserList() {
    this.router.navigate(['/user']);
  }

}
