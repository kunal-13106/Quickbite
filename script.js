
document.getElementById("darkBtn").onclick = function () {
  if (document.body.style.backgroundColor === "black") {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
};


document.getElementById("promoBtn").onclick = function () {
  var p = document.getElementById("promoText");

  if (p.style.display === "none") {
    p.style.display = "block";
  } else {
    p.style.display = "none";
  }
};
let msgBtn = document.getElementById("msgBtn");
let offerText = document.getElementById("offerText");

msgBtn.onclick = function () {
  if (offerText.style.display === "none") {
    offerText.style.display = "block";
  } else {
    offerText.style.display = "none";
  }
};
msgBtn.style.padding = "10px 20px";
msgBtn.style.background = "#4caf50";
msgBtn.style.color = "white";
msgBtn.style.border = "none";
msgBtn.style.borderRadius = "8px";
msgBtn.style.cursor = "pointer";
msgBtn.style.fontWeight = "600";
