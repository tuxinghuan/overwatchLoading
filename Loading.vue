<template>
    <div id='loading'>
        <div id='picture'>
            <transition name ="fade">
                <div id='center' v-show="show1">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='top-left' v-show="show2">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='top-right' v-show="show3">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='right' v-show="show4">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='bottom-right' v-show="show5">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='bottom-left' v-show="show6">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
            <div id='left' v-show="show7">
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
            </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name:'loading',
    props:{
        color:String,
    },
    data: function(){
        return{
            show1:true,
            show2:true,
            show3:true,
            show4:true,
            show5:true,
            show6:true,
            show7:true,
            radius: '60px',
            gap: '10px'
        }
    },
    computed:{
        hexagonStyle:function(){
            return{
                position: 'relative',
	            width: '200px',
	            height: '115px',
                backgroundColor:this.color,
                
            }
        },
        beforeHexagonStyle:function(){
            return{
                borderTopColor:this.color
            }
        },
        afterHexagonStyle:function(){
            return{
                borderBottomColor:this.color
            }
        }
    },
    mounted:function(){
            setInterval(() => {
                setTimeout(() => {
                    this.show2=!this.show2;
                }, 0);
                setTimeout(() => {
                    this.show3=!this.show3;
                }, 200);
                setTimeout(() => {
                    this.show4=!this.show4;
                }, 400);
                setTimeout(() => {
                    this.show5=!this.show5;
                }, 600);
                setTimeout(() => {
                    this.show6=!this.show6;
                }, 800);
                setTimeout(() => {
                    this.show7=!this.show7;
                }, 1000);
                setTimeout(() => {
                    this.show1=!this.show1;
                }, 1200);
            }, 1400);
    },
}
    
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.6s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  -ms-transform: scale(0);
  -moz-transform: scale(0);
  -webkit-transform: scale(0);
  -o-transform:scale(0);
  transform: scale(0);

}

#picture{
    width:620px;
    height:576px;
    position:relative;
    margin-left:1000px
}
#center{
    position: absolute;
    left:210px;
    top:255px;  /* dev */
}
#top-left{
    position: absolute;
    top:62.5px;
    left:100px;
}
#top-right{
    position: absolute;
    top:62.5px;
    left:310px;
}
#right{
    position: absolute;
    top:255px;
    left: 420px;
}
#bottom-right{
    position: absolute;
    bottom:0px;
    left:320px;
}
#bottom-left{
    position: absolute;
    bottom:0px;
    left:100px;
}
#left{
    position: absolute;
    top:255px;
    left:1px;
}
.beforeHexagon{
	content: "";
	position: absolute;
	display: block;
	bottom: -157px;
	width: 0;
	height: 0;
	border: 100px solid transparent;
	border-top: 57px solid;
}
.afterHexagon{
	content: "";
	position: absolute;
	display: block;
	top: -157px;
	width: 0;
	height: 0;
	border: 100px solid transparent;
	border-bottom: 57px solid ;
}

</style>