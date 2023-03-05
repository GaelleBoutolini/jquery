     //Le code $(document).ready(function(){ }) est utilisé en JavaScript pour s'assurer que tout le code dans la fonction anonyme ne sera exécuté que lorsque la page HTML est entièrement chargée et prête à être manipulée.

// $(document).ready(function(){
//     // $(".par2").hide();
//     // $("#title1").hide();
//     $("p:nth-child(3)").hide();
// });

/*********Les différents effets******* */

// /**Cette écriture de la fonction est plus récente et fonctionne comme la première */
// $(function() {
//     $("#title1").hide();
//  });

// $(function() {
//     $("#p1").click(function(){
//         $("#p5").hide();
        
//     });

//hover: Cet événement est déclenché lorsqu'un élément est survolé par la souris.
    // $("#p3").hover(function(){
    //     $(this).css("background-color", "red");
    //   }, function(){
    //     $(this).css("background-color", "white");
    //   });
      
    

      //keydown: Cet événement est déclenché lorsque l'utilisateur appuie sur une touche de clavier.
    //   $(document).keydown(function(e){
    //     alert("Vous avez appuyé sur la touche " + e.key);
    //   });


      //click: Cet événement est déclenché lorsque l'utilisateur clique sur un élément spécifié.
    //   $("button").click(function(){
    //     alert("Vous avez réussi à cliquer sur un bouton.");
    //   });
      
// //load: Cet événement est déclenché lorsque la page web est entièrement chargée.
//       $(window).on('load', function() {
//         alert("La page est entièrement chargée.");
//       });
      
      //Quend on entre sur le p4, le p6 disparait. hide()(cest pour cacher)
      // et show(): (c'est pour afficher un élément)
      // et slow(): (c'est pour cacher lentement); 
      //fast(): (c'est pour cacher rapidement)
      //on peut mettre le temps en millisecondes
      
    //   $("#p4").mouseenter(function(){
    //     $('#p6').hide("5000");
    //   });
    //   $('#p4').mouseleave(function(){
    //     $("#p6").show();
    //   });

    /*********le collback********* */
    //le collback (effets en cascade, c'est-à-dire ce qui va se passer une fois que ce sera fini)
    //   $("#p4").click(function(){
    //     $('#p2').hide(3000, function(){
    //         $('#p7').hide(3000, function (){
    //             $('#p8').hide(3000);
    //         });
    //     });
    //   });
      

/***************effets toggle********** */
//quand c'est visible,il rend invisible et le contraire
    //   $("#p2").click(function(){
    //         $('#p4').toggle();
    //   });
        

    /******************Effet fadeOut**** */
    //lié à l'opacité, l'élément devient moins visible
    //   $("#p2").click(function(){
    //         $('#p4').fadeOut(3000);
    //   });



/***********fadeIn*************** */
//c'est le contraire du fadeOut
      
            // $('#p2').click(function(){
            //     $('#p7').fadeIn(3000);
            // });
        
      
      /*************fadeToggle********* */

            // $('#p2').click(function(){
            //     $('#p7').fadeToggle(3000);
            // });
        
      
      /*************fadeTo********* */
// //L'opacité et la durée de cette de opacité
//             $('#p2').click(function(){
//                 $('#p7').fadeTo(3000, 0.5);
//             });
        



//       s('#p2').on({
//         mouseenter: function(){
//             $("#p7").hide();
//         },
//         mouseleave:function(){
//             $("#p7").show();
//         },
//         click:function(){
//             $("#p8").hide();
//         },

//       });
 //});




/******PARTIE ANIMATION jquery************** */

//pour lancer une animation en jquery, il faut:

//la base, c'est la fonction (animate()) qui prend des arguments ou paramètres. 
//le prmier argument c'est un objet sur lequel va porter l'animation.
//le deuxième, c'est la vitesse, cad: le temps d'exécution de l'animation: (slow, fade, ou les millisecondes)
//troisième, peut-être le collback

//nb.: les arguments 2 et 3 sont optionnels.

//le (selector) est nécessaire


/*****Partie animation aussi */
// $(function(){

//     $("button").click(function(){
//         $("div").animate({left: '500'}, 3000, function(){
//             $("div").hide();
//         });
//     });
// });

//ici, ma div diminue au fur et à mesure qu'elle se déplace et perd aussi d'opacité.
// $(function(){
//     $('button').click(function(){
//         $('div').animate({
//             left: '600px',
//             opacity: 0.2,
//             with: '200px',
//             height: '200px',

//         }, 5000)
//     });


/***************** */
//je peux faire le contraire. Augmenter la taille et la hauteur lors qu'elle se déplace
// $(function(){
//     $('button').click(function(){
//         $('div').animate({
//             left: '600px',
//             opacity: 0.2,
//             with: '+=150px',
//             height: '+=150px',
//         }, 5000)
//     });





/***Réaliser plusieurs animations à la suite** */

//il y a aussi un mécanisme de stokage de mes lignes. C'est-à-dire que lorsqu'il y aplusieurs lignes à exécuter, il va le faire ligne après ligne.
// $(function(){
//     $('button').click(function(){
//         $('div').animate({
//             left: '600px'},3000);
//         $('div').animate({ opacity: 0.2},3000);
//         $('div').animate({ width: '400px'},3000);
//         $('div').animate({ height: '400px'},3000);
//     });

//Ici, il fait la première action: aller à gauche. 
//puis, il perd en opacité
//puis, change de taille
//puis, il change de hauetur.




/*Utiliser l'action STOP et START */

// $(function(){
//     $('#start').click(function(){
//         $('div').animate({
//             left: '600px'},3000);
//         $('div').animate({ opacity: 0.2},3000);
//         $('div').animate({ width: '400px'},3000);
//         $('div').animate({ height: '400px'},3000);
//     });
//     $('#stop').click(function(){
//         $('div').stop(true, true);
//     });

// //stope arrête l'animation sur laquelle je suis sans pour autant stopper le reste des animations. Elles continuent d'être exécutées.
    

// //Si je veux arrêter toutes les animations, stop prend deux arguments: 
//1-un boolean (true ou false avec false comme valeur par défault) 

//2-l'animation va commencer.En appuyant sur stop. l'action va directement s'arrêter à la fin.


/* Les effets  "SLIDEUP" et "SLIDEDOWN". FADEOUT et le FADEIN */

    // $(function(){
    //     $("#start").click(function(){
    //         $('div').slideUp(3000).slideDown(3000).fadeOut(3000).fadeIn(3000);
    //     });
    // });



// /************JQUERY ET LES ELEMENTS HTML *******/
/***LES DIFFERENTES FONCTIONS PREMETTANT DE CHANGER LES ELEMENTS HTML.
 * 
 * text()
 * html()
 * val()
 * attr()
*/



// //je selectionne un texte
//         $(function(){
//             let myVar = $('#p1').text();
//             console.log(myVar);
//         });
 
//         //je selectionne un élément "html"
        $(function(){
            let myVar = $('#p1').html();
            console.log(myVar);
        });

/*************** je selectionne une "DIV"***************** */
//        
        $(function(){
            let myVar = $('div').html();
            console.log(myVar);
        });


/* **Ici, je récupère les informations d'un "id" en html*****/

        $(function(){
            $('#start').click(function(){
                let myVar = $('#myInput').val();
                console.log(myVar);

        });
           
        /*********** Ici, je change la valeur de l'attribut en html************ */

//         $(function(){
//             $('#start').click(function(){
//                 let myVar = $('div').attr(style);
//                 console.log(myVar);
// //Ici, je récupère les informations d'un "id" en html
//         });
         

/*********** Ici, je change la valeur du text en html************ */
$(function(){
    $("#start").click(function(){
        $("#p1").text("Je viens de changer le texte ce premier paragraphe.");
   
    });

    });
          

//     /******CHANGER LA VALEUR DE L'INPUT en HTML***** */
// $(function(){
//     $("#start").click(function(){
//         $("#myInput").val("Quel est ton nom ?");
    
//     });

//     });
/*******Ici, j'ajoute un nouvel élément à ma div avec la fonction append()* */
$(function(){
    $("#start").click(function(){
        $("div").append("<p>Mon nouveau paragraphe</p>");
    });

    });

/*******Ici, j'ajoute un nouvel élément à ma div avec la fonction prepend(). Il se place au début* */

// $(function(){
//     $("#start").click(function(){
//         $("div").prepend("<p>Mon  véritable nouveau paragraphe</p>");
//     });

//     });
/*******Ici, j'ajoute un nouvel élément à ma div avec la fonction after(). Il se place après l'élément div, ici* */

$(function(){
    $("#start").click(function(){
        $("div").after("<p>Mon  deuxième nouveau paragraphe</p>");
    });

    });
/*******Ici, j'ajoute un nouvel élément à ma div avec la fonction before(). Il se place avant l'élément div, ici* */
$(function(){
    $("#start").click(function(){
        $("div").before("<p>Mon  deuxième nouveau paragraphe</p>");
    });

    });
/*******Ici, j'ajoute un nouvel élément à ma div avec la fonction remove(). Il se place après l'élément div, ici* */
$(function(){
    $("#start").click(function(){
        $('#p1').remove();
//la fonction "remove()" enlève l'élément et son contenu
    });

    });
$(function(){
    $("#start").click(function(){
        $('div').empty();
//la fonction "rempty()" enlève le contenu mais garde l'élément.
    });

    });
    });