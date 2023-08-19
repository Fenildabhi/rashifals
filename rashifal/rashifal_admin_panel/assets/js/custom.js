$(function(){
    $("#sidemenu").load("sidemenu.html"); 
  });
  
  setTimeout(function(){
    $(".tab_sidebar_main").hover(
      function () {
          $(".main_outer_wrapper").addClass("tab_sidebar_main_active");
      },
      function () {
          $(".main_outer_wrapper").removeClass("tab_sidebar_main_active");
      }
  );
  $(".sidebar_collapse_button").hover(
      function () {
          $(".main_outer_wrapper").removeClass("tab_sidebar_main_active");
      }
  );
  }, 900);
  
  $(".rashi_collaps").click(function(){
    console.log("ajd");
    $(".fa-chevron-down").toggle();
    $(".fa-chevron-up").toggle();
  });