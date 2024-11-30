// Function to copy UPI ID to clipboard
function copyUPIID() {
    const upiID = "7488204110@ybl"; // Replace with your UPI ID
  
    // Create a temporary input element to copy text
    const tempInput = document.createElement("input");
    tempInput.value = upiID;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  
    // Show copy confirmation
    const copyStatus = document.getElementById("copy-status");
    copyStatus.classList.remove("hidden");
    setTimeout(() => {
      copyStatus.classList.add("hidden");
    }, 2000);
  }
  