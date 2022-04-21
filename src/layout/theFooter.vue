<template>
    <div class="footer">
        <div class="text"><p>all rights reserved</p></div>
    </div>
</template>

<script>

</script>



<style>
.footer{

    position: fixed;
    height: 76px;
    left: 0px;
    right: 0px;
    /*top: 0px; */
    bottom: 0;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(17, 17, 17, 0.1);

    display: flex;
    justify-content: center;
}
    .text{
        height: 24px;
        left: 0px;
        right: 0px;
        top: calc(50% - 24px/2 - 2px);
        padding-right: 24px;

        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        display: flex;

        flex: none;
        order: 1;
        align-self: center;
        flex-grow: 0;
        margin: 0px 0px;

        color: #000000;
    }
</style>