var saveAccountDetails = () => {
    var userInfo = {};
    userInfo.accountId = $("#uid").val();
    userInfo.password = $("#pwd").val();
    userInfo.mailId = $("#userMailId").val();
    console.log(userInfo);
    $.ajax({
        url: '/signupNewUser',
        method: 'POST',
        data: userInfo,
        dataType: 'JSON',
        success: (res) => {
            console.log("REsponse");
            if (res.code  == 'Success') {
                $(".signupUserMsg").innerText = 'Successfully created';
            } else {
                $(".signupUserMsg").innerText = 'Error while created';
            }
        }
    })
}