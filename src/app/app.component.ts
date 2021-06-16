import { Component } from '@angular/core';
import{LibraryService} from './library.service'
declare let alertify:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Librarymanagement';
  username:any;
  username1:any;
  constructor(private lib:LibraryService){}
  logoutt()
  {
    this.lib.logout();
    this.username1="";
    
      alertify.alert('Thank you....!', 'You have successfully logout.....!!');
    
    
  }
  usernameshow()
  {
    //this.username=this.lib.configData.username;
    //this.username1=this.username
    if(Boolean(sessionStorage.getItem('authenticate')) === true)
    {
      this.username=this.lib.configData.username;
    this.username1=this.username
    
    }
    else{
      alertify.alert('Error!', 'You have already logout.....!!');
      
    }
  }
}
