// MVP of application 
// done - add date to top of the calendar
// add time blocks from 9AM-5PM by hour
// color code time blocks for past (grey), present(red), future(green)
// enter text into time block 
// click the save button with icon for that time block && save text to local storage
// saved events persist after refreshed page 


var date = moment();
$('#currentDay').text(date.format('dddd[,] MMMM Do')); 