


// getting all the required elements
var dhour = document.getElementById('hr');
var dminute = document.getElementById('min');
var dsecond = document.getElementById('sec');
var dmillisecond = document.getElementById('msec');


var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');


var startb = document.getElementById('start');
var stopb = document.getElementById('stop');
var resetb = document.getElementById('reset');


// our main values which is going to display on our screen
let hr=0,min=0,sec=0,msec=0;

function timer(){
    msec+=10;

    // variables to check whether hour,minute,second is changed or not so that we can perform animation on them
    let hc=0,minc=0,secc=0;

    if(msec == 1000)
    {
        msec = 0;
        sec++;
        secc = 1; // means value of second is changed now we need to apply animation on it
        if(sec == 60)
        {
            sec = 0;
            min++;
            minc = 1;
            if(min == 60)
            {
                min = 0;
                hr++;
                hc = 1;
            }
        }
    }


    // checking if one digit number so we print its value with 0 at front
    let h = hr < 10 ? "0" + hr : hr;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = msec < 10 ? "00" + msec : msec;
    let m = min < 10 ? "0" + min : min;

    
    
    // checking if hour is changed or not
    if(hc)
    {
        box1.innerHTML = h;
        animate(dhour,box1,h,600);
    }
    if(minc)
    {
        box2.innerHTML = m;
        animate(dminute,box2,m,600);
    }
    if(secc)
    {
        box3.innerHTML = s;
        animate(dsecond,box3,s,500);
    }
    
    dmillisecond.innerHTML = ms;

}


// This function controls animation
function animate(prop1,prop2,val,time)
{   
    // adding animation classes which are present in our css file
    prop1.classList.add('animate1')
    prop2.classList.add('animate2');
    setTimeout(function()
    {   
        // now removing animation classes after the given time 
        prop1.classList.remove('animate1');
        prop2.classList.remove('animate2');
        prop1.innerHTML = val;
    } , time);
}

let interval;
let isstart = 0;


// Handling start button
startb.addEventListener('click',function(){
    // this condition prevents the setInterval to call again if we click on start button again while it is already running 
    if(!isstart)
    {
        interval = setInterval(timer,10);
        isstart  = 1;
    }
 
});

// Handling stop button
stopb.addEventListener('click',function(){
    clearInterval(interval);
    isstart = 0;
    return;
});


// Handling reset button
resetb.addEventListener('click',function()
{
    hr=0;min=0;sec=0;msec=0;
    dhour.innerHTML = `00`;
    dminute.innerHTML =`00`;
    dsecond.innerHTML = `00`;
    dmillisecond.innerHTML = `000`;
    clearInterval(interval);
    isstart = 0;
    return;
});

