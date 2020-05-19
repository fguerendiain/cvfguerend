import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = 'http://localhost:4780/v1/';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  constructor(private http: HttpClient) {}

  public sendMessage(body) {
    const req: string = endpoint + 'sendMail';
    console.log(req + JSON.stringify(body));
    return this.http.post(req, body);
  }

}
