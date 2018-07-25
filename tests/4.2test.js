//const functions = require('../functions/data')

let searchCity = (browser, inputPlace) => {
    browser
        .waitForElementVisible('@enterLoc', 5000, 'Search field found')
        .setValue('@enterLoc', inputPlace)
        .click('@subBut')}

searchByName = {
    city: 'New York',
    cityOutput: 'New York'
}

searchByZip ={
    zip: '10021',
    cityOutput: 'New York'
}


let pageObject ={}

module.exports = {
    before: browser => {
        pageObject = browser.page.pageObject()
        pageObject.navigate()
    },
    after: browser => {
        browser.end()
    },

'search for valid city' : browser =>{
    searchCity(pageObject, 'New York')
    pageObject
        .waitForElementVisible('@weatherLoc', 5000, 'City Found')
        .expect.element('@weatherLoc').text.to.be.equal('New York','Found NY')
    pageObject
        .click('@searchAgain')
},

'search by zip' : browser => {
    browser.pause(5000)
    searchCity(pageObject, searchByName.city)
    pageObject
    .waitForElementVisible('@weatherLoc', 5000, 'City Found')
    .expect.element('@weatherLoc').text.to.be.equal('New York','Found NY')
pageObject
    .click('@searchAgain')
    

} 


}









