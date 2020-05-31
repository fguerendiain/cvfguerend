import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const endpoint = 'http://franco.guerendiain.com.ar:5182/v1/';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {

  response:any;

  constructor(private http: HttpClient) {}

  public sendMessage(body) {
    const req: string = endpoint + 'sendMail';
    return this.http.post<{emailSend:boolean}>(req, body);
  }

}
