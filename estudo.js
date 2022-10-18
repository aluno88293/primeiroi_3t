// alert("Oi! Eu sou o Alerta");
// document.write("Estou na página.");
// console.log("Eu não estou no console.");
deixe  tabuada  =  5 ;
função  alo ( ) {

    deixe  tabuada  =  documento . getElementById ( "entrada" ) . valor ;

    documento . escreva ( "<h1>Tabuada do "  +  tabuada  +  "</h1>" ) ;
    documento . escreva ( tabuada  +  " x 1 = "  +  ( tabuada * 1 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 2 = "  +  ( tabuada * 2 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 3 = "  +  ( tabuada * 3 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 4 = "  +  ( tabuada * 4 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 5 = "  +  ( tabuada * 5 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 6 = "  +  ( tabuada * 6 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 7 = "  +  ( tabuada * 7 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 8 = "  +  ( tabuada * 8 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 9 = "  +  ( tabuada * 9 ) + "<br>" ) ;
    documento . escreva ( tabuada  +  " x 10 = "  +  ( tabuada * 10 ) ) ;
}
// for(inicio, validaçao, manutençao)
função  escreva ( ) {
    for ( var  i = 1 ;  i  <=  10 ;  i ++ ) {
        for ( var  j  =  1 ;  j  <= 10 ;  j ++ ) {
            documento . escreva ( i  +  "x"  +  j  +  " = "  +  ( j * i ) + "<br>" ) ;
        }
        documento . escreva ( "<br>" ) ;
    }
}

função  quadrado ( ) {
    for ( var  i  =  2 ;  i  <  11 ;  i ++ ) {
        documento . write ( "O quadrado de "  +  i  +  " é "  +  ( i * i ) + "<br>" ) ;
    }
}

função  total ( ) {
    deixe  val  =  documento . getElementById ( "valor" ) . valor ;
    deixe  ju  =  documento . getElementById ( "juros" ) . valor ;
    let  resultado  =  ( val  *  ( ( ju / 100 ) + 1 ) ) ;
    documento . escreva ( "O total é de:"  +  resultado ) ;
}
// Para dividir usa a/
// Calcula a média das 4 notas. Somas as 4 notas e dividir por 4.
// Quanto falta para passar. pega 240 e subtrair como notas.
função  soma ( ) {
    seja  n1  =  documento . getElementById ( "b1" ) .  valor ;
    seja  n2  =  documento . getElementById ( "b2" ) .  valor ;
    seja  n3  =  documento . getElementById ( "b3" ) .  valor ;
    deixe  n4  =  documento . getElementById ( "b4" ) .  valor ;
    let  r  =  Número ( n1 )  +  Número ( n2 )  +  Número ( n3 )  +  Número ( n4 ) ;
    documento . getElementById ( "resultado" ) . innerHTML  =  r ;

}
função  média ( ) {
    seja  n1  =  documento . getElementById ( "b1" ) .  valor ;
    seja  n2  =  documento . getElementById ( "b2" ) .  valor ;
    seja  n3  =  documento . getElementById ( "b3" ) .  valor ;
    deixe  n4  =  documento . getElementById ( "b4" ) .  valor ;
    let  r  =  240  -  Número ( n1 )  +  Número ( n2 )  +  Número ( n3 )  +  Número ( n4 ) ;
    documento . getElementById ( "resultado" ) . innerHTML  =  r ;

    
}
