export class AuthService {
  loggedIn = false;

  isAuthenticated()
  {
    const propmise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {resolve(this.loggedIn)} , 800);
      }
    );
    return propmise;
  }

  logIn()
  {
    this.loggedIn = true;
  }

  logOut()
  {
    this.loggedIn = false;
  }
}
