$(document).ready(function(){

    $('#result').hide();

   

    $('#Calcular').click(function(){
          
         var d1 = D1.value;
         var p1 = parseInt(P1.value);
         var d2 = D2.value;
         var p2 = parseInt(P2.value);
         var d3 = D3.value;
         var p3 = parseInt(P3.value);
         if(D1.value.trim() ==''||P1.value.trim() ==''||D2.value.trim() ==''||P2.value.trim() ==''||D3.value.trim() ==''||P3.value.trim() ==''){
        alert("Preencha todos os campos")
         }
         else{
               
               if(p1<p2 && p1<p3){

                $('#result').html(`Descrição e preço do Produto mais barato: ${d1}. No valor de ${p1} reais`);   
                $(function(){
                 $("#result").fadeIn(700, function(){
                      window.setTimeout(function(){
                    $('#result').fadeOut();
            }, 8000);
           });
          });
               }

               else if(p2<p1 && p2<p3){
                $('#result').html(`Descrição e preço do Produto mais barato: ${d2}. No valor de ${p2} reais`);   
                $(function(){
                 $("#result").fadeIn(700, function(){
                      window.setTimeout(function(){
                    $('#result').fadeOut();
            }, 8000);
           });
          });

               }

               else{
                $('#result').html(`Descrição e preço do Produto mais barato: ${d3}. No valor de ${p3} reais`);   
                $(function(){
                 $("#result").fadeIn(700, function(){
                      window.setTimeout(function(){
                    $('#result').fadeOut();
            }, 8000);
           });
          });

               }
         D1.value=''
         P1.value=''
         D2.value=''
         P2.value=''
         D3.value=''
         P3.value=''
         }

     });
});
