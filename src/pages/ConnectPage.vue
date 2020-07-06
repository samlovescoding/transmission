<template>
    <div>
        <h2 class="font-bold text-2xl text-center mt-8 mb-4 text-gray-800">Servers</h2>

        <div class="w-full max-w-xs mx-auto">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

                <router-link to="/server">
                    <div class="my-4 py-4 text-center hover:bg-gray-100">
                        <div
                                class="box-100px mx-auto"
                                v-html="videoConsole"
                        ></div>
                        samlovescoding
                    </div>
                </router-link>

                <div class="text-center">
                    <router-link to="/add-a-server" class="hover:bg-gray-200 py-2 px-3 rounded inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                        Add a server
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const videoConsole = require('../svg/021-video-console.svg')
    export default {
        name: "ConnectPage",
        data: () => {return{
            videoConsole: videoConsole
        }}
    }
</script>

<style scoped>

</style>