//获取样式
function getStyle(obj,name){
    if(obj.currentStyle)
    {
        return obj.currentStyle[name]
    }
    else
    {
        return getComputedStyle(obj,false)[name]
    }
}
//获取运动
//var timer=null
function starMove(obj,target,arr){
    clearInterval(obj.timer)
    obj.timer=setInterval(function(){
        var cur=0
        if(arr =='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arr)*100))
        }
        else
        {
            cur=parseInt(getStyle(obj,arr))
        }
        var speed=(target-cur)/6
        speed=speed>0?Math.ceil(speed):Math.floor(speed)
        if(cur==target)
        {
            clearInterval(obj.timer)
        }
        else
        {
            if(arr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(speed+cur)+')'
                obj.style.opacity=(speed+cur)/100
            }
            else
            {
                obj.style[arr]=speed+cur+'px'
            }
        }
    },30)
}