function start()
{
    var x=document.getElementsByTagName("input")
    f=x[0].value
    g=x[1].value
    w=x[2].value
    
    var R= document.getElementsByName('s'); 
    var R1; 
    for(var i=0;i<R.length;i++)
    { 
    if(R[i].checked){ R1= R[i].value; 
    } 
    }
    
    var T= document.getElementsByName('u'); 
    var R2; 
    for(var i=0;i<T.length;i++)
    { 
    if(T[i].checked){ R2= T[i].value; 
    } 
    }
    
    var U= document.getElementsByName('v'); 
    var R3; 
    for(var i=0;i<U.length;i++)
    { 
    if(U[i].checked){ R3= U[i].value; 
    } 
    }
    
    var can=document.getElementById("cv")
    var ctx=can.getContext("2d");
    var h=(can.height)/2;
    ctx.translate(h,h);
    baseCir(ctx,h,0.3)
    drawCam(ctx,h,0.3)
    
    function drawCam(ctx,h,b)
    {

         
        var m//displacement object
        var j=5;//resolution
        
        
        baseCir(ctx,h,b)
        
        outStroke(ctx,h,b,f,m,j)
        
        
        dwell(ctx,h,b,g,m)
        
        
        returnStroke(ctx,h,b,w,m,j)
    
    }
    function baseCir(ctx,h,b)
    {
        ctx.strokeStyle="green"
        ctx.setLineDash([5,5])
        ctx.arc(0,0,b*h,0,2*Math.PI)
        ctx.stroke()
        
    }
    
    function outStroke(ctx,h,b,a,m,j)
    {
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.setLineDash([])
        ctx.moveTo(0,0)
        ctx.lineTo(0,-0.9*h)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle="black"
        ctx.moveTo(0,-b*h)
        for(var i=j;i<=a;i+=j)
        {
           ctx.rotate(-j*Math.PI/180)
           d=-0.3*h*Math.sin(i/a*90*Math.PI/180)-b*h
        ctx.lineTo(0,d)
        ctx.stroke()
        }
        m=d
    }
    
    function dwell(ctx,h,b,a,m)
    {
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.moveTo(0,0)
        ctx.lineTo(0,-0.9*h)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle="black"
        var u=-1*Math.PI/2
        ctx.arc(0,0,-d,u,-a*Math.PI/180+u,true)
        ctx.stroke()
        ctx.rotate(-a*Math.PI/180)
    }
    
    function returnStroke(ctx,h,b,a,m,j)
    {
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.moveTo(0,0)
        ctx.lineTo(0,-0.9*h)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle="black"
        for(var i=a;i>=0;i-=j)
        {
        d=-0.3*h*Math.sin((i/a*90)*Math.PI/180)-b*h
        ctx.lineTo(0,d)
        ctx.stroke()
        ctx.rotate(-j*Math.PI/180)
        }
        ctx.rotate(j*Math.PI/180)
        ctx.beginPath()
        ctx.strokeStyle="red"
        ctx.moveTo(0,0)
        ctx.lineTo(0,-0.9*h)
        ctx.stroke()
    }
    
}

