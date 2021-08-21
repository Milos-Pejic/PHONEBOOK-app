import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { UpdatePhoneComponent } from './update-phone/update-phone.component';
import { ListPhoneComponent } from './list-phone/list-phone.component';
import {HttpClientModule} from '@angular/common/http'
import {FilterPipe} from './pipes/filter.pipe'



@NgModule({
  declarations: [
    AppComponent,
    AddPhoneComponent,
    UpdatePhoneComponent,
    ListPhoneComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
