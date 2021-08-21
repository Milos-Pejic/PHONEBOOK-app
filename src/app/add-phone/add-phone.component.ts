import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-phone',
  templateUrl: './add-phone.component.html',
  styleUrls: ['./add-phone.component.css'],
})
export class AddPhoneComponent implements OnInit {
  constructor(private phoneService: PhoneService, private routeri: Router) {}

  ngOnInit(): void {}
  addPhone: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('')]),
  });

  collectPhone() {
    this.phoneService.savePhone(this.addPhone.value).subscribe((result) => {
      this.addPhone.reset({});
      this.routeri.navigate(['/']);
    });
  }
}
