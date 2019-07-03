import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registerview',
  templateUrl: './registerview.component.html',
  styleUrls: ['./registerview.component.css']
})
export class RegisterviewComponent implements OnInit {

  public login: String;
  public password: String;
  public confirmPass: String;
  public name: String;
  public city: String;
  public contact: String;


  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onClick(): void {

  }
  checkValidation(pass: String): Boolean {
    return true;
  }

}
