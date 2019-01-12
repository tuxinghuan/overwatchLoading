<template>
    <div id='loading'>
         <button v-on:click="show">
            Toggle
        </button>
        <div id='picture'>
            <transition name ="fade"><div id='center' v-show="show1"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='top-left' v-show="show2"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='top-right' v-show="show3"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='right' v-show="show4"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='bottom-right' v-show="show5"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='bottom-left' v-show="show6"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
            <transition name ="fade"><div id='left' v-if="show7"><div class="Hexagon" :style=hexagonStyle></div></div></transition>
        </div>
    </div>
</template>

<script>
export default {
    name:'loading',
    data: function(){
        return{
            show1:true,
            show2:true,
            show3:true,
            show4:true,
            show5:true,
            show6:true,
            show7:true,
            color:'black',
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
                backgroundColor:'rgb(255, 208, 0)'
            }
        }
    },
    methods:{
        show:function(){
            setInterval(() => {
                setTimeout(() => {
                    this.show1=!this.show1;
                }, 200);
                setTimeout(() => {
                    this.show2=!this.show2;
                }, 400);
                setTimeout(() => {
                    this.show3=!this.show3;
                }, 600);
                setTimeout(() => {
                    this.show4=!this.show4;
                }, 800);
                setTimeout(() => {
                    this.show5=!this.show5;
                }, 1000);
                setTimeout(() => {
                    this.show6=!this.show6;
                }, 1200);
                setTimeout(() => {
                    this.show7=!this.show7;
                }, 1400);
            }, 1600);
        }
            
    }
        
    
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#picture{
    width:620px;
    height:576px;
    position:relative;
    margin-left:100px
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

.Hexagon:after {
	content: "";
	position: absolute;
	display: block;
	top: -157px;
	width: 0;
	height: 0;
	border: 100px solid transparent;
	border-bottom: 57px solid rgb(255, 208, 0);
}
.Hexagon:before {
	content: "";
	position: absolute;
	display: block;
	bottom: -157px;
	width: 0;
	height: 0;
	border: 100px solid transparent;
	border-top: 57px solid rgb(255, 208, 0);
}
</style>