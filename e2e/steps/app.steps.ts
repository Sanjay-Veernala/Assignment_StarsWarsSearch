const { Given, When, Then } = require('cucumber');
const { browser } = require('protractor');
const chai = require('chai');
chai.use(require('chai-as-promised'));

const searchFormPO = require('../page-objects/search-form.po');

Given('I navigate to {string}', { timeout: 60 * 1000 }, async (string) => 
{
    await browser.get('http://' + string + ':4200/');
    await browser.sleep(2000);
});                                     // Navigating to the site 

When('I search for Luke Skywalkers name', { timeout: 60 * 1000 }, async () =>
 {

    await searchFormPO.input.sendKeys('Luke Skywalker');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});   

Then('I see Lukes details', { timeout: 60 * 1000 }, async () =>
 {
    await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText')).
    to.eventually.contain('Luke Skywalker');    // verifying character name
    console.log("Character details");                                 
    
    await chai.expect(searchFormPO.gender.getAttribute('innerText'))
        .to.eventually.contain('Gender:');
        console.log("Gender");                                          // Verifying Gender is Shown details 
    
    await chai.expect(searchFormPO.birthYear.getAttribute('innerText'))
        .to.eventually.contain('Birth year:');
        console.log("Birth Year");                                      // Verifying Birth Year is shown in details

    await chai.expect(searchFormPO.eyeColor.getAttribute('innerText'))
        .to.eventually.contain('Eye color:');                           // Verifying Eye color is shown in details
        console.log("Eye Color");
    
        await chai.expect(searchFormPO.skinColor.getAttribute('innerText'))
        .to.eventually.contain('Skin color:');                          // Verifying Skin color is shown in details
        console.log("Skin color");
});    

When('I search for Sanjays name', { timeout: 60 * 1000 }, async () => {
    await searchFormPO.input.sendKeys('Sanjay');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});  // step for entering Sanjay (invalid character name) in the search box

Then('I see Message Not Found', { timeout: 60 * 1000 }, async () => {
    await chai.expect(searchFormPO.notFound.getText())
        .to.eventually.contain('Not found.');

}); // step for verifying for the Message "Not found"




When ('I search for EARTH',{ timeout: 60 * 1000 }, async () => {
    await searchFormPO.selectPlanet.click();
    await searchFormPO.input.sendKeys('EARTH');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});// step for entering EARTH (invalid planet name) in the search box


When ('I search for Bespin',{ timeout: 60 * 1000 }, async () => 
 {
    await searchFormPO.selectPlanet.click();    //click on planet radio button
    await searchFormPO.input.sendKeys('Bespin'); //enter Bespin in search box
    await searchFormPO.searchBtn.click();        //click on search button
    await browser.sleep(2000);                   //Asking the cbrowser to not run the code for 2 secs
})  // 

Then('I see planet Bespin details', { timeout: 60 * 1000 }, async () => // scenario: Search By Full Planet name 
 {
    console.log("Scenario: By Full Planet name")
    await  chai.expect(searchFormPO.planetName.getAttribute('innerText'))
        .to.eventually.contain('Bespin');                                  // verifying Planet name
        console.log("Planet Search") ;                  
    
        await chai.expect(searchFormPO.population.getAttribute('innerText'))
        .to.eventually.contain('Population:');
        console.log("Population:");                                          // Verifying Population is Shown in details 
    
        await chai.expect(searchFormPO.climate.getAttribute('innerText'))
        .to.eventually.contain('Climate:');
        console.log("Climate:");                                      // Verifying Climate is shown in details

    
        await chai.expect(searchFormPO.gravity.getAttribute('innerText'))
        .to.eventually.contain('Gravity:');                           // Verifying Gravity is shown in details
        console.log("Gravity:");
});    


When('I clear the text from Search Form',{timeout:60 * 1000}, async () =>
{
    await searchFormPO.input.clear();
    await browser.sleep(2000);});

When('I click on search or Enter', {timeout:60 * 1000}, async() =>
{
    await browser.sleep(2000);
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});

Then('I  see empty results', {timeout:60 * 1000}, async() =>
{
   console.log("Empty result scenario");
   await browser.sleep(2000);
   await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText')).to.be.empty;
    
});


When('I search for letter a', { timeout: 60 * 1000 }, async () =>
 {
    await searchFormPO.input.sendKeys('a');
    await searchFormPO.searchBtn.click();
    await browser.sleep(2000);
});                                  //Partial character search 

Then('I see all Names details having letter a', { timeout: 60 * 1000 }, async () =>
 {
        console.log("Running scenario: Partial character search") 
        for(let i = 0; i<10;i++) {

            await chai.expect(searchFormPO.firstCharacterName.getAttribute('innerText'))
        .to.eventually.have.contain('a');                       // verifying character name
        }
    
});

When('I search for j letter', { timeout: 60 * 1000 }, async () =>
 {
    await searchFormPO.selectPlanet.click();    //click on planet radio button
    await searchFormPO.input.sendKeys('j'); //enter Bespin in search box
    await searchFormPO.searchBtn.click();        //click on search button
    await browser.sleep(2000); 
});                                  //Partial planet search 

Then('I see all planet details having j', { timeout: 60 * 1000 }, async () =>
 {
        console.log("Running scenario: Partial planet search") 
        for(let i = 0; i<2;i++) 
        {
       
            await  chai.expect(searchFormPO.planetName.getAttribute('innerText'))
        .to.eventually.contain('j');                        // verifying planet name
        }
    
});
    