import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {

  firstname;
  lastname;
  email;
  address;
  city;
  state;
  customer;
  constructor(private service:ServiceService) { }

  ngOnInit(): void {
  }
  create(){
   const customer={
      firstname:this.firstname,
      lastname:this.lastname,
      email:this.lastname,
      address:this.address,
      city:this.city,
      state:this.city,
    }
    this.service.CreateContact(customer);
    alert("inserted successfully");
  }
}
