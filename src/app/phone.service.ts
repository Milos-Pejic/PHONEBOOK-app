import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Contact } from './shared/contact.model';
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  url: string = "http://45.32.157.171:8000/api/contacts"
  
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url);
  }
  savePhone(data: Contact ) {
    return this.http.post(this.url, data);
  }
  deletePhone(id:string){
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentPhone(id:string){
    return this.http.get(`${this.url}/${id}`);
  }
  updatePhone(id:string, data:Contact){
    return this.http.put(`${this.url}/${id}`,data);
  }
}
