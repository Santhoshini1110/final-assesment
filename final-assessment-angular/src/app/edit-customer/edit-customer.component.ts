import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {ServiceService} from '../service.service';
@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  firstname;
  lastname;
  email;
  address;
  city;
  state;

  constructor(private service:ServiceService,private active:ActivatedRoute,private router:Router) { }
 contact;
  ngOnInit(): void {
    let firstname=this.active.snapshot.paramMap.get('firstname');
    this.contact=this.service.getContactById(firstname);
  }



update(firstname){
  const contact={
    firstname:this.firstname,
    lastname:this.lastname,
    email:this.email,
    address:this.address,
    city:this.city,
    state:this.state,
  }
  this.service.updateContact(firstname,contact);
}
delete(firstname){
   this.service.deleteContact(firstname);
}
cancel(){
   this.router.navigate(['/contacts']);
}

}