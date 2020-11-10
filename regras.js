var n1 = null, n2 = null, op = null, result = null;
            var mensagens = new Object();
                mensagens.numinvalid = "Nao foi informado numero valido!"
                mensagens.segnum = "Digite o proximo valor";
                mensagens.faltanumsom = "Voce nao informou um numero para somar!";
                mensagens.segsubnum = "Digite o valor para somar!";
                mensagens.faltanumsub = "Voce nao informou um numero para somar!";
                mensagens.telaini = "Olaaa!";

            function reconheceButton(x) {
                var telaParte, montaTela;
                telaParte = document.getElementById('telaA').innerHTML;
                if (x=="del"){
                    x = "";
                    n1 = "";
                    n2 = "";
                    op = "";
                    result = "";
                    document.getElementById("telaA").innerHTML = mensagens.telaini;
                }
                if (isNaN(telaParte)) {
                    telaParte = x;
                    document.getElementById("telaA").innerHTML = telaParte;
                    montaTela = 0;
                } else {
                    montaTela = document.getElementById('telaA').innerHTML;
                    telaParte = x;
                    montaTela = montaTela + telaParte;
                    document.getElementById("telaA").innerHTML = montaTela;
                    montaTela = 0;
                    telaParte = 0;
                }
            }
            function operador(ope){

                n1 = document.getElementById("telaA").innerHTML;
                if (isNaN(n1)) {
                    document.getElementById('telaA').innerHTML = mensagens.numinvalid;
                    return false;
                } else {
                    document.getElementById("telaA").innerHTML = mensagens.segnum;
                    if(ope=="+"){
                        op = '+';
                    } else if(ope=="-"){
                        op = '-';
                    } else if(ope=="*"){
                        op = '*';
                    } else if(ope=="/"){
                        op = '/';
                    }
                    return n1, op;
                }   
            }
            function resultado(){

                if (isNaN(n1)) {
                    document.getElementById('telaA').innerHTML = mensagens.numinvalid;
                    return false;
                } else if (op=="+") {
                    n2 = document.getElementById("telaA").innerHTML;
                    result = parseInt(n1,10) + parseInt(n2,10);
                    document.getElementById("telaA").innerHTML = result;
                } else if (op=="-"){
                    n2 = document.getElementById("telaA").innerHTML;
                    result = parseInt(n1,10) - parseInt(n2,10);
                    document.getElementById("telaA").innerHTML = result;
                } else if (op=="*"){
                    n2 = document.getElementById("telaA").innerHTML;
                    result = parseInt(n1,10) * parseInt(n2,10);
                    document.getElementById("telaA").innerHTML = result;
                } else if(op=="/"){
                    n2 = document.getElementById("telaA").innerHTML;
                    result = parseInt(n1,10) / parseInt(n2,10);
                    document.getElementById("telaA").innerHTML = result;
                } 
                if (isNaN(n2)) {
                    document.getElementById('telaA').innerHTML = mensagens.numinvalid;
                    return false; 
                }
            }