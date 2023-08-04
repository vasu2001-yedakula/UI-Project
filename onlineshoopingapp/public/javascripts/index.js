

var loadSelectedPage = (pageType) => {
    var templateUrl;
    switch(pageType) {
        case 'login':
            templateUrl = 'templates/login.htm';
            break;
        case 'fgpwd':
            templateUrl = 'templates/fgpwd.htm';
            break;
        case 'signup':
            templateUrl = 'templates/newSignup.htm';
            break;   
        case 'singleProduct':
            templateUrl = 'templates/detailedProductpage.htm';
            break;
        case 'pdetails':
            templateUrl = 'templates/productDetails.htm';

    }
    $.ajax({
        url: templateUrl,
        method: 'GET',
        data: {},
        success: (response) => {
            $(".detailsContainer_main").html(response);
            if (pageType == 'pdetails') {
                getProductDetails();
            } else if (pageType == 'login') {
                prefillUserIdAndPwd();                
                generateCaptcha();
            }
        },
        error: (err) => {
            console.log(err)
        }
    })
}

loadSelectedPage('login');

var prefillUserIdAndPwd = () => {
    if (sessionStorage.getItem('userLoginCredentials') != null) {
        var data = JSON.parse(sessionStorage.getItem('userLoginCredentials'));        
        $("#userId").val(data.accountId)
        $("#acntPwd").val(data.password)
    }
}