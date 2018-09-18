class Car {
	constructor({ year, brand, poweredBy = 'gas' }) {
		this.year = year;
		this.brand = brand;
		this.poweredBy = poweredBy;
	}

	carSpecs() {
		return(`The ${this.year} ${this.brand} runs on ${this.poweredBy}`)
	}
}

const model3 = new Car({ year: 2018, brand: 'Tesla', poweredBy: 'electricity' });
const wrx = new Car({ year: '2017', brand: 'Subaru' });