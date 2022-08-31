/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const { isCheckout} = require("../lib/checkoutBranch");
const { isRename } = require("../lib/renameBranch");

module.exports = async function (helper) {
  const { answer1, answer2 } = helper.validationFields;

  if (!answer1 || !isCheckout(answer1)) {
    return helper.fail(`
    Your first answer is incorrect. Please try again. Hint: It includes -b flag and checkout keyword
    `);
  }
  
  if (!answer2 || !isRename(answer2)) {
    return helper.fail(`
    your second answer is incorrect. Please try again. Hint: It includes -m flag.
    `);
  }

  helper.success(`
    Hooray! You did it! 
  `);
};
