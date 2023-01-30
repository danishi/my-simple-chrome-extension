function hello() {
  alert("Hello World");
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: hello
  });
});
