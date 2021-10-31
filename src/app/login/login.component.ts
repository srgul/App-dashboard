import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from 'app/serviceses/login.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private login:LoginService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {}

  loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  getLogin() {
    console.log(this.loginform.value)
    this.login.onsubmit(this.loginform.value).subscribe(res => {
      console.log(res)
      console.log(res.data)
      if(res.status == "200") {
        localStorage.setItem('id', res.data)
        this.router.navigate(['/dashboard'])
      } else {
        this.router.navigate(['/login'])
      }
    })
  }

}
