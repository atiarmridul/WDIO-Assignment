describe ("This is 4th Classes Assignemnt which contains Window chnage and Alert handling", async()=>{


    it ("Should clicked on link, change window and switch to new window", async()=>{
    
                await browser.url("https://demoqa.com/links")
                await browser.pause(3000);
                const linkForNewTab = await $('#dynamicLink');
                await linkForNewTab.click()
                await browser.pause(3000);
                const totalTabs = browser.getWindowHandles()
                console.log("Total Tabs>>>>>",(await totalTabs).length)
                await browser.pause(3000);


                

        })


    })
    