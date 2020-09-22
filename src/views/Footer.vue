<template>
    <div class="footer">
        <div class="footer__columns">
            <div class="footer__column">
                <ul class="footer__column-list">
                    <label class="footer__title">Shop and Learn</label>
                    <li class="footer__label">Food</li>
                    <li class="footer__label">Beverage</li>
                    <li class="footer__label">Gift Vouchers</li>
                    <li class="footer__label">How to Order</li>
                </ul>
                <ul class="footer__column-list">
                    <label class="footer__title">Supreme Restaurant</label>
                    <li class="footer__label">Find a Restaurant</li>
                    <li class="footer__label">Order Status</li>
                    <li class="footer__label">Shopping Help</li>
                    <li class="footer__label">Improve Us</li>
                </ul>
            </div>
            <div class="footer__column">
                <ul class="footer__column-list">
                    <label class="footer__title">Account</label>
                    <li class="footer__label">Create New Account</li>
                    <li class="footer__label">Manage Your Account</li>
                    <li class="footer__label">Forgot Password</li>
                </ul>
                <ul class="footer__column-list">
                    <label class="footer__title">For Business</label>
                    <li class="footer__label">Supreme and Business</li>
                    <li class="footer__label">Partnership</li>
                </ul>
                <ul class="footer__column-list">
                    <label class="footer__title">Follow Us</label>
                    <div class="footer__social-media">
                        <font-awesome-icon :icon="['fab','facebook']" class="footer__icon facebook" />
                        <font-awesome-icon :icon="['fab','instagram']" class="footer__icon instagram" />
                        <font-awesome-icon :icon="['fab','twitter']" class="footer__icon twitter" />
                    </div>
                </ul>
            </div>
            <div class="footer__column">
                <ul class="footer__column-list">
                    <label class="footer__title">About Supreme</label>
                    <li class="footer__label">Job Opportunities</li>
                    <li class="footer__label">Investors</li>
                    <li class="footer__label">Events</li>
                </ul>
            </div>
        </div>
        <div class="footer__footer">
            <span class = "footer__shop">
                More ways to shop: 
                <label class = "footer__shop-link">Find a Restaurant</label>
                 near you. Or call 021-8182 919398.
            </span>
            <div class="footer__copyright">
                <span class="footer__copyright__left">Copyright © 2020 Supreme. All rights reserved</span>
                <div class="footer__copyright__middle">
                    <span class="footer__label">Privacy Policy</span>
                    <span class="footer__label">Terms of Use</span>
                    <span class="footer__label">Site Map</span>
                </div>
                <span class="footer__copyright__right">Indonesia</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.footer{
    padding: .8em 25vw;
    border-top: 1px solid $extra-light-grey;

    &__columns{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        margin-top: .8rem;
    }

    &__column-list{
        margin-bottom: 1.8em;
    }

    &__title{
        color: $text;
        font-weight: 650;
    }

    &__label{
        color: $secondary-text;
        list-style: none;
        margin-bottom: .6em;

        &:hover{
            color: $text;
            cursor: pointer;
        }
    }

    &__icon{
        font-size: 24px;
        margin-right: 1rem;
    }

    &__social-media{
        display: flex;
        align-items: center;
    }

    &__footer{
        display: flex;
        flex-direction: column;   
        justify-content: space-between; 
        font-size: 14px;
    }

    &__shop{
        color: $secondary-text;
        border-bottom: 1px solid $extra-light-grey;
        padding-bottom: 8px;
        margin-bottom: 7px;
    }

    &__shop-link{
        color: $route-color;
        margin: 0;
        padding: 0;

        &:hover{
            cursor: pointer;
            color: $route-color-hover;
        }
    }

    &__copyright{
        display:flex;
        justify-content: center;
        color: $secondary-text;

        &__middle .footer__label:not(:first-child){
            padding-left: 1.2em;
            margin-left: 1.2em;
            border-left: 1px solid $extra-light-grey;
        }

        &__left{
            float:left;
            margin-right: auto;
        }

        &__right{
            float: right;
            margin-left: auto;
        }
    }

    .facebook:hover,
    .twitter:hover,
    .instagram:hover{
        cursor: pointer;
    }

    .facebook{
        color: #3b5998;
        font-size: 29.5px;
    }

    .twitter{
        background: #00acee;
    }

    .instagram{
        background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
    }

    .instagram,
    .twitter{
        color: white;
        border-radius: 100%;
        height: 30px;
        width: 30px;
        padding: .2em;
    }
}

@media screen and (max-width:1366px){
    .footer{
        padding: .8em 10vw;
    }
}
</style>