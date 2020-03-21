import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  CreateContact(customer){
    return this.http.post('localhost:3000/api/insert',customer);
  }
  getContacts(){
    return this.http.get('localhost:3000/api/contacts');
  }
  getContactById(firstname){
    return this.http.get('localhost:3000/api/contact'+firstname);
  }
  updateContact(firstname,customer){
    return this.http.put('localhost:3000/api/update'+firstname,customer);
  }
  deleteContact(firstname){
    return this.http.delete('loacalhost:3000/api/delete'+firstname);
  }
}
