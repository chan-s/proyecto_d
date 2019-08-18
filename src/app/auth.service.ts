import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  public isLoginSuccess: boolean = false
  public appUserProfile: any = {}

  constructor(private angularFireAuth: AngularFireAuth) { }

  async signIn(): Promise<boolean> {
   // let isLogin: boolean = false
    let provider = new auth.GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    this.appUserProfile = await this.angularFireAuth.auth.signInWithPopup(provider)

    if (Object.keys(this.appUserProfile).length > 0) {
      
      this.isLoginSuccess = true
    }

    return Promise.resolve(this.isLoginSuccess)
  }

  isAuthenticate() {
    return this.isLoginSuccess
  }

  async logOut():  Promise<boolean> {
    await this.angularFireAuth.auth.signOut()
    return Promise.resolve(false)
  }

  getRolesByUser() {

  }
}
