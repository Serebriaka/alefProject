<template>
    <div class="main-content">
        <div class="personal-data">
            <div class="personal-data-title">
                <label class="form-title">Персональные данные</label>
                <p class="user-data">{{childArray.userName}}, {{childArray.userOld}} лет</p>
            </div>
        </div>
        <div class="personal-child">
            <div class="personal-child-title">
                <label class="form-title">Дети</label>
            </div>
                <div class="user-child" v-for="child in this.childArray.childValue" :key="child">
                    <p class="value-child">{{ child.name }}, {{ child.years }} лет</p>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'PreviewItem',
        components: {},
        props: {
            childArray: {
                type: Object,
            },
        },
        data: function () {
            return {
            }
        },
    }
</script>

<style>
    .form-title{
        width: 197px;
        height: 24px;
        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #111111;
        margin: 20px 0px;
    }
    .personal-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .personal-data-title {
        width: 616px;
        margin-bottom: 20px;
        font-size: 16px;
    }

    .personal-child {
        display: flex;
        flex-direction: column;

        align-items: center;
        margin-top: 30px;
    }
    .personal-child-title {
        width: 616px;
    }
    .child-form-input {

        display: flex;
        flex-direction: column;

    }
    .user-data {
        width: 170px;
        height: 24px;
        top: 44px;
        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        display: flex;
        align-items: center;
        color: #111111;
        margin: 20px 0px;
    }
    .user-child {
        display: flex;
        width: 160px;
        margin-right: 480px;
        height: 44px;
        margin-bottom: 25px;
        align-items: center;


        padding: 10px 20px;
        top: 44px;
        background: #F1F1F1;
        border-radius: 5px;
        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 900;
        font-size: 16px;

    }
    .value-child {

    }

</style>