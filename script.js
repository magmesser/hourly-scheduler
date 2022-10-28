// MVP of application
// done - add date to top of the calendar
// IP - add time blocks from 9AM-5PM by hour
// done - color code time blocks for past (grey), present(red), future(green)
// done - enter text into time block
// click the save button with icon for that time block && save text to local storage
// saved events persist after refreshed page
// debugs: rounded text-area should be square

var date = moment();
$("#currentDay").text(date.format("dddd[,] MMMM Do"));

var time = moment().hours();

// for each row: if the [current] time is equal to rowTime, format as red (.present). if the time is greater than the rowTime, format as grey (.past). if the current time is less than the rowTime, format as green (.future).

function rowFormat() {
  $(".time-block").each(function () {
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
}

rowFormat();
