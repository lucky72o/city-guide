import firebase from 'firebase'

export class AuthService {

  private authenticated = false;

  setAuthenticated(authenticated: boolean) {
    this.authenticated = authenticated;
  }

  isAuthenticated() {
    return this.authenticated;
  }

  signup(email: string, password: string) {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }

  sigin(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  sighOut() {
    firebase.auth().signOut();
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }
}
