//获取样式
function getStyle(obj,name)
{
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
var timer=null
function starMove(obj,json,fnEnd){
    var bstop=true
    obj.timer=setInterval(function(){
        for(var arr in json)
        {
        var cur=0
        if(arr=='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arr)*100))
        }
        else
        {
            cur=parseInt(getStyle(obj,arr))
        }
        var speed=Math.abs((json[arr]-cur)/6)
        speed=speed>0?Math.ceil(speed):Math.floor(speed)
        
        if(json[arr]!=cur)
        {
            bstop=false
        }
        else
        {
            if(arr=='opacity')
            {
                obj.style.filter='alpha(opacity:'+(cur+speed)+')'
                obj.style.opacity=(cur+speed)/100
            }
            else
            {
                obj.style[arr]=cur+speed+'px'
            }
        }
    }
    if(bstop)
    {
        clearInterval(timer)
        if(fnEnd)fnEnd()
    }
    },30)
}