import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-loginview',
  templateUrl: './loginview.component.html',
  styleUrls: ['./loginview.component.css']
})
export class LoginviewComponent implements OnInit {

  public username: String;
  public password: String;

  constructor(private userService: UserService) { }

  ngOnInit() {

  }


  onClick(): void {

    this.userService.login(this.username, this.password)
      .subscribe(res => {
        console.dir(res);
      });


  }
}
