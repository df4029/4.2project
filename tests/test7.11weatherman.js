module.exports = {
    before: browser => {
        browser.url('https://devmountain-qa.github.io/weatherman/build/index.html')
    },
    after: browser => {
        browser.end()
    },
    // This test searches a zip and checs that the city result is correct
    'check search': browser => {
        browser
            .setValue('input', 'Istanbul')
            .click('button')
            .waitForElementPresent('.current-weather__location',5000)
            // .verify.containsText('.current-weather__location', 'Eagle Mountain')
            .expect.element('.current-weather__location').text.to.equal('Istanbul')
        browser 
            .click('button')
            .expect.element('.enter-location__input',5000).text.to.equal('London / 84601')
            
        browser
            .click('button')
            .expect.element('h1').text.to.equal('WEATHERMAN')
    
            
     }
        }  

