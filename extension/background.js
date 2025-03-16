chrome.runtime.onMessage.addListener((message) => {
  chrome.storage.local.get(["trackingData"], (result) => {
    let data = result.trackingData || [];
    data.push({
      url: message.url,
      domain: message.domain,
      purchase: message.purchaseDetails,
    });

    chrome.storage.local.set({ trackingData: data });
  });
});
