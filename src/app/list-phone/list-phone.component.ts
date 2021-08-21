import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-list-phone',
  templateUrl: './list-phone.component.html',
  styleUrls: ['./list-phone.component.css'],
})
export class ListPhoneComponent implements OnInit {
  contacts: Contact[] = [];
  inputValue: string = '';

  constructor(private phoneService: PhoneService) {}

  ngOnInit(): void {
    this.phoneService.getList().subscribe((res: any) => {
      this.contacts = res.data;
    });
  }
  deletePhone(id: string, index: number) {
    if (
      confirm('Are you sure you want to save this thing into the database?')
    ) {
      this.phoneService.deletePhone(id).subscribe((result) => {
        this.contacts.splice(index, 1);
      });
      console.log('Thing was saved to the database.');
    } else {
      console.log('Thing was not saved to the database.');
    };
  };
}
