// BANK ACCOUNT

// Start by creating the object and the properties. You can leave the functions empty for now if you want.
// You'll find all the information about what properties the object should have in the readme file.

const account = {
  accountName:"",
  balance:100,
  getBalance:function(){},
  deposit:function(){},
  withdrawal:function(){},
  getAccountName:function(){},
  accountError:function(){},
  exitAccount:function(){},
  };

  function atm() {
    let choice = parseInt(prompt("Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));
    if (choice === 1) {
      getBalance();
    } else if (choice === 2) {
      deposit();
    } else if (choice === 3) {
      withdrawal();
    } else if (choice === 4) {
      getAccountName();
    } else if (choice === 5) {
      exitAccount();
    }
  }
  atm();
  //console.log(atm);
 

  function getBalance() {
    let totalBalance = 100;
    alert(`Your current balance is:`+ totalBalance);
    atm();
    
  }

  function deposit() {
    let makeDeposit = parseFloat(prompt("How much would you like to deposit?"));
    //The parseFloat() function is used to accept the string and convert it into a floating-point number. 
    //If the string does not contain a numeral value or If the first character of the string is not a Number then it returns NaN.
    if (isNaN(makeDeposit) || makeDeposit === "") {  
        alert(`Error: please enter a number!`);
        deposit();
    } else if (makeDeposit <= 99) {
        alert(`Error: amount at least a hundred!`);
        deposit();
    } else  {
        alert(makeDeposit);
        return this.getBalance() += this.deposit();//undefined??

      
    }

        
        
        
        
    
  }

  function withdrawal() {
    let makeWithdrawal = parseFloat(prompt("How much you want to withdrawal?"));
    if (isNaN(makeWithdrawal) || makeWithdrawal === "") {  
        alert(`Error: please enter a number!`);
        withdrawal();
    } else if (makeWithdrawal <= 99) {
        alert(`Error: amount at least one hundred!`);
        withdrawal();
    }
  }

   
        
 
  



  





  
    


// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

// In the deposit and withdrawal function you also need to handle som potential errors.
// To handle one of the potential error you can use this piece of code
//isNaN(variableName);
// you need to change the variableName to your actual variable.
// you also need to check some other conditions here and use a logical operator.
// try to say the sentece out loud or think it:
// "A user should not be able to put 0 or negative numbers or empty string or a type that is not a number"
// Do you know what operator you should use?

// In the accountError and accountExit function you can use this to show a message to the user:
//alert("your code here and maybe properties");
// of course you need to put a proper message and you might need to display some of the properties.

// STARTER FUNCTION
//function atm() {
  //let choice = parseInt(prompt("Display menu choices here"));
  //prompt user for choice.

  // you can use the variable choice for your switch or if/else statement
  // so choice will hold the value of the user input.

