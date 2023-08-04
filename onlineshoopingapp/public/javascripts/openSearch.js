var hideShow = () => {

    var getdisplay = document.querySelector('.searchContainer').style.opacity;

    if(getdisplay == "" || getdisplay == "0")
    {
        $(".searchContainer").css('opacity', '1');
    }
    else
    {
        $(".searchContainer").css('opacity', '0');
    }
}