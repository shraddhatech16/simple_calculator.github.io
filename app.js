(function(){
    let screen=document.querySelector('.screen');
    let buttons=document.querySelectorAll('.btn');
    let equal=document.querySelector('.btn-equal');
    let clear=document.querySelector('.btn-clear');

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){//for taking values
            let value=e.target.dataset.num;//for storing 
            screen.value +=value;//for pushing
        })
    });
    equal.addEventListener('click', function(e){
        if(screen.value ===""){
            screen.value = "Please Enter";
        }else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })
})();