'use strict';

(function ($) {
    
    // Campos com id e método a ser executado
    var campos = [];
    
    $.fn.configurar = function (fields) {
         campos = fields;
    };
    
    $.fn.validar = function () {
        var form = this;
        
        if(typeof(form) === 'undefined'){
            console.log("passe um fomulário como elemento");
            return;
        }
        
        if(form.nodeName === 'FORM'){
            for(var campo in campos){
                // campo = KEY - id dentro do form
                // value = campos[campo]
                var atual = campos[campo];
                // id do campo para jquery
                var idCampo = "#" + campo;
                // ter certeza que esse campo é desse form
                if(typeof(form.find(idCampo)) !== 'undefined' && form.find(idCampo) !== null){
                    var requerido = atual["requerido"];
                    var executar = atual["executar"];
                    var mensagem = atual["mensagem"];
                    var eventos = atual["eventos"];
                }
                else{
                    console.log("O campo "+campo+" não pertence ao form");    
                }
            }
        }
    }
}(jQuery));

// {
//     id:{
//          requerido: true,
//          executar: método - true está ok, false não está,
//          mensagem: mensagem de erro
//          eventos:{ nome evento : metodo a ser executado}          
//     }
// }