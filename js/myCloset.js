var complexData = [{
    'title': 'Needfinding',
    'profilePic': 'img/blacksuptshirt.jpg',
    'index': 2
  },
  {
    'title': 'Prototyping',
    'profilePic': 'img/eazy.jpg',
    'index': 3
  },
  {
    'title': 'Heuristic Evaluation',
    'profilePic': 'img/belt.jpg',
    'index': 4
  },
  {
    'title': 'Visualization',
    'profilePic': 'img/supreme_Shirt.jpg',
    'index': 5
  },
  {
    'title': 'Social design',
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

  filterSelection("all")

  function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }

  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  // Add active class to the current button (highlight it)
  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

  //preload bunch of fake image
  //ask the people enter the data we want.
  /*  var elephant = document.getElementById("uploadImg");

    elephant.addEventListener("load", function() {
      var imgCanvas = document.createElement("canvas"),
        imgContext = imgCanvas.getContext("2d");

      // Make sure canvas is as big as the picture
      imgCanvas.width = elephant.width;
      imgCanvas.height = elephant.height;

      // Draw image into canvas element
      imgContext.drawImage(elephant, 0, 0, elephant.width, elephant.height);

      // Get canvas contents as a data URL
      var imgAsDataURL = imgCanvas.toDataURL("image/png");

      // Save image into localStorage
      try {
        localStorage.setItem("elephant", imgAsDataURL);
      } catch (e) {
        console.log("Storage failed: " + e);
      }
    }, false);

    var $img = $('<img />', { src: localStorage.getItem('elephant') });
  $('body').append($img);
  */

  /*  var source = $("#item-template").html();
    var template = Handlebars.compile(source);

    var parentDiv = $("#templatedRow");

    for (var i = 0; i < complexData.length; i++) {
      var curData = complexData[i];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
  */


}





})

function editMode() {
  $('#editButton').click(function(event) {
    $(this).hide();
    $('#saveButton').fadeIn();
    $('#addButton').fadeIn();
  });
}
