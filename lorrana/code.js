function calcular() {
    var nota1, nota2, nota3, media;

    nota1 = document.getElementById('nota1').value;
    nota2 = document.getElementById('nota2').value;      
    nota3 = document.getElementById('nota3').value;      

        media = (parseFloat (nota1) + parseFloat(nota2) + parseFloat(nota3) ) / 3
            
        document.getElementById('media').innerHTML = media.toFixed(2)

        if (media < 7) {
            document.getElementById('status').innerHTML = 'REPROVADO'
        
        } else if ( media > 10) {
            document.getElementById('status').innerHTML = 'nota inválida'
        
        } else {
            document.getElementById('status').innerHTML = 'APROVADO'
        }
} 