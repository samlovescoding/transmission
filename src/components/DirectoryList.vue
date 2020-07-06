<template>
    <div>
        <DirectoryListItem v-for="item in directory" :key="item.id" :item="item"></DirectoryListItem>
    </div>
</template>

<script>
    import DirectoryListItem from "./DirectoryListItem.vue";
    export default {
        name: "DirectoryList",
        components: {DirectoryListItem},
        props: ['directory']
    }
</script>

<style scoped>

</style>