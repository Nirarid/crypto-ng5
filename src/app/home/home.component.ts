import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { GraphqlUsersService} from '../graphql.users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: string = ""
  password: string = ""
  token: string = ""
  email: string = ""
  

  constructor(
    //private _data: DataService,
    private graphqlUsersService : GraphqlUsersService 
  ) { }

  ngOnInit(): void {
  }

  loginUser() {

    alert(this.user + " - " + this.password);
    this.graphqlUsersService.tokenAuth(this.user, this.password)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
      this.token =  JSON.parse(JSON.stringify(data)).tokenAuth.token;

    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
  }
  
  signUser() {

    alert(this.user + " - " + this.password);
    this.graphqlUsersService.createUser(this.user, this.email, this.password)
    .subscribe(({ data }) => {
       console.log('logged: ', JSON.stringify(data));
      this.token =  JSON.parse(JSON.stringify(data)).tokenAuth.token;

    }, (error) => {
       console.log('there was an error sending the query', error);
    });
  
  }

}
