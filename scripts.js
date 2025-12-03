//prep
$(document).ready(function(){
  $(".EX").hide();
  $(".LEST").show();
  $(".MISCpixel").show();


//.projects toggler
$(".EXHead").hover(function(){
    $(".toggle").animate({left: '50%'}, 1.0);
  });

  $(".EXHead").click(function(){
    $(".LE").hide();
    $(".EX").fadeIn("0.5");
    $(".LESections").hide();
    $(".EXSections").fadeIn("0.5");
  });

  $(".LEHead").hover(function(){
    $(".toggle").animate({left: '0%'}, 1.0);
  });

  $(".LEHead").click(function(){
    $(".EX").hide();
    $(".LE").fadeIn("0.5");
    $(".LESections").fadeIn("0.5");
    $(".EXSections").hide();
  });

//different "articles"  
$("#star").click(function(){
 $(".LEST").fadeIn("0.5");

    $(".LEST").show();
    $(".LEMU").hide();
    $(".LEF").hide();

});

$("#shop").click(function(){
 $(".LEMU").fadeIn("0.5");

    $(".LEMU").show();
    $(".LEST").hide();
    $(".LEF").hide();
});

$("#fit").click(function(){
 $(".LEF").fadeIn("0.5");

    $(".LEF").show();
    $(".LEST").hide();
    $(".LEMU").hide();
});

$("#nourysh").click(function(){
 $(".EXN").fadeIn("0.5");

    $(".EXN").show();
    $(".EXWP").hide();
});

$("#walter").click(function(){
 $(".EXWP").fadeIn("0.5");

    $(".EXWP").show();
    $(".EXN").hide();
});


//misc projects
$("#pixel").click(function(){
 $(".MISCpixel").fadeIn("0.5");

    $(".MISCpixel").show();
    $(".MISCadobe").hide();
    $(".MISCwip3").hide();
});

$("#adobe").click(function(){
 $(".MISCadobe").fadeIn("0.5");

    $(".MISCadobe").show();
    $(".MISCpixel").hide();
    $(".MISCwip3").hide();
});

$("#wip3").click(function(){
 $(".MISCwip3").fadeIn("0.5");

    $(".MISCwip3").show();
    $(".MISCpixel").hide();
    $(".MISCadobe").hide();
});

 });