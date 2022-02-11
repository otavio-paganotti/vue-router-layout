<template>
  <div style="border: 1px solid black; padding: 1rem;">
    <h1 style="color: red">{{message}}</h1>

    <p>Ao clicar no botão SET TOKEN ON LOCAL STORAGE, vai ser inserido dentro do localStorage uma chave token com valor qualquer, para simular um token real vinda de uma requisição de login</p>

    <p>Você pode dar refresh quantas vezes você quiser, enquanto não tiver a chave token, nunca sairá dessa página. Mesmo tentando acessar /dashboard, você será redirecionado para esta tela.</p>

    <p>Se você tentar digitar qualquer outra rota desconhecida ex: /pao-de-leite, você cairá num layout pré-configurado de página não existente.</p>

    <button @click="setTokenLocalStorage" :disabled="set">{{ !set ? 'SET TOKEN ON LOCAL STORAGE' : 'THE TOKEN HAS BEEN ADDED ON LOCAL STORAGE'}}</button>
    <br>
    <br>
    <p v-if="set">Agora, com o token em seu localStorage, está liberado para ir p/ tela de dashboard</p>
    <button v-if="set" @click="$router.push('/dashboard')">LOG IN</button>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        message: 'Tela de Login',
        set: false,
      }
    },
    methods: {
      setTokenLocalStorage() {
        localStorage.setItem('token', 'any_value');
        this.set = true;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>