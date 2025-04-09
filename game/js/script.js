const pokemons = ['Pikachu', 'Charmander', 'Bulbasaur', 'Squirtle', 'Jigglypuff'];
const pokemonDiv = document.getElementById('pokemon');
const captureButton = document.getElementById('captureButton');
const messageDiv = document.getElementById('message');
const toggleButton = document.getElementById('toggle-button');
const body = document.body;
const container = document.getElementById('container');
let captureCount = 0;

// Mapeamento de Pokémon para cores
const pokemonColors = {
    'Pikachu': '#FFEB3B', // Amarelo
    'Charmander': '#FF5722', // Laranja
    'Bulbasaur': '#4CAF50', // Verde
    'Squirtle': '#2196F3', // Azul
    'Jigglypuff': '#E91E63' // Rosa
};

function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemons.length);
    return pokemons[randomIndex];
}

captureButton.addEventListener('click', () => {
    const pokemon = getRandomPokemon();
    pokemonDiv.textContent = pokemon;
    messageDiv.textContent = `Você capturou um ${pokemon}!`;
    captureCount++;
    document.getElementById('captureCount').textContent = `Total de Pokémon capturados: ${captureCount}`;
    
    // Mudar a cor do container com base no Pokémon
    container.style.backgroundColor = pokemonColors[pokemon] || 'white'; // Cor padrão se não encontrado
});

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    container.classList.toggle('dark-mode');
});