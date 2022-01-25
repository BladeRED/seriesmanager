import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  token!: BehaviorSubject<string>;
  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signin(user: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // if you enter the correct user and password, you will have the token of connexion, else you will have the reject msg //
      if (user === 'Administrateur' && password === 'azerty') {
        this.token.next('TuEsUnSorcierHarryDu42!');
        resolve();
      } else {
        reject('Quel erreur du joueur français!');
      }
    });
  }

  signOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.token.next('');
      resolve();
    });
  }
}
