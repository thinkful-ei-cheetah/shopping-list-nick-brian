'use strict';

function renderShoppingList(){
  // grab STORE
  // generate html
  // render
  console.log('renderShoppingList accessed');
}

function handleNewItemSubmit(){
  // get item to be submitted
  // access the STORE
  // add item to the STORE
  console.log('handleNewItemSubmit accessed');
}

function handleItemCheckClicked(){
  // get item to be checked
  // access the STORE
  // update the STORE
  console.log('handleItemCheckClicked accessed');
}

function handleDeleteItemClicked(){
  // get item to be deleted
  // access the STORE
  // remove item from the STORE
  console.log('handleDeleteItemClicked accessed');
}

function handleShoppingList(action, item){
  renderShoppingList();
  // get action to be taken (render,new item, etc.)
  // invoke the correct function (possibly switch statement?)
  switch(action) {
  case 'new':
    handleNewItemSubmit(item);
    break;
  case 'check':
    handleItemCheckClicked(item);
    break;
  case 'delete':
    handleDeleteItemClicked(item);
    break;
  default:
    // do nothing?
  }

  renderShoppingList();
  console.log('handleShoppingList accessed');
}

function main() {
  handleShoppingList();
}

$(main);