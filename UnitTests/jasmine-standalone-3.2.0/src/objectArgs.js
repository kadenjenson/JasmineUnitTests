// const bank = {
//   accountNum: 454812259,
//   name: 'John Doe',
//   balance: 1257
// }

// const bankInfo = ({accountNum, name, balance}) => {
//   return (`Hi ${name}! Your current balance is $${balance}. Account#: ${accountNum}.`)
// }

// bankInfo(bank);

const user = {
  username: "bagel17th"
}

const loginEvent = ({username, status = 'active'}) => {
	return (`${username} is ${status}`);
}

loginEvent(user);