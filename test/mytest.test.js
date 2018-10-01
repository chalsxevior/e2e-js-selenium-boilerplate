import assert from "assert";

/**
 * webdriver.io for more documentations
 * npm intall -g selenium-standalone
 * you need to start selenium server on your local machine to start it by
 * "selenium-standalone start"
 **/
/**
 * Gecko base browser then install it (for mac)
 * curl -OL https://github.com/mozilla/geckodriver/releases/download/v0.22.0/geckodriver-v0.19.1-macos.tar.gz
 * tar -xvf geckodriver-v0.19.1-macos.tar.gz
 */
/**
 * curl -O https://chromedriver.storage.googleapis.com/2.42/chromedriver_mac64.zip
 * unzip chromedriver_mac64.zip
 */

describe("webdriver.io page", () => {
  browser.url("https://www.google.com");
  it("should have the right title", () => {
    let title = browser.getTitle();
    assert.equal(title, "Google");
  });
});
