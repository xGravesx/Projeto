<template>
   <!-- Cabeçalho da página -->
   <div class="header">
      <img src="images/logo.png" alt="Logo Santacrow" class="logo">
    </div>

    <!-- Menu de navegação -->
    <ul class="nav">
      <li><router-link to="/">Início</router-link></li>
      <li><router-link to="/black-friday">BLACK FRIDAY</router-link></li>
      <li><router-link to="/crow-prime">CROW PRIME</router-link></li>
      <li><router-link to="/colecoes">Coleções</router-link></li>
      <li><router-link to="/acessorios">Acessórios</router-link></li>
      <li><router-link to="/decoracao">Decoração</router-link></li>
    </ul>

    <!-- Seção de produtos da página -->
    <div id="lancamentos">
      <router-view></router-view>
      <h2>Lançamentos</h2>
      <div class="produto">
        <img src="images/coturno.png" alt="Coturno Preto com Fivelas">
        <h3>Coturno Preto com Fivelas</h3>
        Santacrow
        <p>R$ 299,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/bota.png" alt="Bota Vermelha com Correntes">
        <h3>Bota Vermelha com Correntes</h3>
        Santacrow
        <p>R$ 349,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/sapatoBoneca.png" alt="Sapato Boneca Preto com Laço">
        <h3>Sapato Boneca Preto com Laço</h3>
        Santacrow
        <p>R$ 199,90</p>
        <p><button class="comprar">Comprar</button></p>
      </div>
      <div class="produto">
        <img src="images/petry.png" alt="Petry Preto com Spikes">
        <h3>Petry Preto com Spikes</h3>
        Santacrow
        <p>R$ 199,90</p>
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
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .header {
      text-align: center;
      background-color: #e6e6e6;
      padding: 10px 0;
    }
    ul.nav {
      text-align: center;
      list-style-type: none;
      padding: 0;
      background-color: #e6e6e6;
    }
    ul.nav li {
      display: inline-block;
      margin-right: 20px;
    }
    #lancamentos {
      width: 100%;
      margin: 0 auto;
      padding: 0 2%;
      box-sizing: border-box;
    }
    .produto {
      width: 22%; 
      margin-right: 2%;
      border: 1px solid #ccc;
      display: inline-block;
      padding: 0;
      box-sizing: border-box;
      text-align: center;
    }
    .produto img {
      width: 100%; 
      height: auto; 
    }
    button {
      margin: 5px 0;
      text-align: center;
      background-color: #e6e6e6;
      padding: 10px 0;
      box-sizing: border-box;
    }
    ul.menuFooter {
      width: 100%;
      margin: 0 auto;
      padding: 0 2%;
      text-align: center;
      background-color: #e5e5e5;
      display: flex;
      justify-content: center;
    }
    ul.menuFooter h2 {
      width: 100%;
      margin-right: 20px;
      text-align: left;
      margin-bottom: 10px;
    }
    ul.menuFooter li {
      width: 100%;
      margin-right: 20px;
      text-align: left;
      padding: 5px;
    }
    .newsletter {
      text-align: left;
      list-style-type: none;
      padding: 0;
      background-color: white;
    }
    .footer,
    .menuFooter {
      text-align: center;
      list-style-type: none;
      padding: 0;
      background-color: #e6e6e6;
    }
    p {
      color: #525252;
      border: 1px solid #ccc;
      padding: 10px;
    }
    .redesSociais ul {
      text-align: right;
      padding: 0;
      background-color: #e6e6e6;
    }
    .redesSociais li {
      text-align: right;
      display: inline-block;
      margin-right: 10px;
    }
    .redesSociais img {
      width: 30px; 
      height: auto;
      display: inline-block;
      align-items:center;
    }
    button.comprar {
      background-color: #ffffff; 
      color: #000000; 
      border: 2px solid #000000; 
      border-radius: 10px; 
      padding: 10px 20px; 
      cursor: pointer; 
    }
    button.comprar:hover {
      background-color: #000000; 
      color: #ffffff; 
    }
  </style>
  