<template>
    <div class="header">
        <img class="imgLogo" src="../image/Logo_imi_horizontal.png">
        <router-link
                :key="menuItem"
                :to="menuItem.url" class="nav-link"
                v-for="menuItem in this.menuItems"
        >
            <span class="menu_item">{{menuItem.title}}</span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'theHeader',
        data: function () {
            return {
                menuItems: [
                    {
                        name: 'form',
                        title: 'Форма',
                        url: '/form',
                    },
                    {
                        name: 'preview',
                        title: 'Превью',
                        url: '/preview',
                    }
                ]
            }
        }
    }
</script>

<style>
.header{

    height: 75px;
    left: 0px;
    right: 0px;
    top: 0px;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

    display: flex;
    justify-content: center;
}
.imgLogo{
    position: absolute;
    left: 3.73%;
    right: 83.46%;
    top: 22px;
    bottom: 22px;

}

.nav-link {
    flex: none;
    order: 1;
    align-self: center;
    flex-grow: 0;
    font-family: 'Montserrat Light';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-right: 20px;
}
.nav-link:last-child {
    margin-right: 0;
}
</style>