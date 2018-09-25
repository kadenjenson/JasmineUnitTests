let latestTweet = new Promise((success, reject) => {
	setTimeout(() => {
		success('See newest Tweets')
	});

	setTimeout(() => {
		reject(Error('No new Tweets'))
	});
});

latestTweet
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});