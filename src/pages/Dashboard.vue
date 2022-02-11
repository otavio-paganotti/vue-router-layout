<template>
  <div style="border: 1px solid black; padding: 1rem;">
    <h1 style="color: red">{{message}}</h1>

    <p>Você pode dar refresh na página quantas vezes quiser, desde que tenha a chave token no seu localStorage preenchida.</p>

    <p>Se você tentar digitar qualquer outra rota desconhecida ex: /pao-de-leite, você cairá num layout pré-configurado de página não existente. Imediatamente, seu acesso será cortado da plataforma, e você voltará para a tela de login.</p>

    <p>Ao clicar em log out, a chave token no localStorage será removida e você será redirecionado para o login</p>


    <button @click="setTokenNull">LOG OUT</button>
  </div>
</template>

<script>
  export default {
    name: 'Dashboard',
    data() {
      return {
        message: 'Tela de Dashboard'
      }
    },
    methods: {
      setTokenNull() {
        localStorage.removeItem('token');
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>