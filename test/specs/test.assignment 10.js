
describe ("This is 10th Classes Assignemnt", async()=>{






        it('Shadow Elements', async () => {
            await browser.url('https://letcode.in/shadow');
            await browser.pause(3000)
            const firstName = await $('#open-shadow').shadow$('#fname');
            await firstName.setValue("Atiar")
            await browser.pause(3000)
        })

// other 2 fields is under the #shadow-root (closed), so the elements are not accesable. 

// ============
// Reference to myself
// ============

//  The {mode: "open"} argument gives the page a way to break the encapsulation of your shadow DOM. 
//  If you don't want to give the page this ability, pass {mode: "closed"} instead, and then shadowRoot returns null.




})




