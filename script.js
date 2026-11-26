"use strict";

const results = {
  "1": {"budget":"1 / 1","robotwin-flash":"76.21%","robotwin-drift":"82.19%","speedup":"21.46×","libero-flash":"95.1%","libero-drift":"96.9%","improvement":"+5.98 percentage points"},
  "2": {"budget":"1 / 2","robotwin-flash":"84.76%","robotwin-drift":"86.83%","speedup":"17.15×","libero-flash":"96.1%","libero-drift":"97.5%","improvement":"+2.07 percentage points"}
};

for (const button of document.querySelectorAll("[data-budget]")) {
  button.addEventListener("click", () => {
    const selected = results[button.dataset.budget];
    for (const item of document.querySelectorAll("[data-result]")) {
      item.textContent = selected[item.dataset.result];
    }
    for (const item of document.querySelectorAll("[data-budget]")) {
      const active = item === button;
      item.classList.toggle("is-selected", active);
      item.setAttribute("aria-pressed", String(active));
    }
    document.querySelector("#results-summary strong").textContent = selected.improvement;
  });
}

const copyButton = document.getElementById("copy-citation");
const copyStatus = document.getElementById("copy-status");
copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(document.getElementById("bibtex").textContent);
    copyButton.textContent = "Copied";
    copyStatus.textContent = "Citation copied to clipboard.";
    window.setTimeout(() => { copyButton.textContent = "Copy citation"; }, 2500);
  } catch {
    copyStatus.textContent = "Select and copy the citation, or download the .bib file.";
  }
});
