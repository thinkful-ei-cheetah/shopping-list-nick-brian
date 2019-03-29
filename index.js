"use strict";

const STORE = [
  { name: "apples", checked: false },
  { name: "oranges", checked: false },
  { name: "milk", checked: true },
  { name: "bread", checked: false }
];

function generateItemList(item, itemIndex) {
  const checkedClass = item.checked ? "shopping-item__checked" : "";

  return `
      <li class="js-item-index-element" data-item-index="${itemIndex}">
        <span class="shopping-item js-shopping-item ${checkedClass}">${
    item.name
  }</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle js-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete js-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
     </li>
    `;
}

function generateShoppingListItem(shoppingList) {
  const items = shoppingList.map(item => generateItemList(item));

  return items.join("");
}

function renderShoppingList() {
  // grab STORE
  // generate html
  // render
  console.log("renderShoppingList accessed");
  const shoppingListsItems = generateShoppingListItem(STORE);

  $(".js-shopping-list").html(shoppingListsItems);
}

function handleNewItemSubmit() {
  // get item to be submitted
  // access the STORE
  // add item to the STORE
  console.log("handleNewItemSubmit accessed");
  $("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
  });
}

function handleItemCheckClicked() {
  // get item to be checked
  // access the STORE
  // update the STORE
  console.log("handleItemCheckClicked accessed");
}

function handleDeleteItemClicked() {
  // get item to be deleted
  // access the STORE
  // remove item from the STORE
  console.log("handleDeleteItemClicked accessed");
}

function handleShoppingList() {
  renderShoppingList();
  handleNewItemSubmit();
  handleItemCheckClicked();
  handleDeleteItemClicked();

  console.log("handleShoppingList accessed");
}

$(handleShoppingList);
