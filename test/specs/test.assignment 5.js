
describe ("This is 5th Classes Assignemnt about Strings", async()=>{

//-----------------------this is 1st task--------------------//

    it ("Will show full name without any space", async()=>{

        const firstName = "  Mr. Atiar"; 
        const middleName = " Rahman ";
        const lastName = "Chowdhury  ";
        const trimmesFirstName = firstName.trim()
        const trimmesMiddleName = middleName.trim()
        const trimmesLastName = lastName.trim()
        console.log("Users Full name without any space is >>>", trimmesFirstName,trimmesMiddleName,trimmesLastName);

    })

//-----------------------this is 2nd task--------------------//

    it ("Will show string manupulation", async()=>{

        const message = "I am in love with Typescript, but I also know javascript."
        //const message = "I use JavaScript every day."
        //const message = "TypeScript is awesome!"
        //const message = "JAVASCRIPT is powerful, but I like TYPESCRIPT too."
        //const message = ""

        const messageUpper = message.toUpperCase();

        const isTypeScriptPresent = messageUpper.includes("TYPESSCRIPT");
        const isJavaScriptPresent = messageUpper.includes("JAVASCRIPT");
   
        if (  isTypeScriptPresent  || isJavaScriptPresent ){
        
            const finalText = messageUpper.replace("JAVASCRIPT", "!@#$");
            console.log("Final Text is:",finalText);
    
        } else {

            console.log("None of the word is found");
        }


    })


//-----------------------this is 3rd task--------------------//

    it ("Will extract the OTP from the message", async()=>{
    
        const sms = "“Dear customer, use this One Time Password 86549 to log in to your account. This OTP will be valid for the next 5 mins.”"; 
        const OTP = sms.match(/\b\d{5}\b/);
        console.log("OTP is: ",OTP);   

    })


//-----------------------this is 4th task--------------------//

    it ("Will show a specific portion of a message", async()=>{

        const message = "“Note: this is a message, Note: this is the second message, Note: this is the last message”"; 
        const lastMessage = message.substring(59,90);
        console.log("Specific message is  >>>",lastMessage);   

    })




})




