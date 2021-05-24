import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  hasProfile(emailInput: string): any {
    return this.httpClient.get(`http://localhost:8080/profile/email/${emailInput}`);
  }

  getAllCultures(): any {
    return this.httpClient.get(`http://localhost:8080/culture`);
  }

  getAllTimeZones(): any {
    return this.httpClient.get(`http://localhost:8080/timeZone`);
  }

  createProfile(email: string, timeZone: string, culture: string): any {
    const body = {
      timeZone,
      culture
    }
    return this.httpClient.put(
      `http://localhost:8080/profile/email/${email}`,
      body
    );
  }
}
