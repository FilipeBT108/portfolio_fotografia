// Exibindo no console (para fins de depuração)
// console.log(dados);
// console.log(dados[3]);
// console.log(dados[3].descricao);

function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    //usar camelCase quando Id tiver 2 palavras, JS não aceita caracteres especiais em nomes
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    
    //se campoPesquisa for uma string vazia
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi Encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();
  
    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";

    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        //se num dado titulo includes campoPesquisa, então, faça...
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento de resultado com as informações do dado atual
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    if (!resultados) {  
        //a ! na frente simboliza a comparação de se está vazio -> !resultados = resultados==""
        resultados = "<p>Nada foi encontrado. Não consta no portfólio!</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados construídos
    section.innerHTML = resultados;
  }


