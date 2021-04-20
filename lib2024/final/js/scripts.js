window.onload = init;



function init() {

    var imgThumbs = document.querySelectorAll('.main-image');
    for (var i = 0; i < imgThumbs.length; i++) {

      imgThumbs[i].addEventListener('click', showImgLightBox);
    }

    $('#form').submit(function (e) {
         e.preventDefault();
         $("#results").removeClass('reveal');
         var form = this;
         $(".overlay-container").fadeIn(1000, function(){
                showformValues(form);
                $('.overlay-container').delay(500).fadeOut(500);
                $("#results").addClass('reveal');
         });
    });

}

function showformValues(form){
    var formValues = $(form).serializeArray();       
    $.each(formValues, function(index, field){
        $("#results").find("#"+field.name+"_result").text(field.value);

        if(field.name=="email"){
            $("#results").find("#"+field.name+"_result").attr("href", "mailto:"+field.value);
        }
    });              
}

function showImgLightBox(){
    var targetImgId = this.getAttribute("id");
    console.log(targetImgId);
    document.querySelector('#main-image').style.display ="block";
    document.querySelector('.main-image.active').classList.remove('active');
    document.querySelector("#"+targetImgId).classList.add('active');
}