import { Component, OnInit } from '@angular/core';
import{FormControl, FormControlName, FormGroup, Validators} from '@angular/forms'
import {NgbCalendar, NgbDate, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import{LibraryService} from '../library.service'
import{Router}from '@angular/router'
import{ActivatedRoute} from '@angular/router';

declare var jQuery: any;
declare let alertify:any;

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {
  model: NgbDateStruct;
  issuebookdate;
  booklist:any=[];
  issuebook=new FormGroup({
    username:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    bookname:new FormControl(''),
    adharno:new FormControl('',[Validators.required,Validators.maxLength(12)]),
    mobilenumber:new FormControl(''),
    authorname:new FormControl(''),
    time:new FormControl('',Validators.required)
   

  })
  constructor(private calendar:NgbCalendar,private libr:LibraryService,private rout:Router,private active:ActivatedRoute) {
   
  }

  ngOnInit(): void {
    this.libr.BookList().subscribe((result)=>{
      this.booklist=result;
      console.warn(result)
    })

  

  }
  
  
  onsubmit()
  {
    if(this.username.value === "")
    {
      alertify.alert('Required...!', 'Name Of User Can Not Blank....!!');
    }
    else if(this.adharno.value === "")
    {
      alertify.alert('Required...!', 'Adhar Card Number Can Not Blank....!!');
    }
    else if(this.date.value === "")
    {
      alertify.alert('Required...!', 'Date Can Not Blank....!!');
    }
    else if(this.time.value === "")
    {
      alertify.alert('Required...!', 'Time Can Not Blank....!!');
    }
    else{

    
    this.libr.saveissuebook(this.issuebook.value).subscribe((result)=>{
      //console.warn(result)
      console.warn(this.issuebook.value)
    })
    
    alertify.alert('Book has been issue successfully','<b>Name Of User:</b>'+'   '+this.issuebook.value.username+'<br/><b>Issue Date:</b>'+'  '+this.issuebook.value.date.day+'/'+this.issuebook.value.date.month+'/'+this.issuebook.value.date.year+'   '+this.issuebook.value.time+'<br/><b>Book Name:</b>'+'  '+this.issuebook.value.bookname+'</br><b>Mobile Number:</b>'+'  '+this.issuebook.value.mobilenumber+'<br/><b>Adhar No:</b>'+'  '+this.issuebook.value.adharno+'<br/><b>Author Name:</b>'+'  '+this.issuebook.value.authorname+'');
    this.rout.navigate(['/issuebookrecord'])
  }
    
  }
  isDisabled = (date: NgbDate, current: {month: number, year: number}) => date.month !== current.month;
  isWeekend = (date: NgbDate) =>  this.calendar.getWeekday(date) >= 6;
  get username() { return this.issuebook.get('username') };
  get adharno() { return this.issuebook.get('adharno') };
  get date() { return this.issuebook.get('date') };
  get time() { return this.issuebook.get('time') };
  //for dropdown
  selectedBook = 0;
selectedAuthor = 0;
 
book:any = [];
author:any = [];
onSelectbook(id: number) {
  this.selectedBook = id;
  this.selectedAuthor = 0;
  //this.cities = [];
  this.author = this.getAuthor().filter((item) => {
  return item.id === Number(id)
  });
  }
  onSelectauthor(id: number) {
    this.selectedAuthor = id;
    this.author = this.getAuthor().filter((item) => {
    return item.id === Number(id)
    
    });
    }
  getAuthor()
  {
    return [
      {
        "id": 1,
        "bookid": 1,
        "authorname": "Ashish"
      },
      {
       "id": 2,
        "bookid": 2,
        "authorname": "Abhishek"
      },
      {
        "id": 3,
        "bookid": 3,
        "authorname": "Kartik"
      },
      {
        "id": 4,
        "bookid": 4,
        "authorname": "Aryan"
      },
      {
        "id": 5,
        "bookid": 5,
        "authorname": "Krushna"
      }
    ]
  }
  getBook()
  {
    return  [
      {
        "id": 1,
        "bookname": "Java"
        
      },
      {
        "id": 2,
        "bookname": "pyhton"
       
      },
      {
        "id": 3,
        "bookname": "ai n ml"
        
      },
    {
        "id": 4,
        "bookname": "C#"
        
      },{
        "id": 5,
        "bookname": "Javascript"
        
      }
    ]
  }
}
