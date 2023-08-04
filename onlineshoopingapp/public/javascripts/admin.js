var readProductData = () => {
    var productData = {};
    productData.pname  = $("[name=pname]").val();
    productData.actualPrice  = $("[name=actualPrice]").val();
    productData.discountPercent  = $("[name=discountPercent]").val();
    productData.rating  = $("[name=rating]").val();
    productData.imageUrl  = "sample.jpg";
    productData.description  = $("[name=description]").val();
    console.log(productData);

    $.ajax({
        method: 'POST',
        url: '/add/newProductDetails',
        dataType: 'JSON',
        data: productData,
        success: (response) => {
            console.log(response)
        },
        error: (err) => {
            console.log("err")
        }
    })
}

var uploadDetails = () => {
    console.log($("input[name=prodImage]"));
    let uploadfile = $("input[name=prodImage]")[0].files[0] // file from input
    console.log("current file size is " + uploadfile.size)

    let formData = new FormData();
    formData.append("prodImage", uploadfile);

    var imageUploadReq = $.ajax({
        url: '/upload/productImage',
        type: 'POST',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false,
        contentType: false,
        dataType: 'JSON'
    });
    
}
