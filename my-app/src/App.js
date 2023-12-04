// Importe o Vue e o axios
import Vue from 'vue';
import axios from 'axios';

// Crie o componente HomeComponent
const HomeComponent = {
  template: `
    <div>
      <p>Bem-vindo à página inicial da SantacrØW!</p>
      <button @click="fetchProduct">Carregar Detalhes do Produto</button>
      <div v-if="product">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <p>Preço: R$ {{ product.price }}</p>
        <p>Categoria: {{ product.category }}</p>
        <img :src="product.image" alt="Product Image" style="max-width: 200px; max-height: 200px;">
        <p>Classificação: {{ product.rating.rate }} ({{ product.rating.count }} avaliações)</p>
      </div>
    </div>
  `,
  data() {
    return {
      product: null
    };
  },
  methods: {
    fetchProduct() {
      axios.get('https://fakestoreapi.com/products/1')
        .then(response => {
          this.product = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar detalhes do produto:', error);
        });
    }
  }
};

// Inicialização do Vue
new Vue({
  el: '#app',
  components: {
    'home': HomeComponent
  }
});
