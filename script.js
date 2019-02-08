$(document).ready(function(){ 

$("aside").click(function(){ $("article").hide();}),

$(".disques").on({

  mouseenter: function(){                 
    $(this).css("background", "red");   
  }, 
  mouseleave: function(){                 //fonctions hover des pastilles pour changer les couleurs
    $(this).css("background", "black");
  }, 
  click: function(){
    var target;
    switch ($(this).attr("id")){
        case "disque1": target = "#epaule"; break;
        case "disque2": target = "#coude"; break;
        case "disque3": target = "#poignet"; break;
        case "disque4": target = "#hanche"; break;    //fonction qui fait apparaitre les textes
        case "disque5": target = "#genou"; break;
        case "disque6": target = "#cheville"; break;
    }
    $("article").hide(), $(target).show(),
    $(document).scrollTop($(document).height());
  } 
})


  
});


