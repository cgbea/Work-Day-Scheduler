var currentDay = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

//Creating the rows for each time block.
var hours = [];

for (var i = 8; i <= 18; i++) {
    hours.push(i + ":00");
    var row = $("<div>");
    row.addClass("time-block row");
    row.append("<div class='col hour'> </div> <div class='col-8'><textarea id='input' name='input' rows='5' cols='1'> </textarea> </div> <div class='col saveBtn'> </div>");
    $(".container").append(row);

    //Adding hours in the first column
    row.find(".hour").text(hours[hours.length - 1]);

  };

  $(".saveBtn").append("<i class='fas fa-save fs-2 text'></i>")

  // $(".saveBtn").onclick = function() {
  //   localStorage.setitem("task", input)
  // }


//   $(".row").each(function(index) {
//     $(this).append("<div class='col hour'> </div> <div class='col-8'> </div> <div class='col'> </div>");
//     $(this).find(".hour").eq(i).text(hours[i]);
// });