//<!-- Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
//clock that shows you the current machine time?

//Can you make it so that it updates every second, and shows time in the following formats -

// - HH:MM::SS (Eg. 13:45:23)

// - HH:MM::SS AM/PM (Eg 01:45:23 PM) -->

function updateTime(){
let currentTime=new Date();
let hours=currentTime.getHours();
let minutes=currentTime.getMinutes();
let seconds=currentTime.getSeconds();

    minutes=(minutes < 10 ? "0" : "")+ minutes;
    seconds=(seconds < 10 ? "0" : "")+ seconds;

    let time12h=hours > 12 ? hours-12:hours;
    let ampm=hours>=12 ?"PM" :"AM";

    console.log(hours+":"+minutes+": :"+seconds);
    console.log(time12h+":"+minutes+": :"+seconds+" "+ampm);

}

updateTime();
