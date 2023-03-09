$(document).ready(function() {

    /*
    Code for dropdown menu on the navbar
    */
    let isDisplayed = false;
    const menu_link = $('#nav-left a').first()[0];

    // Display dropdown
    $(menu_link).hover(function() {
        $('#dropdown').css('opacity', '1');
        isDisplayed = true;
    })

    // Hide dropdown
    $('#dropdown').mouseleave(() => {
        if(isDisplayed) {
            $('#dropdown').css('opacity', '0');
            isDisplayed = false;
        }
    })
})