<script>
export default {
    data() {
        return {
            navLinks: ["Characters", "Comics", "Movies", "Tv", "Games", "Collectibles", "Videos", "Fans", "News", "Shop"],
        }
    }
}
</script>

<template>
    <header>
        <div>
            <img src="../assets/img/dc-logo.png" alt="Logo DC">
            <ul>
                <li v-for="(link, index) in navLinks"><a>{{ link.toUpperCase() }}</a></li>
            </ul>
        </div>  
    </header>
    <div class="hero"></div>
</template>
<style lang="scss" scoped>
@use "../style/partials/variables" as *;
@use "../style/partials/mixins" as *;

header {
    @include flex(row, center, center);
    height: $header-height;

    div {
        @include container;
        @include flex(row, space-between, center);
        height: 100%;

        img {
            width: 80px;
        }

        ul {
            list-style-type: none;
            @include flex(row, center, center);
            gap: 1rem;
            height: 100%;

            li {
                @include flex(row, center, center);
                position: relative;
                font-size: 0.8rem;
                font-weight: bold;
                letter-spacing: -0.5px;
                height: 100%;

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 0px;
                    background-color: $main-color;
                    transition: all .3s;
                }

                &:hover {
                    &::after {
                        height: 3px;
                    }
                }
            }
        }
    }
}

.hero {
    width: 100%;
    height: 280px;
    background-image: url(../assets/img/jumbotron.jpg);
    @include bg-image-properties(top, no-repeat, cover);
    
}
</style>