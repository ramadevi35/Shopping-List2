// Quick and dirty
// function createListItem(item) {
//   const li = document.createElement("li");
//   li.innerHTML = `${item}
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//   document.querySelector(".items").appendChild(li);
// }

// // Clean and performant
// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));
//   const button = document.createElement("button");
//   button.className = "remove-item btn-link text-red";
//   const icon = document.createElement("i");
//   icon.className = "fa-solid fa-xmark";

//   button.appendChild(icon);
//   li.appendChild(button);
//   document.querySelector(".items").appendChild(li);
// }

// createListItem("Eggs");
// createNewItem("Cheese");

// Refactor to multiple functions(09);

// function createNewItem(item) {
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode(item));

//   const button = createButton("remove-item btn-link text-red");

//   li.appendChild(button);
//   document.querySelector(".items").appendChild(li);
// }

// function createButton(classes) {
//   const button = document.createElement("button");
//   button.className = classes;

//   const icon = createIcon("fa-solid fa-xmark");
//   button.appendChild(icon);

//   return button;
// }
// function createIcon(classes) {
//   const icon = document.createElement("i");
//   icon.className = classes;
//   return icon;
// }

// createNewItem("Cheese");
// createNewItem("Sauce");
// createNewItem("Butter");

// //Insert Text,Elements and HTML

//InsertAdjacentElement Example
// function insertElement() {
//   const filter = document.querySelector(".filter");
//   const h1 = document.createElement("h1");
//   h1.textContent = "insertAdjacentElement";
//   filter.insertAdjacentElement("beforebegin", h1);
// }

// //InsertAdjacenttext Example
// function insertText() {
//   const item = document.querySelector("li:first-child");
//   item.insertAdjacentText("beforebegin", "insertAdjacentText");
// }

// //InsertAdjacentHTML Example
// function insertHTML() {
//   const clearBtn = document.querySelector("#clear");
//   clearBtn.insertAdjacentHTML("beforebegin", "<h2>insertAdjacentHTML</h2>");
// }

// //InsertBefore example
// function insertBeforeItem() {
//   const ul = document.querySelector("ul");

//   const li = document.createElement("li");
//   li.textContent = "insertBefore";

//   const thirdItem = document.querySelector("li:nth-child(3)");
//   ul.insertBefore(li, thirdItem);
// }

// insertElement();
// insertText();
// insertHTML();
// insertBeforeItem();

// /*
// <!--beforebegin-->
// <p>
// <!--afterbegin-->
// foo
// <!--beforeend-->
// </p>
// <!--afterend-->
// */

//// Custom insert After Challenge
// function insertAfter(newEl, exestingEl) {
//   exestingEl.parentElement.insertBefore(newEl, exestingEl.nextsibling);
// }

// //New element to insert
// const li = document.createElement("li");
// li.textContent = "Insert Me After!";

// //exesting element to insert after
// const firstItem = document.querySelector("li:first-child");

// //our custom function
// insertAfter(li, firstItem);

//// Replace Elements
// function replaceFirstItem() {
//   const firstItem = document.querySelector("li:first-child");

//   const li = document.createElement("li");
//   li.textContent = "Replaced First";

//   firstItem.replaceWith(li);
// }
// function replaceSecondItem() {
//   const SecondItem = document.querySelector("li:nth-child(2)");
//   SecondItem.outerHTML = "<li>Replaced Second</li>";
// }

// function replaceAllItems() {
//   const lis = document.querySelectorAll("li");

//   lis.forEach((item, index) => {
//     // item.outerHTML = "<li>Replace All</li>";
//     if (index === 1) {
//       item.innerHTML = "Second Item";
//     } else {
//       item.innerHTML = "Replace All";
//     }
//   });
//   lis.forEach(
//     (item, index) =>
//       (item.outerHTML = index === 1 ? "<li>Second Item</li>" : "<li>Item</li>")
//   );
// }

// function replaceChildHeading() {
//   const header = document.querySelector("header");
//   const h1 = document.querySelector("header h1");

//   const h2 = document.createElement("h2");
//   h2.id = "app-title";
//   h2.textContent = "Shopping List";
//   header.replaceChild(h2, h1);
// }
// replaceFirstItem();
// replaceSecondItem();
// replaceAllItems();
// replaceChildHeading();

////Remove Elements
function removeClearButton() {
  const clearBtn = document.querySelector("#clear");
  clearBtn.remove();
}

function removeFirstItem() {
  const ul = document.querySelector("ul");
  const li = document.querySelector("li:first-Child");

  ul.removeChild(li);
}

function removeItem(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelector(`li:nth-child(${itemNumber})`);

  ul.removeChild(li);
}

function removeItem2(itemNumber) {
  const ul = document.querySelector("ul");
  const li = document.querySelectorAll("li")[itemNumber - 1];

  ul.removeChild(li);
}

function removeItem3(itemNumber) {
  const li = document.querySelectorAll("li");
  li[itemNumber - 1].remove();
}

const removeItem4 = (itemNumber) =>
  document.querySelectorAll("li")[itemNumber - 1].remove();

removeClearButton();
// removeFirstItem();
// removeItem(2);
// removeItem2(2);
// removeItem3(3);
removeItem4(2);
