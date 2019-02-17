<template>
    <div id='loading'>
        <div id='picture' :style=boxStyle>
            <transition name ="fade">
                <div id='center' v-show="show1" :style=centerStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>
            <transition name ="fade">
                <div id='top-left' v-show="show2" :style=topLeftStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>

            <transition name ="fade">
                <div id='top-right' v-show="show3" :style=topRightStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>

            <transition name ="fade">
                <div id='right' v-show="show4" :style=rightStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>

            <transition name ="fade">
                <div id='bottom-right' v-show="show5" :style=bottomRightStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>

            <transition name ="fade">
                <div id='bottom-left' v-show="show6" :style=bottomLeftStyle>
                    <div class="beforeHexagon" :style=beforeHexagonStyle></div>
                    <div class="Hexagon" :style=hexagonStyle></div>
                    <div class="afterHexagon" :style=afterHexagonStyle></div>
                </div>
            </transition>

            <transition name ="fade">
                <div id='left' v-show="show7" :style=leftStyle>
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
    name:'vue-overwatch-loading',
    props:{
        Color:{
            type:String,
            default: 'yellow'
        },
        Radius:{
            type:Number,
            default: 100
        },
    },
    data: function(){
        return{
            color:this.Color,
            radius:this.Radius,
            show1:false,
            show2:false,
            show3:false,
            show4:false,
            show5:false,
            show6:false,
            show7:false,
        }
    },
    computed:{
        gap:function(){
            let gap=this.radius/5
            return gap
        },
        boxStyle:function(){
            return{
                width:`${3*Math.sqrt(3)*this.radius+2*this.gap}px`,
                height:`${5*this.radius+2*this.gap}px`,
                position:'relative',
                marginLeft: '40px',
                marginTop: '20px'
            }
        },

        centerStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${(2*this.radius)+1*this.gap}px`,
                left:`${(this.radius*Math.sqrt(3))+1*this.gap}px`
            }
        },
        topLeftStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${this.radius/2}px`,
                left:`${(Math.sqrt(3)*this.radius/2)+1*this.gap/2}px`
            }
        },
        topRightStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${this.radius/2}px`,
                left:`${(((Math.sqrt(3)*3)*this.radius)/2)+3*this.gap/2}px`
            }
        },
        rightStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${(this.radius*2)+1*this.gap}px`,
                right:'0px'
            }
        },
        bottomRightStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${(7*this.radius/2)+2*this.gap}px`,
                left:`${(((Math.sqrt(3)*3)*this.radius)/2)+3*this.gap/2}px`
            }
        },
        bottomLeftStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${(7*this.radius/2)+2*this.gap}px`,
                left:`${(Math.sqrt(3)*this.radius/2)+1*this.gap/2}px`
            }
        },
        leftStyle:function(){
            return{
                position:'absolute',
                width:`${(Math.sqrt(3))*this.radius}px`,
                top:`${(this.radius*2)+1*this.gap}px`,
                left:'0px'
            }
        },
        hexagonStyle:function(){
            return{
                position: 'relative',width:`${(Math.sqrt(3))*this.radius}px`,height:`${this.radius}px`,
                backgroundColor:this.color,   
            }
        },
        beforeHexagonStyle:function(){
            return{
                borderTopColor:this.color,
                borderWidth:`${this.radius*Math.sqrt(3)/2}px`,
                borderTopWidth:`${this.radius/2}px`,
                bottom:`-${(this.radius*Math.sqrt(3))/2+this.radius/2}px`
            }
        },
        afterHexagonStyle:function(){
            return{
                borderBottomColor:this.color,
                borderWidth:`${this.radius*Math.sqrt(3)/2}px`,
                borderBottomWidth:`${this.radius/2}px`,
                top:`-${(this.radius*Math.sqrt(3))/2+this.radius/2}px`
            }
        }
    },
    created:function(){
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
.beforeHexagon{
	content: "";
	position: absolute;
	display: block;
	width: 0px;
	height: 0px;
    border-width:0px;
	border-style: solid ;
    border-color: transparent;
}
.afterHexagon{
	content: "";
	position: absolute;
	display: block;
	width: 0px;
	height: 0px;
    border-width:0px;
	border-style: solid ;
    border-color: transparent;
}
</style>