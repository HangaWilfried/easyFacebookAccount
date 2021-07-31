var user = document.getElementById('user');
var passWord = document.getElementById('password');
var senter = document.getElementById('soumettre');
var form = document.querySelector('form');
var span = document.querySelector('span');


//pour avoir le controle sur la couleur des bordures lors de la saisie
user.addEventListener('input', function(){
    if(this.value.indexOf('@') == -1 ){
        this.className = 'wrongTyping';
        span.innerHTML = "cet E-mail n'est pas valide";
    }
    else if(user.value.length <= 4){
        this.className = 'wrongTyping';
        span.innerHTML = "il se pourrait que cet utilisateur n'existe pas"; 
    }

    else{
        span.innerHTML = "";
        this.className = 'goodTyping';
    } 
})

passWord.addEventListener('input',function(){
    if(this.value.length < 8){
        span.innerHTML = "c'est trop court pour un mot de passe";
        this.className = 'wrongTyping';
    }
    else{
        span.innerHTML = "";
        this.className = 'goodTyping';      
    }

})

form.addEventListener('input',function(){
    if(passWord.className != "goodTyping" || user.className != "goodTyping"){
        senter.disabled = true;
        senter.className = "cantsend";
    }
    else if(senter.disabled == true){
        senter.disabled = false;
        senter.className = "cansend";
    }
})