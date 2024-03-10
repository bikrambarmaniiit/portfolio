var signup = document.getElementById('signup');
var login = document.getElementById('login');
var rightBackground = document.getElementById('rightbackground');
var leftBackground = document.getElementById('leftbackground');

login.addEventListener('click', function() {
    rightBackground.style.opacity = '1';
    rightBackground.style.transform = 'translateX(0)';
    leftBackground.style.opacity = '0';
    leftBackground.style.transform = 'translateX(-100%)';
  
});

signup.addEventListener('click', function() {
    rightBackground.style.opacity = '0';
    rightBackground.style.transform = 'translateX(100%)';
    leftBackground.style.opacity = '1';
    leftBackground.style.transform = 'translateX(0)';
    
});
