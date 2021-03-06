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
function starMove(obj,json,fnEnd){
    clearInterval(obj.timer)
    var bStop=true
    obj.timer=setInterval(function(){
        for(var arr in json)
        {
        var cur=0
        if(arr =='opacity')
        {
            cur=Math.round(parseFloat(getStyle(obj,arr)*100))
        }
        else
        {
            cur=parseInt(getStyle(obj,arr))
        }
        var speed=(json[arr]-cur)/100
        speed=speed>0?Math.ceil(speed):Math.floor(speed)
        if(cur!=json[arr])
            bStop=false
        
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
    if(bStop)
        {
            clearInterval(timer)
            if(fnEnd)fnEnd()
        }
    },30)
}