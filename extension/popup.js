document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["trackingData"], (result) => {
    const history = result.trackingData || [];
    const list = document.getElementById("history");

    history.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.domain} - ${item.url}`;
      list.appendChild(li);
    });
  });
});
