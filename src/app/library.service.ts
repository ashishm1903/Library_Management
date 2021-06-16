import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { tap } from 'rxjs/operators'; 
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  configData:any=[];
  constructor(private http:HttpClient,private rout:Router) { }
  originUrl="http://localhost:4200/"
  url="http://localhost:3000/issuebooknamelist"
  bookurl="http://localhost:3000/booklist"
  authorurl="http://localhost:3000/authorlist"
  getissueBookList()
  {
    return this.http.get(this.url)
  }
  getissueBookListforpopup(id)
  {
    return this.http.get(this.url+ '/' +id)
  }
  BookList()
  {
    return this.http.get(this.bookurl)
  }
  saveissuebook(data)
  {
    return this.http.post(this.url,data)
  }
  //for drop down
  getBook()
  {
  return this.http.get(this.bookurl)
  }
  getAuthor()
  {
  return this.http.get(this.authorurl)
  }
  loadConfigurationData(): Promise<any> {
    return this.http.get<any>(`${this.originUrl}/assets/app.config.json`)
    .pipe(tap(result => {
      this.configData = result;
    }))
    .toPromise();
  }
  logout()
  {
    sessionStorage.clear()
    this.rout.navigate['/']

  }
}
