$(document).ready(function() {
  console.log('hello world');
  editMode();

  $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').click(function(event) {
    $('#allTab, #topsTab,#bottomsTap, #shoesTap, #accessoriesTab').removeClass('tabActive');
    $(this).addClass('tabActive');
  });



  // Add active class to the current button (highlight it)



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

    }
  */
})

function editMode() {
  $('#editButton').click(function(event) {
    $(this).hide();
    $('#saveButton').fadeIn();
    $('#addButton').fadeIn();
  });
}
