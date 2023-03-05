(function(){
    const second = 1000,
    minute = second*60,
    hour = minute*60,
    day = hour*24;

    let birthday = "march 6, 2023 00:00:00",

    countdown = new Date(birthday).getTime(),
    x = setInterval(function(){

        let now = new Date().getTime(),
    
        distance = countdown - now;


        document.getElementById("days").innerText = Math.floor(distance/(day)),
 
        document.getElementById("hours").innerText = Math.floor((distance%(day))/hour),
 
        document.getElementById("minutes").innerText = Math.floor((distance%(hour))/minute),

        document.getElementById("seconds").innerText = Math.floor((distance%(minute))/second) ;  


        if(distance <= 0){

            let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");
            content.style.display= "block";
            countdown.style.display = "none";
            headline.innerText = "FELIZ ANIVERSARIO L.P😎"
            clearInterval(x);
            



        }



    }, 0) 

}())