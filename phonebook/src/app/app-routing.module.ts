import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddPhoneComponent} from './add-phone/add-phone.component'
import {UpdatePhoneComponent} from './update-phone/update-phone.component'
import {ListPhoneComponent} from './list-phone/list-phone.component'

const routes: Routes = [
  {
    component:AddPhoneComponent,
    path:'add'
    
  },
  
  {
    component:UpdatePhoneComponent,
    path:'update/:id'
  },
  {
    component:ListPhoneComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
