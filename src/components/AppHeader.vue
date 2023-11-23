<script>
export default {
}
</script>

<template>
<header>
    <img src="../assets/img/dc-logo.png" alt="Logo DC">
    <ul>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
    </ul>
</header>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

header {
    height: $header-height;
    @include flex(row, center, center);
    gap: 30rem;
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