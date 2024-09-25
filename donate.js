let totalDonation = 0;

document.getElementById("donate-now-n").addEventListener("click", function () {
  const donationInput = document.getElementById("donate-amount-n").value;

  const donationAmount = parseFloat(donationInput);
  if (donationAmount > 0) {
    totalDonation += donationAmount;

    document.getElementById(
      "donation-total"
    ).textContent = `${totalDonation} BDT`;

    document.getElementById("donate-amount-n").value = "";
  } else {
    alert("Please enter a valid donation amount.");
  }
});
