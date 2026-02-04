<script>
import api from '../api/axios';

export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async handleLogin() {
            try {
                const res = await api.post('/auth/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', res.data.token);
                alert('¡Login exitoso!');

                this.$router.push('/home');
            } catch (error) {
                console.error(error);
                alert('Error: ' + (error.response?.data?.msg || 'Credenciales inválidas'));
            }
        }
    }
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div class="max-w-md w-full bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-2xl">
        
        <div class="mb-10 text-center">
          <h2 class="text-3xl font-extrabold text-white tracking-tight">¡Bienvenido!</h2>
          <p class="text-gray-400 mt-2">Ingresa tus credenciales para continuar</p>
        </div>
  
        <form @submit.prevent="handleLogin" class="space-y-5">
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Email</label>
            <input 
              v-model="email" 
              type="email" 
              placeholder="correo@ejemplo.com" 
              required 
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
  
          <div>
            <label class="block text-sm font-medium text-gray-300 mb-1.5 ml-1">Contraseña</label>
            <input 
              v-model="password" 
              type="password" 
              placeholder="••••••••" 
              required 
              class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
  
          <button 
            type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-900/20 transform active:scale-[0.98] transition-all mt-4"
          >
            Entrar al Sistema
          </button>
        </form>
  
        <div class="mt-8 text-center text-sm">
          <span class="text-gray-500">¿No tienes cuenta?</span>
          <a href="#" class="ml-1 text-blue-500 hover:text-blue-400 font-semibold transition-colors">Regístrate</a>
        </div>
  
      </div>
    </div>
  </template>