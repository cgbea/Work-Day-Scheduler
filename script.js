var currentDay = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

//Creating the rows for each time block.
var hours = [];

for (var i = 8; i <= 18; i++) {
    hours.push(i + ":00");
    var row = $("<div>");
    row.addClass("time-block row");
    row.append("<div class='col hour'> </div> <div class='col-8'> </div> <div class='col saveBtn'> </div>");
    // row.text(hours[hours.length -1]);
    $(".container").append(row);
    row.find(".hour").text(hours[hours.length - 1]);

  };

  //Distinguishing the columns in each time block, starting with 'hour' 

//   $(".row").each(function(index) {
//     $(this).append("<div class='col hour'> </div> <div class='col-8'> </div> <div class='col'> </div>");
//     $(this).find(".hour").eq(i).text(hours[i]);
// });