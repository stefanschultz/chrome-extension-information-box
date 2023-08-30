import ExtPay from "extpay";

const extpay = ExtPay("chrome-extension-werkzeugbox");
extpay.startBackground();

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["contentScript.bundle.js"],
    });
});
