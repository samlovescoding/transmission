<template>
    <!-- Half n Half View   -->
    <div class="flex mt-4">
        <DirectoryView class="w-1/2" directory-name="Local Path"></DirectoryView>
        <DirectoryView class="w-1/2" directory-name="Server Path"></DirectoryView>
    </div>
</template>

<script>
    import DirectoryView from "../components/DirectoryView.vue";
    export default {
        name: "ServerPage",
        components: {DirectoryView}
    }
</script>

<style scoped>

</style>