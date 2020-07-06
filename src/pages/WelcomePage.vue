<template>
    <div class="flex flex-col justify-center content-center text-center w-screen h-screen">
        <h1 class="font-bold text-4xl font-ubuntu">Transmission</h1>
        <p>The best FTP client out there.</p>
        <div class="mt-6">
            <router-link to="/connect" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Connect
            </router-link>
            <router-link to="/share" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Share
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WelcomePage"
    }
</script>

<style>
    body{
        @apply bg-gray-100;
    }
</style>