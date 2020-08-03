import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getTestBed } from '@angular/core/testing';
import { Test } from '../model/test';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private readonly URL = 'http://localhost:3000/tests';
  constructor(private http: HttpClient) {}

  getTests(){
    return this.http.get(this.URL)
  }

  postTests(test: Test){
    return this.http.post(this.URL, test)
  }

  updateTest(test:Test, id:string){
    return this.http.put(this.URL+'/${id}',test)
  }

  deleteTest(id:string){
    return this.http.delete(this.URL+'/${id}')
  }
  
  getOneTest(id:string){
    return this.http.get(this.URL+'/${id}')
  }
}
