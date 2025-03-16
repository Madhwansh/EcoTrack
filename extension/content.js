(() => {
  const url = window.location.href;
  const domain = new URL(url).hostname;

  // Extract e-commerce purchase details
  let purchaseDetails = null;
  if (domain.includes("amazon") || domain.includes("flipkart")) {
    const priceElement = document.querySelector(".price, .a-price"); // Example selectors
    if (priceElement) {
      purchaseDetails = {
        product: document.title,
        price: priceElement.innerText,
        url: url,
      };
    }
  }

  // Send data to background script
  chrome.runtime.sendMessage({ url, domain, purchaseDetails });
})();
