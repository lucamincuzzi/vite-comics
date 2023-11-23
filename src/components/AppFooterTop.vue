<script>
export default {

}
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer-container">
            <div class="links-container">
                <h4>Lorem</h4>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
                <h4>Lorem</h4>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                </ul>
            </div>
            <div class="links-container">
                <h4>Lorem</h4>
                <ul>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
                    <li>Lorem</li>
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
    background-image: url(../assets/img/footer-bg.jpg);

    .footer-container {
        @include container;
        @include flex(row, start, center);
        @include logo-bg;
        height: 100%;
        gap: 1rem;

        .links-container {
            height: 80%;
            color: white;
            @include flex(column, start, center);
            gap: 10px;

            h4 {
                font-size: 1.2rem;
            }

            ul {
                list-style-type: none;

                li {
                    color: lightgray;
                }
            }
        }
    }
}
</style>