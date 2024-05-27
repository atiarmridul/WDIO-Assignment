


describe ("This is 3rd Classes Assignemnt 'B' which contains button click, scrolling, form fillup", async()=>{


it ("Should get the add button, click it, then get the delete button and click it", async()=>{

            await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
            await browser.pause(3000)
            
            const addButton = await $("button[onclick='addElement()']")
            await addButton.click();
            await browser.pause(3000)

            const dltButton = await $("button[onclick='deleteElement()']")
            await dltButton.click();
            await browser.pause(5000)
    })

it ("Should go to the specific website, scroll down once and scroll up again", async()=>{

            await browser.url("https://demoqa.com/elements")
            await browser.pause(3000)

            const pageEndButtons = await $$('//span[@class="pr-1"]')[5]
            await pageEndButtons.scrollIntoView()
            await browser.pause(3000)

            const pageStartButtons = await $$('//span[@class="pr-1"]')[0]
            await pageStartButtons.scrollIntoView()
            await browser.pause(3000)

    })

it ("Should go to the specific website, fill up a form and submit", async()=>{

            await browser.url("https://demoqa.com/text-box")
            await browser.pause(3000)

            const fullName = await $('#userName');
            await fullName.setValue('Mridul');

            const userEmail = await $('#userEmail');
            await userEmail.setValue('Mridul@test.com');

            const currentAdd = await $('#currentAddress');
            await currentAdd.setValue('Dhaka');

            const permanentAdd = await $('#permanentAddress');
            await permanentAdd.setValue('Dhaka, Bangladesh');

            const submitButton = await $('#submit')
            await submitButton.click();
            await browser.pause(5000)


    })

it ("Should go to the specific website, press different keys from keyboard in a textarea", async()=>{

            await browser.url("https://play1.automationcamp.ir/keyboard_events.html")
            await browser.pause(3000)

            const textArea = await $('#area')
            await textArea.click();

            await textArea.setValue('This is text area, later I am going to select all text & delete it. Then we will press ALT and ENTER button');
            await browser.pause(3000)

            await textArea.click();
            await browser.keys(['Control','A']);
            await browser.pause(3000)
            await browser.keys(['Delete']);
            await browser.pause(3000)

            await textArea.click();
            await browser.keys(['Alt']);
            await browser.pause(5000)
            await browser.keys(['Enter']);
            await browser.pause(5000)

        })

})
