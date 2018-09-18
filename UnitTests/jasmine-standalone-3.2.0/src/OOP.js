class Account {
	constructor({ username, password = "test"}) {
		this.username = username;
		this.password = password;
	}

	suckIt() {
		console.log(7)
	}
}

const user = new Account({ username: 'bagel17th', password: 'asdfasdf'});
console.log(user.username)