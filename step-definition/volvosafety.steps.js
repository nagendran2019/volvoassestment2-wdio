const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const fs = require('fs').promises;
const path = require('path');
const resemble = require('resemblejs');

const expectedText = "Our most acclaimed lifesaver\n\nIn 1959, Volvo Cars engineer Nils Bohlin introduced three-point safety belts to our cars. As one of the most important inventions in car safety, it has so far saved over one million lives.";

Given('I am on the Volvo Cars safety highlights page', async function () {
    await browser.url('https://www.volvocars.com/intl/v/safety/highlights');
});

When('I navigate to the sliderWithIcons:icon2 section', async function () {
    const icon2Selector = '[data-autoid="sliderWithIcons:icon2"]';
    const icon2Element = await $(icon2Selector);
    await icon2Element.scrollIntoView();
    await icon2Element.click();
    await browser.pause(2000); // Wait for any animations or transitions
});

Then('I take a screenshot and compare it with the baseline image', async function () {
    const actualImage = await browser.takeScreenshot();
    const expectedImagePath = path.join(__dirname, 'base/our-most-famous-lifesaver.avif');
    const expectedImage = await fs.readFile(expectedImagePath, 'base64');

    const comparisonResult = await new Promise((resolve, reject) => {
        resemble(actualImage)
            .compareTo(expectedImage)
            .ignoreAntialiasing()
            .onComplete(data => resolve(data));
    });

    const mismatchPercentage = comparisonResult.rawMisMatchPercentage;
    assert.ok(mismatchPercentage <= 0.05, `Image comparison failed with mismatch percentage: ${mismatchPercentage}`);
});

Then('I should see the inner text matches string', async function () {
    const actualTextElement = await $('[data-autoid="sliderWithIcons:icon2"] p');
    const actualText = await actualTextElement.getText();

    assert.strictEqual(actualText.trim(), expectedText.trim(), 'Inner text does not match expected text');
});