var complexData = [{
    'title': 'blacksuptshirt',
    'profilePic': 'img/blacksuptshirt.jpg',
    'index': 2
  },
  {
    'title': 'Eazy 350',
    'profilePic': 'img/eazy.jpg',
    'index': 3
  },
  {
    'title': 'Gucci Belt',
    'profilePic': 'img/belt.jpg',
    'index': 4
  },
  {
    'title': 'White Sup T-Shirt',
    'profilePic': 'img/supreme_Shirt.jpg',
    'index': 5
  },
  {
    'title': 'Gucci Pant',
    'profilePic': 'img/guccipants.jpg',
    'index': 6
  },
]


$(document).ready(function() {
  console.log('hello world');
  editMode();

  $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').click(function(event) {
    $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').removeClass('tabActive');
    $(this).addClass('tabActive');
  });


})

function editMode() {
  $('#editButton').click(function(event) {
    $(this).hide();
    $('#saveButton').fadeIn();
    $('#addButton').fadeIn();
  });
}
