<script>
export default {
    data() {
        return {
            navLinks: [
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
                {
                    text: "Lorem"
                },
            ]
        }
    }
}
</script>

<template>
    <header>
        <div>
            <img src="../assets/img/dc-logo.png" alt="Logo DC">
            <ul>
                <li v-for="(link, index) in navLinks">{{ link.text }}</li>
            </ul>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

header {
    @include flex(row, center, center);
    height: $header-height;
}

div {
    @include container;
    @include flex(row, space-between, center);
}

img {
    width: 80px;
}

ul {
    list-style-type: none;
    @include flex(row, center, center);
    gap: 1rem;
}
</style>