<template>
    <div class="flex flex-col justify-center content-center">

        <h2 class="font-bold text-2xl text-center mt-8 mb-4 text-gray-800">Add a Server</h2>

        <div class="w-full max-w-xs mx-auto">
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        FTP Host
                    </label>
                    <input class="shadow appearance-none border rounded w-full
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none
                        focus:shadow-outline"
                           id="host"
                           type="text"
                           placeholder="Hostname"
                           v-model="host"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Port
                    </label>
                    <input class="shadow appearance-none border rounded w-full
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none
                        focus:shadow-outline"
                           id="port"
                           type="text"
                           placeholder="Port"
                           value="21"
                           v-model="port"
                    />
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full
                        py-2 px-3 text-gray-700 leading-tight focus:outline-none
                        focus:shadow-outline"
                            id="username"
                            type="text"
                            placeholder="Username"
                           v-model="username"
                    />
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border rounded w-full
                        py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none
                        focus:shadow-outline"
                           id="password"
                           type="password"
                           placeholder="*******"
                           v-model="password"
                    />
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white
                        font-bold py-2 px-4 rounded focus:outline-none
                        focus:shadow-outline"
                            type="button"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddAServerPage",
        data: () => { return {
            host: "",
            port: 21,
            username: "",
            password: ""
        }},
        methods: {
            save(){
                alert("Saving to database.");
            }
        }
    }
</script>

<style scoped>
</style>