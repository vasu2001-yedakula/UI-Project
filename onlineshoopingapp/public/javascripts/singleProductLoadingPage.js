var openIndividualProductDetailsPage = (event) => {
    var productId = event.target.getAttribute('id');
    alert(productId);
    loadSelectedPage('singleProduct');

}