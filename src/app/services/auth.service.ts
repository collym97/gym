import { Injectable } from '@angular/core';
import { Auth,signInWithEmailAndPassword,signOut,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  login({email,password}: any) {
    return signInWithEmailAndPassword(this.auth,email,password);
  }
  register({email,password}: any) {
    return createUserWithEmailAndPassword(this.auth,email,password);
  }

  logauth() {
    return signOut(this.auth)
   

  }
  loginwithgoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider)
  }
  }


