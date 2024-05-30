describe ("This is 4th Classes Assignemnt which contains Window chnage and Alert handling", async()=>{


    it ("Should clicked on link, change window and switch to new window", async()=>{
    
                await browser.url("https://demoqa.com/links")
                await browser.pause(3000);               
                await browser.refresh
                const linkForNewTab = await $('#simpleLink');
                await linkForNewTab.click();
                await browser.pause(3000);
                const totalTabs = await browser.getWindowHandles()
                console.log("Total Tabs>>>>>", totalTabs.length)
                console.log("Tabs>>>>>",totalTabs)
                await browser.pause(3000);
                await browser.switchToWindow(totalTabs[1])
                await browser.pause(5000);
                const currentTabUrlChild = await browser.getUrl()
                console.log("Current Child Url ==",currentTabUrlChild)
                await browser.closeWindow()
                await browser.pause(3000);
                await browser.switchToWindow(totalTabs[0])
                const currentTabUrlMother = await browser.getUrl()
                console.log("Current Mother Url ==",currentTabUrlMother)
                await browser.pause(3000);
  

        })


    it ("Should clicked on different type of alerts and will do different activities", async()=>{

                 await browser.url("https://demo.automationtesting.in/Alerts.html")
                 await browser.pause(3000); 

                 const normalAlert = await $("button[onclick='alertbox()']")
                 await normalAlert.click();
                 await browser.pause(3000);
                 const alertText = await browser.getAlertText()
                 console.log("Normal Alert Text is >>> ",alertText)
                 await browser.acceptAlert();
                 await browser.pause(3000);


                 const confirmationAlertLink = await $("a[href='#CancelTab']")
                 await confirmationAlertLink.click();
                 await browser.pause(3000);
                 const confirmationAlert = await $("button[onclick='confirmbox()']")
                 await confirmationAlert.click();
                 await browser.pause(3000);
                 if (browser.isAlertOpen()){
                    
                    console.log("Is any alert box open?? >>> ",await browser.isAlertOpen())
                    console.log("Confirmation Alert Text is >>> ",await browser.getAlertText())
                    await browser.acceptAlert();
                    await browser.pause(5000);
                    await confirmationAlert.click();
                    await browser.pause(3000);
                    await browser.dismissAlert();
                    await browser.pause(5000);
                    console.log("Is any alert box open now?? >>> ",await browser.isAlertOpen())
                    }

                
                const TextboxAlertLink = await $("a[href='#Textbox']")
                await TextboxAlertLink.click();
                await browser.pause(3000);
                const TextboxAlert = await $("button[onclick='promptbox()']")
                await TextboxAlert.click();
                await browser.pause(3000);
                await browser.sendAlertText("Mridul");
                await browser.pause(5000);
                await browser.acceptAlert();
                await browser.pause(7000);
                
    
         })


    })
    