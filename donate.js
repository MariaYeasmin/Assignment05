function historyButton() {
  document.getElementById("history").classList.remove("hidden");
  document.getElementById("history-btn").classList.add("bg-[#B4F461]");
  document.getElementById("doantion-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("hero-section").classList.add("hidden");
}
function donationButton() {
  document.getElementById("history").classList.add("hidden");
  document.getElementById("hero-section").classList.remove("hidden");
  document.getElementById("history-btn").classList.remove("bg-[#B4F461]");
  document.getElementById("doantion-btn").classList.add("bg-[#B4F461]");
}

// Donation for Noakhali
let totalDonarionNoak = 0;
let totalWallet = 6000;

document.getElementById("donate-now-n").addEventListener("click", function (e) {
  e.preventDefault();

  const donationInput = document.getElementById("donate-amount-n").value;
  const donationAmount = parseFloat(donationInput);

  if (donationAmount > 0 && donationAmount <= totalWallet) {
    totalDonarionNoak += donationAmount;

    document.getElementById(
      "donation-total"
    ).innerText = `${totalDonarionNoak} BDT`;

    totalWallet -= donationAmount;
    document.getElementById("my-wallet").innerText = `${totalWallet} BDT`;

    document.getElementById("wallet-balance").innerText = `${totalWallet} BDT`;

    document.getElementById("donate-amount-n").value = "";
    addToHistory(donationAmount, "Flood Relief in Noakhali");
    document.getElementById("open-modal").click();
  } else if (donationAmount > totalWallet) {
    alert("Insufficient funds in the wallet.");
  } else {
    alert("Please enter a valid donation amount.");
  }
});

function closeModal() {
  document.getElementById("my_modal_5").close();
}

// Doantion for Feni

let totalDonarionFeni = 400;

document.getElementById("donate-now-f").addEventListener("click", function (e) {
  e.preventDefault();

  const donationInput = document.getElementById("donate-amount-f").value;

  const donationAmount = parseFloat(donationInput);
  if (donationAmount > 0 && donationAmount <= totalWallet) {
    totalDonarionFeni += donationAmount;

    document.getElementById(
      "donation-total-f"
    ).innerText = `${totalDonarionFeni} BDT`;

    totalWallet -= donationAmount;
    document.getElementById("my-wallet").innerText = `${totalWallet} BDT`;

    document.getElementById("wallet-balance").innerText = `${totalWallet} BDT`;

    document.getElementById("donate-amount-f").value = "";
    addToHistory(donationAmount, "Flood Relief in Feni");

    document.getElementById("open-modal").click();
  } else if (donationAmount > totalWallet) {
    alert("Insufficient funds in the wallet.");
  } else {
    alert("Please enter a valid donation amount.");
  }
});

// Doantion for Quota movement

let totalDonarionQuo = 2200;

document.getElementById("donate-now-q").addEventListener("click", function (e) {
  e.preventDefault();

  const donationInput = document.getElementById("donate-amount-q").value;

  const donationAmount = parseFloat(donationInput);
  if (donationAmount > 0 && donationAmount <= totalWallet) {
    totalDonarionQuo += donationAmount;

    document.getElementById(
      "donation-total-q"
    ).innerText = `${totalDonarionQuo} BDT`;

    totalWallet -= donationAmount;
    document.getElementById("my-wallet").innerText = `${totalWallet} BDT`;

    document.getElementById("wallet-balance").innerText = `${totalWallet} BDT`;

    document.getElementById("donate-amount-q").value = "";
    addToHistory(donationAmount, "Aid for Injured in the Quota Movement");

    document.getElementById("open-modal").click();
  } else if (donationAmount > totalWallet) {
    alert("Insufficient funds in the wallet.");
  } else {
    alert("Please enter a valid donation amount.");
  }
});

function addToHistory(donationAmount, project) {
  const historySection = document.getElementById("history");
  const historyEntry = document.createElement("div");

  // Get the current date and time
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "short" }); // Tue
  const date = now.toLocaleString("en-US", { day: "2-digit" }); // 17
  const month = now.toLocaleString("en-US", { month: "short" }); // Sep
  const year = now.getFullYear(); // 2024
  const time = now.toLocaleTimeString("en-US", { hour12: false }); // 08:39:11

  // Calculate GMT offset in the format "+0600"
  const offset = -now.getTimezoneOffset();
  const offsetHours = String(Math.floor(offset / 60)).padStart(2, "0");
  const offsetMinutes = String(offset % 60).padStart(2, "0");
  const gmtOffset = `GMT${
    offset >= 0 ? "+" : "-"
  }${offsetHours}${offsetMinutes}`; // GMT +0600

  // Combine the formatted date and time
  const formattedDate = `${day} ${month} ${date} ${year} ${time} ${gmtOffset} (Bangladesh Standard Time)`;

  historyEntry.innerHTML = `
    <div class="mb-3 md:p-8 p-2 border rounded-2xl">
      <h2 class="font-bold">
        <span id="donated-money">${donationAmount}</span> Taka is Donated for <span>${project}</span>, Bangladesh
      </h2>
      <p class="text-[#111111B3] mt-3">Date: ${formattedDate}</p>
    </div>
  `;

  historySection.appendChild(historyEntry);
}
