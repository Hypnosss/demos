var show = 0;

$("#clickMe").on("click", function(){
    if(show){
        $("#floatingLayer").hide();
        show = 0;    
    }else{
        $("#floatingLayer").show();
        show = 1;
        $(document).one("click",function(){
            $("#floatingLayer").hide();
            show = 0;
        });
    }
})

$(".wrapper").on("click",function(e){
    e.stopPropagation();
})

