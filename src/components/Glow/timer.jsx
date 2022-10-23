
const timer = () =>{
    let timerId
    const countDate=new Date("July 30,2022 19:00:00").getTime();

    const now = new Date().getTime();
    const gap = countDate - now;

    if (gap <= 0){
        clearInterval(timerId)
        return
    }
    // How the fuck does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);


    document.getElementById("day").innerHTML = textDay;
    document.getElementById("hour").innerHTML = textHour;
    document.getElementById("minute").innerHTML = textMinute;
    document.getElementById("second").innerHTML = textSecond;

    
}

const timerId = setInterval(timer, 1000);

timer.defaultProps = {
    textDay : 0,
    textHour : 0,
    textMinute : 0,
    textSecond : 0
}