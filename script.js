// ==========================
// Part 1: Basics
// ==========================

// Variable declarations & conditionals
document.getElementById("checkAgeBtn").addEventListener("click", () => {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult!";
  } else if (age > 0) {
    document.getElementById("ageResult").textContent = "You are a minor!";
  } else {
    document.getElementById("ageResult").textContent = "Please enter a valid age.";
  }
});

// ==========================
// Part 2: Functions
// ==========================

// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let total = calculateTotal(10, 3); // Example: price=10, qty=3
  document.getElementById("totalResult").textContent = `Total price = $${total}`;
});

// Function 2: Toggle text visibility
function toggleText() {
  const text = document.getElementById("toggleText");
  text.style.display = text.style.display === "none" ? "block" : "none";
}

document.getElementById("toggleTextBtn").addEventListener("click", toggleText);

// ==========================
// Part 3: Loops
// ==========================
const favoriteFoods = ["Pizza", "Burgers", "Pasta", "Ice Cream"];

document.getElementById("showListBtn").addEventListener("click", () => {
  const list = document.getElementById("foodList");
  list.innerHTML = ""; // Clear before adding
  // Using for loop
  for (let i = 0; i < favoriteFoods.length; i++) {
    const li = document.createElement("li");
    li.textContent = favoriteFoods[i];
    list.appendChild(li);
  }
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

// DOM Task 1: Change background color
document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "lightyellow" ? "white" : "lightyellow";
});

// DOM Task 2: Add new item dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  const list = document.getElementById("dynamicList");
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});

// DOM Task 3: Event listener with loop
const cards = document.querySelectorAll("section");
cards.forEach((card, index) => {
  card.addEventListener("mouseenter", () => {
    card.style.backgroundColor = "#f0f8ff";
  });
  card.addEventListener("mouseleave", () => {
    card.style.backgroundColor = "white";
  });
});
