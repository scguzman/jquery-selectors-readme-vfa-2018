// declare your functions here...
function paragraphSelector() {
 return $('p')
}

function lastImageSelector() {
 $('div:last')
}

function ninjaBabySelector() {
 $('#baby-ninja') 
 $("img[alt='baby ninja']")
}

function divSelector() {
  $('.pics')
}

function firstListItem() {
  first-child selector to return first list item in the ul with the ID pic-list
  $('parent-tag child-tag:first-child')
  $('div img: first-child')
}