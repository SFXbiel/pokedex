/*
quando clicar no pokemon da liastagem temos que esconder o cartao do pokemon aberto e mostrar o cartão correspondente ao que foi mostrado na listagem.

 Para isso teremos que trabalharcom dois elementos:
 1- Listagem
 2- Cartao pokemon 

 precisamos criar duas variaveis no JS para trabaqlhar com os elementos da tela

vamos ter que trabalhar com um evento de clique feito pelo usuario da listagem de pokemons

-Remover as classe aberto só do cartão que esta aberto
-Ao clicar em um pokemon da lisatgem pegamos o id desse pokemon para saber qual cartão mostrar
-Remover a classe ativo que marca o pokemon selecioando
-Adicionar a classe ativo no item da lista selecionado
*/

//precisamos criar duas variaveis no JS para trabaqlhar com os elementos da tela
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //vamos ter que trabalhar com um evento de clique feito pelo usuario da listagem de pokemons

    pokemon.addEventListener('click', () => {
      //-Remover as classe aberto só do cartão que esta aberto

      const cartaoPokemonAberto = document.querySelector('.aberto')
      cartaoPokemonAberto.classList.remove('aberto')

      //-Ao clicar em um pokemon da lisatgem pegamos o id desse pokemon para saber qual cartão mostrar
      const idPokemonSelecionado = pokemon.attributes.id.value
      
      const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
      const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
      cartaoPokemonParaAbrir.classList.add('aberto')

      //-Remover a classe ativo que marca o pokemon selecioando
      const pokemonAtivoNaListagem = document.querySelector('.ativo')
      pokemonAtivoNaListagem.classList.remove('ativo')

      //-Adicionar a classe ativo no item da lista selecionado
      const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
      pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})