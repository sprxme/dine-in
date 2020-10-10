<template>
    <div class="confirm">
        <h1 class="confirm__title">Thank you for your order!</h1>

        <h1 class="confirm__title2">Here is your token.</h1>
        <h1 class="confirm__gentoken" ref="token">{{token}}</h1> 

        <router-link class = "confirm__link" :to="'/track/' +token">
            <span class="confirm__btn">Track Order</span>
            <font-awesome-icon icon="chevron-right" class="confirm__icon" />  
        </router-link>

        <b-modal class="confirm__alert" id="alert" hide-footer title="Token copied to clipboard!">
            <p class="confirm__alert__label">You can use this token to track your order's progress.</p>
            <div class="confirm__alert__buttons">
                <span class="confirm__alert__button primary-button" @click="$bvModal.hide('alert')">Ok</span>
            </div>
        </b-modal>
    </div>


</template>

<script>
export default {
   props: {
       token: String
   },
   methods: {
       doCopy() {
            navigator.clipboard.writeText(this.$refs.token.innerHTML)
                .then(() => this.$bvModal.show('alert'))
        }
    },
    created: function () {
        this.$nextTick(function () {
            this.doCopy()
        })
    }
}
</script>

<style lang="scss" scoped>
.confirm{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7em 10vw 10em;
    
    &__title{
        text-align: center;
        // width: 502px;
        font-size: 50px;
        margin-bottom: 80px;
        margin-top:0px;
    }

    &__title2{
        text-align: center;
        font-size: 20px;
        width: 300px;
        margin-bottom: 10px;
    }

    &__token {
        position: relative;
        display: flex;
        align-items: center;
    }

    &__gentoken{
        text-align: center;
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 60px;
    }

    &__label{
        margin: 0;
        padding: 0 5px 0 0;
        font-weight: 600;
        font-size: 18px;
        cursor: pointer;
    }

    &__link{
        color: $route-color;
        display: flex;
        align-items: center;

        &:hover{
            color: $route-color-hover;
        }
    }

    &__icon{
        margin-top: 1px;
    }

    &__btn {
        text-align: center;
        padding: 0em 0.3em;
        //font-weight: 500;
        font-size:20px;
    }

    &__alert{
        &__label{
            font-size: .95rem;
            color: $subtitle-text;
            margin-bottom: 1.5rem;
        }

        &__buttons{
            display: flex;
            justify-content: flex-end;

            .cancel{
                color: $text;
                font-weight: 500;

                &:hover{
                cursor: pointer;
                }
            }
        }

        &__button{
            padding: .3em 1.5em;
            border-radius: 3px;
        }
    }
}
</style>


