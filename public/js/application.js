$(document).ready(function(){

  $('#get_color').on('click', function(e){

    // Preventing the default action of the <a> tag
    e.preventDefault();

    // console.log("making an AJAX post request");
    $.ajax({
      type: "POST",
      url: "/color",
      success: function(data){
        $("#color_me li:nth-child(" + data.cell + ")").css('background-color', data.color);
      },
      error: function(){
        console.log('something went wrong :(')
      }
    })
  })
});
