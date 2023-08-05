const elName = document.querySelector(".name");
const elRelationship = document.querySelector(".relationship");
const elPhone = document.querySelector(".phone");
const elForm = document.querySelector("#form");
const elCards = document.querySelector(".cards");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  if (elName.value && elRelationship.value && elPhone.value !== "") {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.innerHTML = `
     <h4>${elName.value}</h4>
     <p class="relationship">${elRelationship.value}</p>
     <p id="phone">${elPhone.value}</p>
     `;
    elCards.appendChild(newCard);
    elForm.reset();
  } else {
    alert("Error");
  }
});

let num = [1, 3, 5, 9];

let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum += num[i];
}
console.log(sum);
