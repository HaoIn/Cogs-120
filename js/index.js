var complexData = [{
    'name': 'BlackSuptShirt',
    'url': 'img/blacksuptshirt.jpg',
    'type': 'tops',
    'color': 'Black'
  },
  {
    'name': 'Eazy350',
    'url': 'img/eazy.jpg',
    'type': 'shoes',
    'color':'Black'
  },
  {
    'name': 'GucciBelt',
    'url': 'img/belt.jpg',
    'type': 'accessories',
    'color': 'Black'
  },
  {
    'name': 'WhiteSupT-Shirt',
    'url': 'img/supreme_Shirt.jpg',
    'type': 'tops',
    'color': 'White'
  },
  {
    'name': 'GucciPant',
    'url': 'img/guccipants.jpg',
    'type': 'bottoms',
    'color': 'Red'
  },
  {
    'name': 'Rolex',
    'url': 'img/icyrolex.jpg',
    'type': 'accessories',
    'color': 'Gold'
  },
  {
    'name': 'GreyEazy350',
    'url': 'img/eazygrey.jpg',
    'type': 'shoes',
    'color':'Grey'
  },
  {
    'name': 'AudemarPiguet',
    'url': 'img/icedoutap.jpg',
    'type': 'accessories',
    'color': 'Silver'
  },
  {
    'name': 'RedNikePant',
    'url': 'img/nikepants.jpeg',
    'type': 'bottoms',
    'color': 'Red'
  },
  {
    'name': 'BlackNikePant',
    'url': 'img/nike_pants.jpg',
    'type': 'bottoms',
    'color':'Black'
  }

]

$(document).ready(function() {
  console.log('hello world');

    if (!(localStorage.key(0) === "itemData")){
      localStorage.setItem('itemData', JSON.stringify(complexData));
    }

    var source = $("#item-template").html();
    var template = Handlebars.compile(source);
    for (let i = 0; i < complexData.length; i++){
      let curData = JSON.parse(localStorage.getItem('itemData'));
      if (curData[i].type == "tops"){
        let parentDiv = $('#topImg');
        let curHtml = template(curData[i]);
        parentDiv.append(curHtml);
      }
    }




})
