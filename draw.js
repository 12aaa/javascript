function Draw(id)
{
    var _this=this
    this.obox=null
    this.disX=0
    this.disY=0
    this.obox=document.getElementById(id)
    this.obox.onmousedown=function(e)
    {
        _this.fnDown(e)
        return false
    }
}
Draw.prototype.fnDown=function (e)
{
        var _this=this
          var e=e||event
          this.disX=e.clientX-this.obox.offsetLeft
          this.disY=e.clientY-this.obox.offsetTop

          document.onmousemove=function(e){
            _this.fnMove(e)
          }
          document.onmouseup=function(e){
            _this.fnUp()
          }
}
Draw.prototype.fnMove=function (e)
{
            var e=e||event
            this.obox.style.left=e.clientX-this.disX+'px'
            this.obox.style.top=e.clientY-this.disY+'px'
}
Draw.prototype.fnUp=function ()
{
            document.onmousemove=null
            document.onmouseup=null
}