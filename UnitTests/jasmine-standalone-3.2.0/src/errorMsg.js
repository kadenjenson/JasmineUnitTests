class SocialMediaError extends Error {
	constructor(msg = 'Theres an issue with', ...params) {
		super(...params);

		this.msg = msg;
	}
}

// console.log(Object.getOwnPropertyNames(SocialMediaError.prototype));