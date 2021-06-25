import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Auth} from "../interfaces/auth.interface";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth{
    return {...this._auth!};
  }

  constructor(private _http: HttpClient) { }

  login(){
    return this._http.get<Auth>(`${this._baseUrl}/usuarios/1`)
      .pipe(
        tap(auth => this._auth = auth));
  }
}
