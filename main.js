document.getElementById("openModalBtn").addEventListener("click", function() {
  const modal = document.getElementById("colorModal");
  modal.style.display = "block";


  window.onclick = function(event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.getElementById("changeColorBtn").addEventListener("click", function() {
  const colorInput = document.getElementById("colorInput").value.toLowerCase();
  const validColors = ["red", "blue", "green", "black", "white"];

  if (validColors.includes(colorInput)) {
    document.body.style.backgroundColor = colorInput;
  } else {
    alert("Invalid color! Please choose from red, blue, green, black, or white.");
  }
});

document.getElementById("calculateAvgBtn").addEventListener("click", function() {
  const numbersInput = document.getElementById("numbersInput").value;
  const numbersArray = numbersInput.split(":");
  let sum = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    sum += parseFloat(numbersArray[i]);
  }

  const average = sum / numbersArray.length;
  document.getElementById("avgResult").innerText = `Average: ${average.toFixed(2)}`;
});
