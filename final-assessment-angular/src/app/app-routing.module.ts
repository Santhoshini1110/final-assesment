import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';


const routes: Routes = [
  {
    path:'customers',component:CustomersComponent
  },
  {
    path:'customers/:firstname',component:EditCustomerComponent
  },
  {
    path:'newContact',component:NewCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
