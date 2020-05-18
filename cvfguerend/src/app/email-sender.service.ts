import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailSenderService {

  constructor(private http: HttpClient) {}
 
  sendMessage(body) {
    return this.http.post('localhost:4780/v1/sendMail', body);
  }
}
