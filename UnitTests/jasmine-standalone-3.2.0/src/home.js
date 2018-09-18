class Home {
	constructor({ type, payment = "renting" }) {
		this.type = type;
		this.payment = payment;
	}

	static homeImprovement(yourHome) {
		return (yourHome.payment === 'morgage')
	}
}

let choice1 = new Home({ type: 'house', payment: 'morgage' });
let choice2 = new Home({ type: 'apartment' });