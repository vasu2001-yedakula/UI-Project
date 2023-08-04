var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'H', 'G', 'J', 'I',];

var generateCaptcha = () => {
    var captcha = getrandomuppercase() + getrandomnum(9) + getrandomlowercase() + getrandomnum(9) + getrandomuppercase() ; 
    document.querySelector('#generator').innerHTML = captcha;
}

var getrandomnum = (max) => {
    var randomnum = Math.round(Math.random() * max);
    return randomnum;
}

var getrandomlowercase = () =>{
    var randomlowercase = getrandomnum(lowercase.length);
    return lowercase[randomlowercase];
}


var getrandomuppercase = () =>{
    var randomuppercase = getrandomnum(uppercase.length);
    return uppercase[randomuppercase];
}
