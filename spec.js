/**
 * Created by Rajan Lamichhane on 22/06/17.
 */

// spec.js
describe('Protractor Demo App', function() {

    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});