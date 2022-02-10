
var qtdAlunos = 1
var qtdNotas = 4
var dados_aluno = []


function verificaMedias(){

    var mediaTotal = 0
    var mediaGeral = 0

    for(let y = 1; y <= qtdAlunos; y = y + 1){

        let media = 0
        let resultado = 0
       
    
        for(let x = 1; x <= qtdNotas; x++){
            let nota = parseFloat(document.getElementById(`nota${y}${x}`).value)
            resultado = nota + resultado            
        }
    
        
        media = resultado/qtdNotas
        mediaGeral = mediaGeral + media
        

    
        console.log(qtdAlunos)
        console.log(media)
        console.log(mediaGeral)
        console.log(mediaTotal)


        document.getElementById(`media${y}`).innerText = media
    
        if(media >= 50){
            document.getElementById(`situacao${y}`).innerText = "Aprovado"
            document.getElementById(`linha${y}`).style.backgroundColor = "Green"

        }
        else if(media >= 40 && media < 50){
            document.getElementById(`situacao${y}`).innerText = "Recuperação"
            document.getElementById(`linha${y}`).style.backgroundColor = "Orange"
        }
        else if(media < 40){
            document.getElementById(`situacao${y}`).innerText = "Reprovado"
            document.getElementById(`linha${y}`).style.backgroundColor = "Red"
        }


    }
    mediaTotal = mediaGeral/qtdAlunos
    document.getElementById('media_geral').innerText = mediaTotal
}



function crescente(){
    for(let x = 1; x <= qtdAlunos; x++){
        let dados = {
            nome: document.getElementById(`nome${x}`).value, 
            media: parseFloat(document.getElementById(`media${x}`).value),
        };
    
        dados_aluno.push(dados) 
    }
    // console.log(dados_aluno)
    dados_aluno.sort(function (a, b) {
        if (a.nome  > b.nome) {
            return 1;
        }
        if (a.nome < b.nome) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })

    for(let i = 0; i <= dados_aluno.length; i++){
        console.log(dados_aluno[i])
    }
}

function criarLinha(){
    if(qtdAlunos <= 10){
        qtdAlunos += 1
        
        let row
        let row_data
        let row_data_input
        let row_data_output

        row = document.createElement('tr');
        row_data = document.createElement('td');
        row.setAttribute("id", `linha${qtdAlunos}`);
        row_data_input = document.createElement('input');
        row_data_input.classList.add("form-control");
        row_data_input.setAttribute("id", `nome${qtdAlunos}`);
        row_data_input.type = "text"
        row_data.appendChild(row_data_input);
        row.appendChild(row_data);
        
        for(let x = 1; x <= qtdNotas; x++){
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${qtdAlunos}${x}`);
            row_data_input = document.createElement('input');
            row_data_input.classList.add("form-control");
            row_data_input.setAttribute("id", `nota${qtdAlunos}${x}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            row.appendChild(row_data);
        }

        row_data = document.createElement('td');
        row_data.setAttribute("id", `coluna_media${qtdAlunos}`);
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `media${qtdAlunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);

        row_data = document.createElement('td');
        row_data_output = document.createElement('output');
        row_data_output.setAttribute("id", `situacao${qtdAlunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);
        
        row_data = document.createElement('td');
        row_data_output = document.createElement('button');
        row_data_output.innerHTML = "X" 
        row_data_output.setAttribute('onclick','deletarLinha()')
        row_data_output.setAttribute("id", `botao${qtdAlunos}`);
        row_data.appendChild(row_data_output);
        row.appendChild(row_data);

        document.getElementById('tableBody').appendChild(row);

    }
}

function deletarLinha(){
    if(qtdAlunos > 1){
        let child = document.getElementById(`linha${qtdAlunos}`)
        document.getElementById('tableBody').removeChild(child);
        qtdAlunos -= 1
    }
}



function criarColuna(){
    if(qtdNotas < 6){
        qtdNotas += 1
        
        let column
        let column_media
        let row
        let row_data
        let row_data_input

        column = document.createElement('th');
        column.setAttribute("id", `coluna0${qtdNotas}`);
        column.innerHTML = `Nota ${qtdNotas}`;

        column_media = document.getElementById('coluna_media0');
        document.getElementById('linha0').insertBefore(column, column_media)

        for(let x = 1; x <= qtdAlunos; x++){
            row_data = document.createElement('td');
            row_data.setAttribute("id", `coluna${x}${qtdNotas}`);
            row_data_input = document.createElement('input');
            row_data_input.classList.add("form-control");
            row_data_input.setAttribute("id", `nota${x}${qtdNotas}`);
            row_data_input.type = "number"
            row_data_input.min = 0
            row_data_input.max = 100
            row_data.appendChild(row_data_input);
            media = document.getElementById(`coluna_media${x}`);
            console.log(media)
            console.log(row_data)
            document.getElementById(`linha${x}`).insertBefore(row_data, media)

        }
        
    }
}

function deletarColuna(){
    if(qtdNotas > 1){

        for(let x = 0; x <= qtdAlunos; x++){
            let child = document.getElementById(`coluna${x}${qtdNotas}`)
            console.log(child)
            document.getElementById(`linha${x}`).removeChild(child);

        }
        
        qtdNotas -= 1
    }
}


function ordemAlfabetica(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n].children[0].value;
      y = rows[i + 1].getElementsByTagName("TD")[n].children[0].value;
      if (dir == "asc") {
        if (x.toLowerCase() > y.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.toLowerCase() < y.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


function decrescente(){
    for(let x = 1; x <= qtdAlunos; x++){

        let dados = {

            media: parseFloat(document.getElementById(`media${x}`).value),

        };
        dados_aluno.push(dados) 
    }

    // console.log(dados_aluno)
    dados_aluno.sort(function (a, b) {
        if (a.media  < b.media) {
            return 1;
        }
        if (a.media > b.media) {
            return -1;
        }

        // a must be equal to b
        return 0;
    })
    for(let i = 0; i <= dados_aluno.length; i++){
        console.log(dados_aluno[i])

    }
}

function crescente(){

    for(let x = 1; x <= qtdAlunos; x++){

        let dados = {

            media: parseFloat(document.getElementById(`media${x}`).value),

        };
        dados_aluno.push(dados) 

    }
    // console.log(dados_aluno)
    dados_aluno.sort(function (a, b) {

        if (a.media  > b.media) {

            return 1;
        }
        if (a.media < b.media) {
            return -1;
        }
        // a must be equal to b
        return 0;
    })
    for(let i = 0; i <= dados_aluno.length; i++){
        console.log(dados_aluno[i])
    }

}

function removerElemento(elementoClicado) {

    elementoClicado.closest("tr").remove();

}