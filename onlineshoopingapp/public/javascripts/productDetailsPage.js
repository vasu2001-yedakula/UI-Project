var pData;
var getProductDetails = () => {
    $.ajax({
        url: '/get/productDetails',
        method: 'GET',
        data: {},
        dataType: 'JSON',
        success: (response) => {
            console.log("Response");
            console.log(response);
            pData = response;
            loadProductData();
        },
        error: (error) => {
            console.log(error);
        }
    })
}
var loadProductData = () => {
    pData.forEach((item, index) => {
        item.priceAfterDiscount = item.actualPrice - ((item.actualPrice * item.discountPercent) / 100);
        $(".detailsCardContainer").append(singleProductTemplate(item));
        var id = '#' + item.pid;
        $(id).html(getRatingImages(item.rating))
    });
}

var getRatingImages = (rating) => {
    var roundOffRating = Math.floor(rating);
    var divTag = document.createElement('div');
    divTag.setAttribute("class", 'ratingImg')

    // Adding Fullstars
    for (var i = 0 ; i < roundOffRating; i++) {
        var imgTag = document.createElement("img");
        imgTag.setAttribute('src', 'images/fullstar.PNG');
        divTag.append(imgTag);
    }

    // half  star check
    if (rating != Math.floor(rating)) {
        var imgTag = document.createElement("img");
        imgTag.setAttribute('src', 'images/halfstar.PNG');
        divTag.append(imgTag);
        roundOffRating++;
    }

    // Adding graystars
    if (rating < 5) {
        var totalGrayStars = 5 - roundOffRating;
        for (var i = 0 ; i < totalGrayStars; i++) {
            var imgTag = document.createElement("img");
            imgTag.setAttribute('src', 'images/grayStar.PNG');
            divTag.append(imgTag);
        }
    }
    return divTag;
}

