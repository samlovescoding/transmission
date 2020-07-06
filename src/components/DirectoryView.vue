<template>
    <div class="w-full lg:max-w-md mx-auto">
        <div class="bg-white shadow-md rounded mx-8 my-4 px-8 pt-6 pb-8">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="directory">
                    {{ directoryName }}
                </label>
                <input class="shadow appearance-none border rounded w-full py-2
                            px-3 text-gray-700 leading-tight focus:outline-none
                            focus:shadow-outline"
                        id="directory"
                        type="text"
                        placeholder="Directory"
                        v-model="path"
                       @keyup.enter="refreshDirectory"
                />
                <DirectoryList :directory="directory"></DirectoryList>
            </div>
        </div>
    </div>
</template>

<script>
    const fs = require('fs')
    import DirectoryList from "./DirectoryList.vue";
    export default {
        name: "DirectoryView",
        components: {DirectoryList},
        props: ['directoryName'],
        data: () => {return {
            path : '/',
            directory: []
        }},
        methods:{
            refreshDirectory(){
                fs.readdir(this.path, (err, dir) => {
                    this.directory = []
                    dir.forEach((item, index) => {
                        if(item[0] === "."){
                            return;
                        }
                        this.directory.push({
                            id: index,
                            path: item,
                            directory: this.path
                        })
                    })
                })
            }
        },
        mounted() {
            this.refreshDirectory()
        }
    }
</script>

<style scoped>

</style>