var complexData = [{
    'name': 'blacksuptshirt',
    'url': 'img/blacksuptshirt.jpg',
    'type': 'tops'
  },
  {
    'name': 'Eazy 350',
    'url': 'img/eazy.jpg',
    'type': 'shoes'
  },
  {
    'name': 'Gucci Belt',
    'url': 'img/belt.jpg',
    'type': 'accessories'
  },
  {
    'name': 'White Sup T-Shirt',
    'url': 'img/supreme_Shirt.jpg',
    'type': 'tops'
  },
  {
    'name': 'Gucci Pant',
    'url': 'img/guccipants.jpg',
    'type': 'bottoms'
  },
  {
    'name': 'Rolex',
    'url': 'img/icyrolex.jpg',
    'type': 'accessories'
  },
  {
    'name': 'Grey Eazy 350',
    'url': 'img/eazygrey.jpg',
    'type': 'shoes'
  },
  {
    'name': 'Audemar Piguet',
    'url': 'img/icedoutap.jpg',
    'type': 'accessories'
  },
  {
    'name': 'Red Nike Pant',
    'url': 'img/nikepants.jpeg',
    'type': 'bottoms'
  },
  {
    'name': 'Black Nike Pant',
    'url': 'img/nike_pants.jpg',
    'type': 'bottoms'
  }

]


$(document).ready(function() {
  console.log('hello world');
  editMode();

  $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').click(function(event) {
    $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').removeClass('tabActive');
    $(this).addClass('tabActive');
  });

  var source   = $("#item-template").html();
  var template = Handlebars.compile(source);
  var parentDiv = $(".row");

  for (var i = 0; i < complexData.length; i++) {
    var curData = complexData[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
  filterSelection("all");
})

function editMode() {
  $('#editButton').click(function(event) {
    $(this).hide();
    $('#saveButton').fadeIn();
    $('#addButton').fadeIn();
  });
}
