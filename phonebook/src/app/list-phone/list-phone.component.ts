import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../phone.service'

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css']
})
export class ListPhoneComponent implements OnInit {
  
  contacts:any=[];
  contactsInit:any=[];
  inputValue: string='';
  
 

  constructor(private phoneService: PhoneService) { }


  ngOnInit(): void {
    this.phoneService.getList().subscribe((res:any)=>{
      console.log(res.data)
      this.contacts=this.contactsInit= res.data
    })
  }
  deletePhone(id:string, index:number){
    
    //this.phoneService.deletePhone(id).subscribe((result)=>{
    //  console.log("result", result)
    //  this.contacts.splice(index,1)
    //})
    if (confirm('Are you sure you want to save this thing into the database?')) {
       this.phoneService.deletePhone(id).subscribe((result)=>{
      console.log("result", result)
      this.contacts.splice(index,1)
    })
      console.log('Thing was saved to the database.');
    } else {
      // Do nothing!
      console.log('Thing was not saved to the database.');
    }
  }
  search(){
    console.log(this.inputValue)
    //this.phoneService.searchFilter(this.inputValue).subscribe((res:any)=>{
    //  console.log(res)
    //  this.contacts=res.data
    //})
    this.contacts= this.contactsInit.filter((contact:any)=>{
    return  contact.first_name.includes(this.inputValue)
    })
  }
  

}
