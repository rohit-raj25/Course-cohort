<!-- counter without set Interval -->

let i=0;
function counter(){
console.log(i++);
setTimeout(counter,1000);
}

counter();
