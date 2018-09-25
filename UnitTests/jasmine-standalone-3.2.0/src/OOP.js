class Account {
	constructor({ username, password = "test"}) {
		this.username = username;
		this.password = password;
	}

	suckIt() {
		console.log(7)
	}
}

const admin = new Account({ username: 'bagel17th', password: 'asdfasdf'});
console.log(admin.username)