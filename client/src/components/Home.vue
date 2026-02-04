<script>
import api from '../api/axios';

export default {
    data() {
        return {
            products: [],
            newProduct: {
                name: '',
                price: '',
                description: '',
                category: '',
                image: ''
            }
        }
    },
    async mounted() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            try {
                const res = await api.get('/products');
                this.products = res.data;
            } catch (error) {
                console.error("Error cargando productos", error);
            }
        },
        async createProduct() {
            try {
                await api.post('/products', this.newProduct);

                alert('Producto creado con éxito');

                this.newProduct = { name: '', price: '', description: '', category: '' , image: ''};

                this.fetchProducts();
            } catch (error) {
                alert('Error al crear producto: ' + (error.response?.data?.msg || 'Error de servidor'));
            }
        },
        logout() {
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <div class="min-h-screen bg-gray-950 text-white p-6">

        <div class="max-w-7xl mx-auto flex justify-between items-center mb-10 border-b border-gray-800 pb-6">
            <h1 class="text-3xl font-bold text-blue-600">
                Mis Productos
            </h1>
            <button @click="logout"
                class="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-lg border border-red-500/20 transition-all font-medium">
                Cerrar Sesión
            </button>
        </div>

        <div class="max-w-7xl mx-auto mb-12 p-6 bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
            <h2 class="text-xl font-bold mb-4 text-blue-400">Añadir Nuevo Producto</h2>
            <form @submit.prevent="createProduct" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <input v-model="newProduct.name" type="text" placeholder="Nombre"
                    class="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    required />
                <input v-model="newProduct.price" type="number" placeholder="Precio"
                    class="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    required />
                <input v-model="newProduct.category" type="text" placeholder="Categoría"
                    class="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-white"
                    required />
                <input v-model="newProduct.image" type="text" placeholder="URL Imagen (https://...)"
                    class="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-white" />
                <input v-model="newProduct.description" type="text" placeholder="Descripción corta"
                    class="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none text-white md:col-span-2 lg:col-span-2"
                    required />

                <button type="submit"
                    class="md:col-span-2 lg:col-span-3 bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg transition-all mt-2">
                    + Guardar Producto
                </button>
            </form>
        </div>

        <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="product in products" :key="product._id"
                class="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all group">
                <div class="h-48 bg-gray-800 flex items-center justify-center text-gray-600">
                    <img v-if="product.image" :src="product.image" class="object-cover w-full h-full" />
                    <span v-else>📷 Sin imagen</span>
                </div>

                <div class="p-5">
                    <div class="flex justify-between items-start mb-2">
                        <h2
                            class="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors uppercase">
                            {{ product.name }}
                        </h2>
                        <span class="bg-blue-500/20 text-blue-400 text-xs font-bold px-2 py-1 rounded">
                            {{ product.category }}
                        </span>
                    </div>
                    <p class="text-gray-400 text-sm line-clamp-2 mb-4 italic">
                        "{{ product.description }}"
                    </p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-white">${{ product.price }}</span>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="products.length === 0" class="text-center mt-20">
            <p class="text-gray-500 text-xl font-light italic">No hay productos disponibles todavía.</p>
        </div>

    </div>
</template>