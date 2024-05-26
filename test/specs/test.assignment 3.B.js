
describe ("This is 3rd Classes Assignemnt number 2 contains button click, scrolling, form fillup", async()=>{

it ("Should get the add button, click it, then get the delete button and click it", async()=>{

    await browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
    await browser.pause(3000)
    
    const addButton = await $("button[onclick='addElement()']")
    await addButton.click();
    await browser.pause(3000)

    const dltButton = await $("button[onclick='deleteElement()']")
    await dltButton.click();
    await browser.pause(10000)
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



})