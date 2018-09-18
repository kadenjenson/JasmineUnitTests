// describe("bank", function() {
//     it("has the starter code", function() {
//         expect(bank.accountNum).toEqual(454812259);
//         expect(bank.name).toEqual("John Doe");
//         expect(bank.balance).toEqual(1257);
//     });
//     it("errors were fixed", function() {
//         expect(bankInfo(bank)).toEqual("Hi John Doe! Your current balance is $1257. Account#: 454812259.")
//     });
// });

describe("user", function() {
  it("has the starter code", function() {
    expect(user.username).toEqual(jasmine.any(String));
  });
  it("changes status", function() {
    expect(loginEvent(user)).toContain("is active");
  });
});