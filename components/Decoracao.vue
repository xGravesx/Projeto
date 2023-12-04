<template>
    <div>
      <h2>Decoração</h2>
      <!-- Conteúdo da página de Decoração aqui -->
      <!-- Cabeçalho da página -->
   <div class="header">
      <img src="images/logo.png" alt="Logo Santacrow" class="logo">
    </div>

    <!-- Menu de navegação -->
    <ul class="nav">
      <li><router-link to="/home">Início</router-link></li>
      <li><router-link to="/black-friday">BLACK FRIDAY</router-link></li>
      <li><router-link to="/crow-prime">CROW PRIME</router-link></li>
      <li><router-link to="/colecoes">Coleções</router-link></li>
      <li><router-link to="/acessorios">Acessórios</router-link></li>
      <li><router-link to="/decoracao">Decoração</router-link></li>
    </ul>

    <!-- Seção de produtos da página -->
    <div id="Decoracao">
      <router-view></router-view>
      <div class="produto">
        <img src="images/skeletonCat.png" alt="Coturno Preto com Fivelas">
        <h3>Skeleton Cat</h3>
        Santacrow
        <p>R$ 69,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/witchCat.png" alt="Bota Vermelha com Correntes">
        <h3>Witch Cat</h3>
        Santacrow
        <p>R$ 69,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/spineOrnament.png" alt="Sapato Boneca Preto com Laço">
        <h3>Spine Ornament</h3>
        Santacrow
        <p>R$ 99,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/petry.png" alt="Petry Preto com Spikes">
        <h3>Gato Petry</h3>
        Santacrow
        <p>R$ 99,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
    </div>

    <!-- Menu de rodapé -->
    <ul class="menuFooter">

      <!-- Conteúdo do menu de rodapé -->
      <li>
        <h2>Termos e Condições</h2>
        <ul>
          <li><a href="crow-prime.html">Crow Prime</a></li>
          <li><a href="cashback-crow-prime.html">Cashback Crow Prime</a></li>
          <li><a href="trocas-devolucoes.html">Trocas e Devoluções</a></li>
          <li><a href="privacidade.html">Políticas de Privacidade</a></li>
        </ul>
      </li>
      <li>
        <h2>Minha Conta</h2>
        <ul>
          <li><a href="meus-pedidos.html">Meus Pedidos</a></li>
          <li><a href="ajuda.html">Ajuda</a></li>
          <li><a href="entregas.html">Envios e Entregas</a></li>
        </ul>
      </li>
      <li>
        <h2>Contato</h2>
        <ul>
          <li>Email: Contato@santacrow.com.br</li>
          <li>Whatsapp: Contato@santacrow.com.br</li>
          <li>Seg a Sex: 10:00 as 17:00</li>
        </ul>
      </li>
    </ul>

    <!-- Seção de newsletter da página -->
    <div class="newsletter">

      <!-- Conteúdo da newsletter -->
      <h2>Inscreva-se na nossa newsletter</h2>
      Receba novidades
      <form>
        <input type="email" name="email" placeholder="Digite o seu e-mail">
        <button>Enviar</button>
      </form>
    </div>

    <!-- Redes sociais no rodapé -->
    <div class="redesSociais">

      <!-- Conteúdo das redes sociais -->
      <ul>
        <li>
          <a href="https://www.facebook.com/santacrow">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/facebook-new.png" alt="facebook-new" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/santacrow">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/tiktok.png" alt="tiktok" />
            <span>TikTok</span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/santacrow">
            <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/instagram-new.png" alt="Instagram" />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
    </div>

    <!-- Rodapé da página -->
    <div class="footer">
      <p>&copy; 2023 SantacrØW. Todos os direitos reservados.</p>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Decoracao'
  }
  </script>
  
  <style scoped>
  /* Estilos específicos para este componente, se necessário */
  </style>
  