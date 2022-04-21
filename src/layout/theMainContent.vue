<template>
    <div class="data-container">
        <router-view
                @save-data="transmit"
                :child-array="dataValue"
        ></router-view>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                dataValue: {
                    userName:'',
                    userOld:'',
                    childValue:[],
                },
            };
        },
        methods:{
            transmit(data) {
                console.log(this.dataValue)
                this.dataValue = data;

            },

            }

    }

</script>

<style>
    .buttonSave{
        padding-bottom: 200px;
    }

    .inputsKids
    {margin-top: 20px;
     margin-bottom: 20px;
    }
.personalDate{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 6px;
    margin-bottom: 20px;

    position: absolute;
    width: 616px;
    height: 166px;
    left: 375px;
    top: 106px;

    font-family: 'Montserrat Light';
    font-style: normal;
    font-weight: 900;
    font-size: 16px;
    line-height: 24px;

    display: flex;

    color: #111111;
}
#nm{
    margin-top: 8px;
    margin-bottom: 2px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;
}
#od{
    margin-top: 8px;
    margin-bottom: 2px;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: left;

}
#bt{
    padding-top: 7px;
    padding-right: 5px;



    font-family: 'Montserrat Light';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;

    display: flex;
    align-items: center;
    text-align: center;
    color: #01A7FD;
}
#pl{
    padding-top: 7px;
    padding-right: 7px;
    padding-left: 10px;
}
    .inputName{
        height: 56px;
        width: 616px;
        left: 0px;
        top: 0px;
        border-radius: 4px;
        margin-bottom: 6px;
        padding-left: 16px;
        margin-top: 20px;


        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        border-radius: 4px;

        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;


        display: flex;
        flex-direction: column;
    }
    .inputOld{
        height: 56px;
        width: 616px;
        left: 0px;
        top: 0px;
        border-radius: 4px;
        padding-left: 16px;



        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        border-radius: 4px;

        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        flex-direction: column;
    }
    .name{
        height: 24px;
        left: 16px;
        right: 582px;
        top: 26px;
        border: 0px;
        size: 14px;


        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;


        display: flex;
        align-items: center;

        color: black;
    }
    .old{
        height: 24px;
        left: 16px;
        right: 582px;
        top: 26px;
        border: 0px;
        size: 14px;

        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;

        display: flex;
        align-items: center;

        color: black;
    }
.kids{
    margin-top: 40px;

    padding: 0px;

    position: absolute;
    width: 616px;
    height: 166px;
    left: 375px;
    top: 316px;
}
    .addKids{
        height: 44px;
        width: 204px;
        left: 787px;
        top: 305px;
        border-radius: 100px;

        position: absolute;
        display: flex;
        justify-content: center;
        border: 2px solid #01A7FD;
        box-sizing: border-box;
        border-radius: 100px;
        background-color: white;


        width: 204px;
        height: 44px;
        left: 787px;
        top: 305px;
    }
   .inputNameKids{
       height: 56px;
       width: 260px;
       left: 0px;
       top: 0px;
       border-radius: 4px;
       margin-right: 18px;
       padding-left: 16px;

       height: 56px;
       width: 260px;
       left: 0px;
       top: 0px;
       border-radius: 4px;




       background: #FFFFFF;
       border: 1px solid #F1F1F1;
       border-radius: 4px;
   }
   #k{

       width: 115px;
       height: 24px;

       font-family: 'Montserrat Light';
       font-style: normal;
       font-weight: 900;
       font-size: 16px;
       line-height: 24px;

       color: #111111;
       flex: none;
       order: 0;
       flex-grow: 0;



   }
   #nk{
       margin-top: 8px;
       height: 16px;
       left: 16px;
       right: 189px;
       top: 8px;
       font-family: 'Montserrat Light';
       font-style: normal;
       font-weight: 400;
       font-size: 13px;
       line-height: 16px;
       display: flex;
       align-items: center;
       color: rgba(17, 17, 17, 0.48);
   }
   #olk{
       margin-top: 8px;
       height: 16px;
       left: 16px;
       right: 189px;
       top: 8px;
       font-family: 'Montserrat Light';
       font-style: normal;
       font-weight: 400;
       font-size: 13px;
       line-height: 16px;
       display: flex;
       align-items: center;
       color: rgba(17, 17, 17, 0.48);
   }
    .inputOldKids{
        height: 56px;
        width: 260px;
        left: 0px;
        top: 0px;
        border-radius: 4px;
        padding-left: 16px;

        height: 56px;
        width: 260px;
        left: 0px;
        top: 0px;
        border-radius: 4px;


        background: #FFFFFF;
        border: 1px solid #F1F1F1;
        border-radius: 4px;
    }
    .inputsKids{
        display: flex;
    }
    .delete{
        height: 24px;
        width: 60px;
        left: 556px;
        top: 16px;
        align-items: center;
        margin-top: 17px;
        margin-left: 18px;

        color: #01A7FD;
        font-family: 'Montserrat Light';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
    }
    .nameKids{
        border: 0px;
        margin-top: 2px;

        height: 24px;
        width: 228px;
        left: 16px;
        top: 26px;
        font-family: 'Montserrat Light';

    }
    .oldKids{
        border: 0px;
        margin-top: 2px;

        height: 24px;
        width: 228px;
        left: 16px;
        top: 26px;
        font-family: 'Montserrat Light';
    }
    .save{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 13px;
        margin-top: 30px;
        width: 118px;
        height: 44px;
        left: 375px;
        top: 512px;
        background: #01A7FD;
        border-radius: 100px;
        border: #01A7FD;
    }
</style>