var complexData = [{
    'name': 'BlackSuptShirt',
    'url': 'img/blacksuptshirt.jpg',
    'type': 'tops'
  },
  {
    'name': 'Eazy350',
    'url': 'img/eazy.jpg',
    'type': 'shoes'
  },
  {
    'name': 'GucciBelt',
    'url': 'img/belt.jpg',
    'type': 'accessories'
  },
  {
    'name': 'WhiteSupT-Shirt',
    'url': 'img/supreme_Shirt.jpg',
    'type': 'tops'
  },
  {
    'name': 'GucciPant',
    'url': 'img/guccipants.jpg',
    'type': 'bottoms'
  },
  {
    'name': 'Rolex',
    'url': 'img/icyrolex.jpg',
    'type': 'accessories'
  },
  {
    'name': 'GreyEazy350',
    'url': 'img/eazygrey.jpg',
    'type': 'shoes'
  },
  {
    'name': 'AudemarPiguet',
    'url': 'img/icedoutap.jpg',
    'type': 'accessories'
  },
  {
    'name': 'RedNikePant',
    'url': 'img/nikepants.jpeg',
    'type': 'bottoms'
  },
  {
    'name': 'BlackNikePant',
    'url': 'img/nike_pants.jpg',
    'type': 'bottoms'
  }

]


$(document).ready(function() {
  console.log('hello world');

    if (!(localStorage.key(0) === "itemData")){
      localStorage.setItem('itemData', JSON.stringify(complexData));
    }





  var source = $("#item-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $(".row");

  for (var i = 0; i < complexData.length; i++) {
    var curData = JSON.parse(localStorage.getItem('itemData'));
    var curHtml = template(curData[i]);
    // need to load data from localStorage
    parentDiv.append(curHtml);
  }
  filterSelection("all");

  $('#add').click(function(event) {
    let myStorage = window.localStorage;
    let existingData = JSON.parse(myStorage.getItem('itemData'));
    let itemName = $('#item-name').val();
    let url = $('#url').val();
    let type = $('#types').val();
    let item = {
      'name': itemName,
      'url': url,
      'type': type
    };
    existingData.push(item);
    myStorage.setItem('itemData', JSON.stringify(existingData));
    reload();
    filterSelection("all");
  });



})


function reload() {
  $('.row').empty();
  var source = $("#item-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $(".row");
  var curData = JSON.parse(localStorage.getItem('itemData'));
  for (var i = 0; i < curData.length; i++) {
    var curHtml = template(curData[i]);
    console.log(curHtml);
    parentDiv.append(curHtml);
  }
  filterSelection("all");
  window.location.reload();
}
