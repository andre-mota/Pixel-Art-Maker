// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  // variables
  var table = $('#pixel_canvas');

  var rows=$('#input_height').val();
  var cols=$('#input_width').val();
  // reset Canvas
  table.children().remove();


  // Set the size of the cross stitch canvas

  for (r=0;r<rows;r++){
    table.append("<tr></tr>");
    for (c=0;c<cols;c++){
      table.children().last().append("<td></td>");
    }
  }

  // listen for table clicks
  table.on("click","td",function(){
    var color=$('#colorPicker').val();
    if ($(this).attr("bgcolor") != color){
      $(this).attr("bgcolor", color);
    } else {
      $(this).attr("bgcolor", "white");
    }
  })

}

// Listen for submit to create grid
$('input[type="submit"]').click(function(e){
  e.preventDefault();
  makeGrid();
})
