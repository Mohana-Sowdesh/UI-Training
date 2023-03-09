bank();

function bank() {
    // Declaring user details as array of objects
    let users = [
        {
            "id": 1065,
            "accNo": 63457890,
            "cardNo": 14532,   
            "pin": 9823,
            "accBalance": 48721
        },
        {
            "id": 1066,
            "accNo": 63457823,
            "cardNo": 145312,   
            "pin": 6185,
            "accBalance": 28349
        },
        {
            "id": 1067,
            "accNo": 61257824,
            "cardNo": 145335,   
            "pin": 1755,
            "accBalance": 96349
        },
        {
            "id": 1068,
            "accNo": 234337823,
            "cardNo": 145314,   
            "pin": 5028,
            "accBalance": 1042
        },
        {
            "id": 1069,
            "accNo": 45666723,
            "cardNo": 145313,   
            "pin": 4784,
            "accBalance": 92340
        }   
    ]

    userChoice = () => {
        let withdrawalConsent = confirm("Click OK for withdrawal");

        if(withdrawalConsent==0)
        {
            depositConsent = confirm("Click OK for deposit");
            if(depositConsent==0)
            {
                confirm("Please choose a valid choice");
                userChoice();
            }
            else
                deposit();
        }
        else
            withdrawal();
    }
    
    // Withdrawal function
    withdrawal = () => {
        let userId = prompt("Please enter your user ID");
        flag = 0;
        for(let i=0; i<users.length; i++)
        {
            if(userId==users[i].id)
            {
                flag = 1;
                var accBalance = users[i].accBalance;
            }
        }

        if(flag==0)
            alert("Please enter correct user ID");
        else 
        {
            let cardNo = prompt("Please enter your card number");

            if(validateCard(cardNo)==0)
                confirm("Please enter correct card number");   
            else{
                let pin = prompt("Please enter your pin");

                if(validatePin(pin)==0)
                    confirm("Please enter correct pin number");
                else
                {
                    let amtToWithdraw = prompt("Please enter the amount to be withdrawn");
                    if(validateAmt(amtToWithdraw,accBalance)==1)
                        confirm("Account balance is less than the required");
                    else
                    {
                        accBalance = accBalance - amtToWithdraw;
                        console.log("New account balance:"+accBalance);
                    }
                }
            }
        }
    }

    // Validate card function
    validateCard = (cardNo) => {
        flag = 0;
        for(let i=0; i<users.length; i++)
        {
            if(cardNo==users[i].cardNo)
                flag = 1;
        }
        return flag;
    }

    // Validate pin function
    validatePin = (pin) => {
        flag = 0;
        for(let i=0; i<users.length; i++)
        {
            if(pin==users[i].pin)
                flag = 1;
        }
        return flag;
    }

    // Validate amount to be withdrawn function
    validateAmt = (amtToWithdraw,accBalance) => {
        flag = 0;
        if(accBalance < amtToWithdraw)
            flag=1;
        return flag;
    }

    // Deposit function
    deposit = () => {
        let userId = prompt("Please enter your user ID");
        flag = 0;
        for(let i=0; i<users.length; i++)
        {
            if(userId==users[i].id)
            {
                flag = 1;
                var accBalance = users[i].accBalance;
            }
        }

        if(flag==0)
            alert("Please enter correct user ID");
        else 
        {
            let cardNo = prompt("Please enter your card number");

            if(validateCard(cardNo)==0)
                confirm("Please enter correct card number");   
            else{
                let pin = prompt("Please enter your pin");

                if(validatePin(pin)==0)
                    confirm("Please enter correct pin number");
                else
                {
                    let amtToDeposit = prompt("Please enter the amount to be deposited");
                    accBalance = accBalance + parseInt(amtToDeposit);
                    console.log("New account balance:"+accBalance);
                }
            }
        }
    }

    userChoice();



}