document.getElementById("generateBtn").addEventListener("click", function () {
  let qrInput = document.getElementById("qrInput").value;
  let qrCodeContainer = document.getElementById("qrCode");

  // Clear any existing QR code
  qrCodeContainer.innerHTML = "";

  if (qrInput) {
    QRCode.toCanvas(
      document.createElement("canvas"),
      qrInput,
      function (error, canvas) {
        if (error) {
          console.error(error);
          alert("An error occurred while generating the QR code.");
        } else {
          qrCodeContainer.appendChild(canvas);
          console.log("QR code generated!");
        }
      }
    );
  } else {
    alert("Please enter a message or URL");
  }
});
