     //Le code $(document).ready(function(){ }) est utilisé en JavaScript pour s'assurer que tout le code dans la fonction anonyme ne sera exécuté que lorsque la page HTML est entièrement chargée et prête à être manipulée.

// $(document).ready(function(){
//     // $(".par2").hide();
//     // $("#title1").hide();
//     $("p:nth-child(3)").hide();
// });

/*************************************** */

/**Cette écriture de la fonction est plus récente et fonctionne comme la première */
$(function() {
    $("#title1").hide();
 });

$(function() {
    $("#p1").click(function(){
        $("#p5").hide();
        
    });

//hover: Cet événement est déclenché lorsqu'un élément est survolé par la souris.
    $("#p3").hover(function(){
        $(this).css("background-color", "red");
      }, function(){
        $(this).css("background-color", "white");
      });
      
    

      //keydown: Cet événement est déclenché lorsque l'utilisateur appuie sur une touche de clavier.
    //   $(document).keydown(function(e){
    //     alert("Vous avez appuyé sur la touche " + e.key);
    //   });


      //click: Cet événement est déclenché lorsque l'utilisateur clique sur un élément spécifié.
      $("button").click(function(){
        alert("Vous avez réussi à cliquer sur un bouton.");
      });
      
// //load: Cet événement est déclenché lorsque la page web est entièrement chargée.
//       $(window).on('load', function() {
//         alert("La page est entièrement chargée.");
//       });
      
      //Quend on entre sur le p4, le p6 disparait.
      $("#p4").mouseenter(function(){
        $('#p6').hide();
      });
      $('#p4').mouseleave(function(){
        $("#p6").show();
      });




      s('#p2').on({
        mouseenter: function(){
            $("#p7").hide();
        },
        mouseleave:function(){
            $("#p7").show();
        },
        click:function(){
            $("#p8").hide();
        },

      });
 });