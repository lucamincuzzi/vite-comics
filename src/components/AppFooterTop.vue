<script>
export default {
    data() {
        return {
            about: [
                {
                    title: "DC Comics",
                    links: ["Characters", "Comics", "Movies", "TV", "Games", "Videos", "News"],
                },
                {
                    title: "Shop",
                    links: ["Shop DC", "Shop DC Collectibles"],
                },
                {
                    title: "DC",
                    links: ["Terms Of Use", "Privacy policy (New)", "Ad Choices", "Advertising", "Jobs", "Subscriptions", "Talent Workshops", "CPSC Certificates", "Ratings", "Shop Help", "Contact Us" ],
                },
                {
                    title: "Sites",
                    links: ["DC", "MAD Magazine", "DC Kids", "DC Universe", "DC Power Visa"],
                },
            ]
        };
    },
}
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div v-for="item in about" :key="item.title" class="links-container">
                <h4>{{ item.title }}</h4>
                <ul>
                    <li v-for="link in item.links">{{ link }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

.footer-wrapper {
    height: $footer-top-height;
    background-position: center;
    background-image: url(../assets/img/footer-bg.jpg);
    @include bg-image-properties(center, no-repeat, cover);

    .footer-container {
        @include container;
        @include flex(row, start, center);
        @include bg-image-properties(right, no-repeat, auto);
        background-image: url(../assets/img/dc-logo-bg.png);
        height: 100%;
        gap: 1rem;

        .links-container {
            height: 80%;
            color: white;
            @include flex(column, stretch, start);
            gap: 10px;

            h4 {
                font-size: 1.2rem;
            }

            ul {
                list-style-type: none;

                li {
                    font-size: 0.75rem;
                    opacity: 0.5;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>