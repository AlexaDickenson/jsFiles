const listItems= document.querySelector('ul').children;
const listCount=listItems.length;
const item1=listItems[0];
const item2=listItems[1];
const item3=listItems[2];
const item4=listItems[3];

item2.innerHTML="Granny Smith Apples"; //changes "apples" to "granny smith apples"

item4.remove(); //removes oat milk

const lI= document.querySelector('ul');//adds kombucha to the end of the list
const newItem=document.createElement('li');
newItem.innerHTML= "Kombucha";
lI.appendChild(newItem);

lI.innerHTML="";//clears the list

const newItemsArray = ['protein bars', 'almonds', 'peanut butter'];
for (const item of newItemsArray) {
    const newLi = document.createElement('li');
    newLi.innerHTML = item;
    list.appendChild(newLi);};

const newListItems= document.querySelector('ul').children;
const newListCount=newListItems.length;
const newItem1=newListItems[0];
const newItem2=newListItems[1];
const newItem3=newListItems[2];
const newItem4=newListItems[3];

newItem2.classList.add('important');
