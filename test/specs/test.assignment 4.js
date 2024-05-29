describe ("This is 4th Classes Assignemnt which contains Window chnage and Alert handling", async()=>{


    it ("Should clicked on link, change window and switch to new window", async()=>{
    
                await browser.url("https://demoqa.com/links")
                await browser.pause(3000);
                
                // await browser.refresh
                const linkForNewTab = await $('#simpleLink');
                await linkForNewTab.click();
                await browser.pause(3000);
                const totalTabs = await browser.getWindowHandles()
                console.log("Total Tabs>>>>>", totalTabs.length)
                console.log("Tabs>>>>>",totalTabs)
                await browser.pause(3000);
                // await browser.closeWindow()
                await browser.switchToWindow(totalTabs[1])
                await browser.pause(5000);
                const currentTabURL = await browser.getUrl()
                console.log("Current Url ==",currentTabURL)
   



                

        })


    })
    