/* MVP of application
- add date to top of the calendar
- add time blocks from 9AM-5PM by hour
- color code time blocks for past (grey), present(red), future(green)
- enter text into time block
- click the save button with icon for that time block & save text to local storage
- saved events persist after refreshed page */


// current date and time
var date = moment();
$("#currentDay").text(date.format("dddd[,] MMMM Do"));

var time = moment().hours();


// row formatting -- for each row: if the [current] time is equal to rowTime, format as red (.present). if the time is greater than the rowTime, format as grey (.past). if the current time is less than the rowTime, format as green (.future).

function rowFormat() {
  $(".description").each(function () {
    var rowTime = $(this).attr("id").split("-")[1];
    console.log(rowTime);
    console.log(time);

    if (time > rowTime) {
      $(this).addClass("past");
      console.log("past");
    } else if (time < rowTime) {
      $(this).addClass("future");
      console.log("future");
    } else {
      $(this).addClass("present");
      console.log("present");
    }
  });
};

rowFormat();


// save item to local storage on click save button
$(".saveBtn").click(function () {
  var value = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id"); 

  localStorage.setItem(time, value);
  console.log(value);
})

// get saved item from local storage
$("#09 .description").val(localStorage.getItem("09"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));