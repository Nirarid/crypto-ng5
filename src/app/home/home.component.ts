import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: string = ""
  pass: string = ""
  token: string = ""

  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {

    alert(this.user + " - " + this.pass);
    /*this.graphqlUsersService.tokenAuth(this.user, this.pass)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
      this.token =  JSON.parse(JSON.stringify(data)).tokenAuth.token;

    }, (error) => {
       console.log('there was an error sending the query', error);
    });*/
  
  } 

}
