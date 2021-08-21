import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PhoneService } from '../phone.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-phone',
  templateUrl: './update-phone.component.html',
  styleUrls: ['./update-phone.component.css'],
})
export class UpdatePhoneComponent implements OnInit {
  editPhone: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    phone: new FormControl(''),
  });
  constructor(
    private router: ActivatedRoute,
    private phoneService: PhoneService,
    private routeri: Router
  ) {}

  ngOnInit(): void {
    this.phoneService
      .getCurrentPhone(this.router.snapshot.params.id).subscribe((res: any) => {
        this.editPhone = new FormGroup({
          first_name: new FormControl(res.data['first_name']),
          last_name: new FormControl(res.data['last_name']),
          phone: new FormControl(res.data['phone']),
        });
      });
  }
  updateContact() {
    this.phoneService
      .updatePhone(this.router.snapshot.params.id, this.editPhone.value)
      .subscribe((result) => {
        this.routeri.navigate(['/']);
      });
  };
}
