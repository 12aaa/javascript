function LimitDraw(id){
    Draw.call(this,id)
}
for(var i in Draw.prototype){
    LimitDraw.prototype[i]=Draw.prototype[i]
}
LimitDraw.prototype.fnMove=function (e)
{
            var e=e||event
            var l=e.clientX-this.disX
            var t=e.clientY-this.disY
            if(l<0)
            {
                l=0
            }
            else if(l>document.documentElement.clientWidth-this.obox.offsetWidth)
            {
                l=document.documentElement.clientWidth-this.obox.offsetWidth
            }
            if(t<0)
            {
                t=0
            }
            else if(t>document.documentElement.clientHeight-this.obox.offsetHeight)
            {
                t=document.documentElement.clientHeight-this.obox.offsetHeight
            }
            this.obox.style.left=l+'px'
            this.obox.style.top=t+'px'
}