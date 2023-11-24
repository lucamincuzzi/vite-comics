<script>
export default {
    data() {
        return {
            links: [
                {
                    image: "buy-comics-digital-comics.png",
                    text: "Digital Comics",
                },
                {
                    image: "buy-comics-merchandise.png",
                    text: "DC Merchandise",
                },
                {
                    image: "buy-comics-subscriptions.png",
                    text: "Subscription",
                },
                {
                    image: "buy-comics-shop-locator.png",
                    text: "Comic shop locator",
                },
                {
                    image: "buy-dc-power-visa.svg",
                    text: "DC Power Visa",
                },
            ]
        };
    },
    methods: {
        getImgUrl(imgName) {
            return new URL(`../assets/img/${imgName}`, import.meta.url).href
        },
    },
}
</script>

<template>
    <div class="wrapper">
        <div class="container">
            <div class="row">
                <div v-for="item in links" class="col">
                    <img :src="getImgUrl(item.image)" alt="">
                    <span>{{ item.text.toUpperCase() }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.wrapper {
    height: 200px;
    background-color: $main-color;

    .container {
        @include container-small;
        height: 100%;

        .row {
            @include flex(row, center, center);
            height: 100%;
            gap: 30px;

            .col {
                @include flex(row, center, center);
                width: calc(100% / 5 - 30px);
                gap: 10px;
                color: white;

                img {
                    max-width: 20%;
                }

                span {
                    font-size: 0.8rem;
                }
            }
        }
    }
}
</style>