import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../library.service'

@Component({
  selector: 'app-issuebookrecord',
  templateUrl: './issuebookrecord.component.html',
  styleUrls: ['./issuebookrecord.component.css']
})
export class IssuebookrecordComponent implements OnInit {

  booklist: any = [];
  dtOptions:any;
  bookname: any;
  username: any;
  authorname:any;
  p: number = 1;
  clicked: boolean = false;
  constructor(private lib: LibraryService) {

  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 15, 25],
      processing: true

    };
    this.lib.getissueBookList().subscribe((result) => {
      console.warn(result)

      this.booklist = result;
    })

  }
  search() {
    if (this.bookname == "") {
      this.ngOnInit();
    }
    else {
      this.booklist = this.booklist.filter(res => {
        return res.bookname.toLocaleLowerCase().match(this.bookname.toLocaleLowerCase());
      })
    }
  }
  searchauthorname() {
    if (this.username == "") {
      this.ngOnInit();
    }
    else {
      this.booklist = this.booklist.filter(res => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  usernameearch() {
    if (this.username == "") {
      this.ngOnInit();
    }
    else {
      this.username = this.booklist.filter(res => {
        return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      })
    }
  }
  key: string = 'id';
  revers: boolean = false;
  sort(key) {
    this.key = key;
    this.revers = !this.revers;
  }
  disable() {
    this.clicked = true;
  }



}

