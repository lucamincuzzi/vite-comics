<script>
export default {
    data() {
        return {
            text: "--> Content goes here <--"
        }
    },
}
</script>

<template>
    <div class="content-wrapper">
        <div class="content"><span>{{ text }}</span></div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.content-wrapper {
    height: $content-wrapper-height;
    background-color: $content-wrapper-bg-color;
    @include flex(row, center, center);

    .content {
        @include container;

        span {
            font-size: 2rem;
            color: white;
        }
    }
}
</style>