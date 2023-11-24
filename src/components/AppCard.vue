<script>
export default {
    props: {
        imageName: String,
        title: String,
    }
}
</script>

<template>
    <div class="card">
        <img :src="imageName" alt="">
        <div class="comic-title">
            <h4>{{ title.toUpperCase() }}</h4>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/mixins" as *;

.card {
    height: 100%;
    @include flex(column, space-between, start);

    img {
        width: 200px;
        height: 200px;
    }

    .comic-title {
        width: 100%;
        height: 30px;

        h4 {
            font-size: 0.8rem;
        }
    }
}
</style>