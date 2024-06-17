for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(){
        var buttonListner = this.innerHTML;
        
        switch(buttonListner){
            case 'w':
                var audio = new Audio('./Assets/Sounds/tom-1.mp3');
                audio.play();
                break;
            
            case 'a':
                var audio = new Audio('./Assets/Sounds/tom-2.mp3');
                audio.play();
                break;

            case 's':
                var audio = new Audio('./Assets/Sounds/tom-3.mp3');
                audio.play();
                break;

            case 'd':
                var audio = new Audio('./Assets/Sounds/tom-4.mp3');
                audio.play();
                break;
            
            case 'j':
                var audio = new Audio('./Assets/Sounds/snare.mp3');
                audio.play();
                break;

            case 'k':
                var audio = new Audio('./Assets/Sounds/crash.mp3');
                audio.play();
                break;

            case 'l':
                var audio = new Audio('./Assets/Sounds/kick-bass.mp3');
                audio.play();
                break;
        }

    })

    document.querySelectorAll(".drum")[i].addEventListener("keydown" , function(event){

    var key = event.key;
        
    switch(key){
        case 'w':
            var audio = new Audio('./Assets/Sounds/tom-1.mp3');
            audio.play();
            break;
        
        case 'a':
            var audio = new Audio('./Assets/Sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('./Assets/Sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('./Assets/Sounds/tom-4.mp3');
            audio.play();
            break;
        
        case 'j':
            var audio = new Audio('./Assets/Sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('./Assets/Sounds/crash.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('./Assets/Sounds/kick-bass.mp3');
            audio.play();
            break;
        }

    })

}

for(var i = 0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function(event){
        var buttonListner = this.innerHTML;
        buttonAnimation(buttonListner)
    })

    document.querySelectorAll(".drum")[i].addEventListener("keydown" , function(event){
        var key = event.key;
        buttonAnimation(key);
    })

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100)
}
