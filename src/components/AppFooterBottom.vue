<script>
export default {
    data() {
        return {
            buttonText: "SIGN-UP NOW!",
            iconArray: ["fa-brands fa-facebook-f", "fa-brands fa-twitter", "fa-brands fa-youtube", "fa-brands fa-pinterest", "fa-solid fa-location-dot"]
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <button>{{ buttonText }}</button>
            <div class="cta">
                <span>FOLLOW US</span>
                <div class="social">
                    <div v-for="(icon) in iconArray" class="icon"><i :class="icon" alt=""></i></div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

footer {
    @include flex(row, center, center);
    height: 100px;
    background-color: $footer-bottom-bg-color;

    .container {
        @include flex(row, space-between, center);
        @include container;
        height: 80%;

        button {
            @include border(2px, solid, $btn-border-color);
            background-color: $footer-bottom-bg-color;
            color: white;
            padding: 15px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
        }

        .cta {
            @include flex(row, center, center);
            gap: 15px;

            span {
                color: $cta-text-color;
                font-size: 1.2rem;
            }

            .social {
                @include flex(row, center, center);
                gap: 10px;

                .icon {
                    @include flex(row, center, center);
                    background-color: $social-bg-color;
                    padding: 10px;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;

                    i {
                        color: $footer-bottom-bg-color;
                    }
                }
            }
        }
    }
}
</style>