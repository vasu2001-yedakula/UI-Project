var readUserInfo = () => {
    var data = {};
    data.accountId = $("#userId").val();
    data.password = $("#acntPwd").val();
    
    if (document.querySelector("#flexSwitchCheckDefault").checked) {
        sessionStorage.setItem("userLoginCredentials", JSON.stringify(data));
    } else {
        sessionStorage.removeItem("userLoginCredentials");
    }
    // captcha validation
    var userEntryValue;
    var systemCaptchaValue;
    userEntryValue = $("#userCaptcha").val();
    systemCaptchaValue = $("#generator").text();
    console.log(userEntryValue);
    console.log(systemCaptchaValue)
    if (userEntryValue != systemCaptchaValue) {
        $(".captchaError").show(200);
        return;
    }
    $.ajax({
        url: '/validate/userCredentials',
        data: data,
        dataType: 'JSON',
        method:'POST',
        success: (response) => {
            if (response.msg == 'Invalid') {
                $(".errBlocklogin").text("Invalid Credentials")
            } else {
                loadSelectedPage("pdetails");
            }
        },
        error: (error) => {

        }
    })
}

var singleProductTemplate = '';
var loadProductTemplate = () => {
    $.ajax({
        url: 'templates/singleProduct.htm',
        method: 'GET',
        success: (responseTemplate) => {
            singleProductTemplate = responseTemplate;

            singleProductTemplate = Handlebars.compile(singleProductTemplate);
        }
    })
}
loadProductTemplate();