var elem = document.querySelector("#elem")
var row = document.getElementById("row")
var colom = document.getElementById("colom")
var button = document.getElementById("button")

button.addEventListener('click', function (el, rows, cols) {
  var el = elem
  var rows = parseInt(row.value)
  var cols = parseInt(colom.value)
  var table = document.createElement('table')

  for (var i = 0; i < rows; i += 1) {
    var tr = document.createElement('tr');

    for (var x = 0; x < cols; x += 1) {
      var td = document.createElement('td');
      td.setAttribute("id", "td")
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  el.appendChild(table);
})

elem.addEventListener('click', function (cell) {
  let elm = cell.target;
  if (elm.hasChildNodes() != true) {
    let div = document.createElement('div');
    elm.appendChild(div);
    div.setAttribute("id", "chip")
    div.setAttribute("class", "chip")
  } else {
    elm.remove()
  }
})

//  ПРОБОВАЛ ВАРИАНТ ДВОЙНОГО ИФ - НЕ АЙС
// elem.addEventListener('click', function (cell) {
//   let elm = cell.target;
//   if (document.getElementsById('td') == true){
//     if (elm.hasChildNodes() != true) {
//       let div = document.createElement('div');
//       elm.appendChild(div);
//       div.setAttribute("id", "chip")
//       div.setAttribute("class", "chip")
//     } else {
//       elm.remove()
//     }
//   }
//   else {
//     return
//   }
// })

// elem.addEventListener('click', function (cell) {
//   let elm = cell.target;
//   var div = document.createElement('div');
//   elm.appendChild(div);
//   div.setAttribute("id", "chip")
//   div.setAttribute("class", "chip")
// })

// elem.addEventListener('click', function (cell) {
//   let elm = cell.target;
//   elm.removeChild();
// })

// elem.addEventListener('click', function (cell) {
//   let elm = cell.target;
//   if (elm.hasChildNodes() != true) {
//     let div = document.createElement('div');
//     elm.appendChild(div);
//     div.setAttribute("id", "chip")
//     div.setAttribute("class", "chip")
//     elm.appendChild.maxlength == 1
//   } else {
//     elm.removeChild('div')  }
// })
