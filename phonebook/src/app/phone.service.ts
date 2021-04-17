import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PhoneService {
  url: string = "http://45.32.157.171:8000/api/contacts"
  urlSearch:string='http://45.32.157.171:8000/api/search-contacts'
  
  constructor(private http: HttpClient) { }
  getList() {
    return this.http.get(this.url)
  }
  savePhone(data: any) {

    return this.http.post(this.url, data)
  }
  deletePhone(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getCurrentPhone(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updatePhone(id:any, data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  searchFilter(value:string){
    return this.http.get(`${this.urlSearch}?letters=${value}`)
  }
}
