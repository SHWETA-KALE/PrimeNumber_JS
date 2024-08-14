function PrimeNumber(){
    //accessing the val
    var num = parseInt(f1.n1.value);
    var isPrime = true;
    var res = document.getElementById("result")

    for(var i=2; i<=Math.sqrt(num); i++){
        if(num % i == 0){
            isPrime = false;
            break;
        }
    }

    if(num<=1){
        res.innerHTML= (num + " is not Prime number");
    }
    else if(isPrime){
        res.innerHTML =(num + " is a Prime number");
    }else{
        res.innerHTML=(num + " is not a Prime number")
    }
}