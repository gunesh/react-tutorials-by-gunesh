const users = [
  { email: 'kim@test.com', password: '123', name: 'Kim' },
  { email: 'lee@test.com', password: '456', name: 'Lee' },
  { email: 'park@test.com', password: '789', name: 'Park' }
]

const auth = {
  user: null,
  isAuthenticated() {
    return this.user != null;
  },
  signIn({ email, password }) {
    this.user = users.find(user => user.email === email && user.password === password);
    return this.isAuthenticated();
  },
  signOut() {
    this.user = null;
  }
}

window.auth = auth;

export default auth;

