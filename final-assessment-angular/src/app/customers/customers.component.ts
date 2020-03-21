import { Component, OnInit } from '@angular/core';
import{RouterModule,Router} from '@angular/router';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router:Router,private service:ServiceService) { }
   search;
   contacts;
  ngOnInit(): void {
    this.service.getContacts().subscribe((data)=>{
      this.contacts=data;
    })
  }
  addContact(){
    this.router.navigate(['/newContact']);
  }
  editContact(firstname){
    this.router.navigate(['/customers',firstname]);
  }

}
