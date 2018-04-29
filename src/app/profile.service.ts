import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '66e4ba12b144ad61cfeb';
  private clientsecret = 'f818243860edae997bc1c165763adfb4e404e574';

  constructor(private http:Http) {
   console.log("service is now ready!");
   this.username = 'macmillan';
  }

getProfileInfo(){
 return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
 .map(res => res.json());
  }

}
