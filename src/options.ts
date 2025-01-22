const chrome = require("sinon-chrome/apps");
(global as any).chrome = chrome;

// Saves options to chrome.storage
const saveOptions = () => {
  const color = (document?.getElementById("color") as HTMLInputElement)?.value;
  const likesColor = (document?.getElementById("like") as HTMLInputElement)
    ?.checked;

  chrome?.storage.sync.set(
    { favoriteColor: color, likesColor: likesColor },
    () => {
      // Update status to let user know options were saved.
      const status: any = document.getElementById("status");
      status.textContent = "Options saved.";
      setTimeout(() => {
        status.textContent = "";
      }, 750);
    }
  );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
  chrome?.storage.sync.get(
    { favoriteColor: "red", likesColor: true },
    (items: any) => {
      (document.getElementById("color") as any).value = items.favoriteColor;
      (document.getElementById("like") as any).checked = items.likesColor;
    }
  );
};

document?.addEventListener("DOMContentLoaded", restoreOptions);
document?.getElementById("save")?.addEventListener("click", saveOptions);
