export default function GetTodayDate(anyClientAPI) {

    var today = new Date();
    today.setTime(day.getTime()-24*60*60*1000);
    var todayDate = today.getFullYear()+"-" + (today.getMonth()+1) + "-" + today.getDate();

    return todayDate;


}