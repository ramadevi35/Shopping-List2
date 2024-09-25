let output;

const parent = document.querySelector(".parent");
output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = "Child One";
output = parent.childNodes[5].style.color = "Red";
output = parent.childNodes[7].innerText = "Child Three";

output = parent.firstchild;
output = parent.lastChild;

parent.lastChild.textContent = "Hello Rama";
parent.firstChild.textContent = "Hi";

// Parent Node
const child = document.querySelector(".child");
output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = "#ccc";
child.parentNode.style.padding = "10px";

// Sibling
const secondItem = document.querySelector(".child:nth-child(2)");
output = secondItem;
output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
