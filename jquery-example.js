/* global $ */
$(function() {
    // 1. ALL externals JavaScript files have been loaded
    // 2. ALL external CSS files have been loaded
    // 3. ALL HTML elements are selectable
    
    
  
    
    $("#main").hide().fadeIn(3000);
    $("#favourites").hide()
    $("#explanation").hide();

    
    $("#clickme").click(function(){
        $("#favourites").show();
        $(".important").css("color", "red");
        $("li").css('font-family', 'Verdana')
        
    })
    
    $("#photo").mouseover(function(){
        $("#photo").attr("src", "dog2.jpg")
    })
    
    $("#photo").mouseout(function(){
        $("#photo").attr("src", "dog1.jpg")
    })
    
    $("#external-link").click(function(event){
        console.log(event);
        event.preventDefault();
    })
    
    $("#external-link").hover(function(){
        // for mouseover
        $("#explanation").show();
    }, function(){
        // for mouseout
        $("#explanation").hide();
    })
    
    $("#submit").click(function(event){
        event.preventDefault();
    })
    
})