jQuery(function(){
  jQuery(window).scroll(function(){

    if(jQuery(this).scrollTop() >0 && (jQuery("body").height()-250-jQuery(window).height()) >0){
        jQuery(".page-header").addClass("sticky");
    }else{
        jQuery(".page-header").removeClass("sticky");
    }
  });
});
function mostrar() {
    document.getElementById("menu").style.width = "300px";
    document.getElementById("menu").style.marginRight = "300px";
}
function ocultar() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.marginRight = "0";
}
function cerrar() {
    document.getElementById("cookies").style.display = "none";
}
