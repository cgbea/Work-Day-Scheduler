var currentDay = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(currentDay);

//Creating the rows for each time block.
var hours = [];

for (let i = 8; i <= 18; i++) {
    hours.push(i + ":00");
    var row = $("<div>");
    row.addClass("time-block row");
    row.append("<div class='col hour'> </div> <div class='col-8'><textarea id='input-" + [i] +"' name='input' rows='5' cols='1'> </textarea> </div> <div class='col saveBtn'> <button type='button'><i id= 'save-" + [i] + "' class='fas fa-save fs-2 text'></i></button> </div>");
    $(".container").append(row);

    //Adding hours in the first column
    row.find(".hour").text(hours[hours.length - 1]);
    
    isPast(i);
    isPresent(i);
    isFuture(i);
  };

  function isPast(i){
    if (i < dayjs().hour()){
      $("#input-" +i).addClass("past")
    }

  }

  function isPresent(i){
    if (i === dayjs().hour()){
      $("#input-" +i).addClass("present")
    }

  }
  
  function isFuture(i){
    if (i > dayjs().hour()){
      $("#input-" +i).addClass("future")
    }

  }

  //Add click functionality to save button
  // $(".saveBtn").append("<button type='button'><i id= 'save' class='fas fa-save fs-2 text'></i></button>")

  // document.getElementById("save").addEventListener("click", function ()
  //   { for (var i =8; i <=18; i++)
  //     { var input = document.getElementById("input").value ;
  //       localStorage.setItem("task", input) ;
  // }  } );

// Load saved data into textareas
for (let i = 8; i <= 18; i++) {
  var savedData = localStorage.getItem("task-" + i);
  if (savedData !== null) {
      document.getElementById("input-" + i).value = savedData;
  }
}
  

  for (let i = 8; i <= 18; i++) {
    document.getElementById("save-" + i).addEventListener("click", function () {
        var index = this.id.split("-")[1]; 
        var input = document.getElementById("input-" + index).value;
        localStorage.setItem("task-" + index, input);
    });
}
