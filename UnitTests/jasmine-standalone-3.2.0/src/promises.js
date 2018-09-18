let latestTweet = new Promise((success, reject) => {
	// setTimeout(() => {
	// 	success('See newest Tweets')
	// }, 2000);

	setTimeout(() => {
		reject(Error('No new Tweets'))
	}, 2000);
});

latestTweet
	.then(data => {
		console.log(data);
	})
	.catch(err => {
		console.log(err);
	});