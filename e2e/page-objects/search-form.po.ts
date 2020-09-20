import { element, by } from 'protractor';

module.exports = {
    get input() 
    {
        return element(by.id('query'));
    },
    get searchBtn() 
    {
        return element(by.css('button'));
    },
    get firstCharacterName() 
    {
        return element(by.css('app-character h6'));
    },

    get dataOfSearchedUser() 
    {
        return element(by.xpath("//div[@class='card']//following-sibling::div[@class='row']//*[@class='col-sm-2']]"))
    },
    get notFound() 
    {
        return element(by.xpath("/html/body/app-root/div/div/div/div[1]")); // locating not found message
    },
    get selectPlanet()
    {
        return element(by.id('planets')); //locating planet radio button
    },
    get gender()
    {
        return element(by.xpath("/html/body/app-root/div/div/div/div/div/div/app-character/div/div/div[1]/div[1]")); 
    },   //locating Gender under character details.
    get birthYear()
    {
        return element(by.xpath("/html/body/app-root/div/div/div/div/div/div/app-character/div/div/div[2]/div[1]")); 
    },//locating Birth Year under character details.
    get eyeColor()
    {
        return element(by.xpath("/html/body/app-root/div/div/div/div/div/div/app-character/div/div/div[3]/div[1]")); 
    },//locating Eye color under character details.
    get skinColor()
    {
        return element(by.xpath("/html/body/app-root/div/div/div/div/div/div/app-character/div/div/div[4]/div[1]")); 

    },  //locating Eye color under character details.
    get planetName()
    {
        return element(by.css('app-planet h6')); //locating planet name
    },
    get population()
    {
        return element(by.xpath('/html/body/app-root/div/div/div/div/div/div[1]/app-planet/div/div/div[1]/div[1]'));
    }, //locating Population under planet details.
    get climate()
    {
        return element(by.xpath('/html/body/app-root/div/div/div/div/div/div[1]/app-planet/div/div/div[2]/div[1]'));
    },  //locating Climate under planet details.
    get gravity()
    {
        return element(by.xpath('/html/body/app-root/div/div/div/div/div/div[1]/app-planet/div/div/div[3]/div[1]'))
    }, //locating Gravity  under planet details.
   
}
