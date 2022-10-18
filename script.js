const allg = document.getElementsByClassName('gold')
const alls = document.getElementsByClassName('silver')
const vw = window.innerWidth/100;
var itempick=false;
var chk;
var down=false;
var timecount;


function chktotal(){
    if($('#goldtext').text() >=3 && $('#silvertext').text() >=3){
        clearInterval(timecount);
        down=false;
        document.getElementById('win').currentTime='0';
        document.getElementById('win').play();
        $('#endt').text( parseInt($('#clockT').text())+' sec')
        setTimeout(()=>{$('#end').fadeIn()},1200)
        setTimeout(()=>{$('#game').fadeOut()},1400)
        document.getElementById('again').onclick=()=>{
            location.reload()
        }
    }
    

}

function reset(x,y){
  $('#wire').attr('style','animation:unset')
  $('#wire').css({ height: y })
  $('#wire').animate({ height: '0.5vw' },x)
  setTimeout(()=>{
    down=true
    document.getElementById('success').pause()
document.getElementById('success').currentTime='0'
document.getElementById('success').play()
    if(document.getElementById('crane').children[2].getAttribute('src').includes('silver')){
$('#silvertext').text(parseInt($('#silvertext').text())+1);
$('#silvertext').css('box-shadow','-7vw 0px 7vw 2vw #e7e8ee')
setTimeout(()=>{$('#silvertext').css('box-shadow','none')},2000)
    }else{
        $('#goldtext').text(parseInt($('#goldtext').text())+1)
        $('#goldtext').css('box-shadow','-7vw 0px 8vw 3vw #ffefb9')
        setTimeout(()=>{$('#goldtext').css('box-shadow','none')},2000)
    }
    document.getElementById('crane').children[2].remove();
    $('#crane').attr('style','animation: rot 3000ms linear infinite') 
    itempick=false;
    $('#game').css('animation','unset')
    document.getElementById('cranem').pause()
    chktotal()

  },x-100)
}

document.body.onclick=(e)=>{
    
    if(down==true){
        document.getElementById('cranem').currentTime = '0'
        document.getElementById('cranem').play()
       
        down=false;
    var rot = parseInt($('#crane').css('rotate'))
    $('#crane').css({
        animation:'none',
        rotate: $('#crane').css('rotate')
    })
    if(rot>35 || rot<0){
        $('#wire').css('animation','gol 4000ms linear')
    }else{
        $('#wire').css('animation','go 4000ms linear')
    }
    

     chk = setInterval(()=>{
       var rotc = parseInt($('#crane').css('rotate'))
       var h = parseInt($('#wire').css('height'))


       if(rotc<66 && rotc>61 && document.getElementsByClassName('gold2')[0] != null){
        itempick=true
        if(h>(44.5*vw)&& h<(46.5*vw)){
           clearInterval(chk)
           document.getElementsByClassName('gold2')[0].remove()
           var a = document.createElement('img')
           a.setAttribute('style',"top: -1.8vw;left: 0;width:4vw; position: relative;")
           a.setAttribute('src',"./img/gold.png")
           document.getElementById('crane').append(a)
           reset(2000,h)  
           $('#game').css('animation','shak 52ms linear infinite')
        }}

        if(rotc<59 && rotc>46 && document.getElementsByClassName('silver1')[0] != null){
            itempick=true
            if(h>(29*vw)&& h<(31*vw)){
               clearInterval(chk)
               document.getElementsByClassName('silver1')[0].remove()
               var a = document.createElement('img')
               a.setAttribute('style',"top: -4vw;left: 0;width:12vw; position: relative;")
               a.setAttribute('src',"./img/silver.png")
               document.getElementById('crane').append(a)
               reset(3500,h) 
               $('#game').css('animation','shak 52ms linear infinite')  
            }}

            if(rotc<55 && rotc>46&& document.getElementsByClassName('gold1')[0] != null){
                itempick=true
                if(h>(43*vw)&& h<(45*vw)){
                   clearInterval(chk)
                   document.getElementsByClassName('gold1')[0].remove()
                   var a = document.createElement('img')
                   a.setAttribute('style',"top: -3.5vw;left: 0;width:10vw; position: relative;")
                   a.setAttribute('src',"./img/gold.png")
                   document.getElementById('crane').append(a)
                   reset(3100,h)  
                   $('#game').css('animation','shak 52ms linear infinite') 
                }}
                if(rotc<34 && rotc>27 && document.getElementsByClassName('gold3')[0] != null){
                    itempick=true
                    if(h>(31.5*vw)&& h<(33*vw)){
                       clearInterval(chk)
                       document.getElementsByClassName('gold3')[0].remove()
                       var a = document.createElement('img')
                       a.setAttribute('style',"top: -2.5vw;left: 0;width:5vw; position: relative;")
                       a.setAttribute('src',"./img/gold.png")
                       document.getElementById('crane').append(a)
                       reset(1500,h)  
                       $('#game').css('animation','shak 52ms linear infinite') 
                    }}

                    if(rotc<15 && rotc>-2 && document.getElementsByClassName('silver2')[0] != null){
                        itempick=true
                        if(h>(26.5*vw)&& h<(28*vw)){
                           clearInterval(chk)
                           document.getElementsByClassName('silver2')[0].remove()
                           var a = document.createElement('img')
                           a.setAttribute('style',"top: -4vw;left: 0;width:13vw; position: relative;")
                           a.setAttribute('src',"./img/silver.png")
                           document.getElementById('crane').append(a)
                           reset(3800,h)  
                           $('#game').css('animation','shak 52ms linear infinite') 
                        }}  
                        if(rotc<-26 && rotc>-37){
                            itempick=true
                            if(h>(31.5*vw)&& h<(34*vw) && document.getElementsByClassName('silver5')[0] != null){
                               clearInterval(chk)
                               document.getElementsByClassName('silver5')[0].remove()
                               var a = document.createElement('img')
                               a.setAttribute('style',"top: -4vw;left: 0;width:8vw; position: relative;")
                               a.setAttribute('src',"./img/silver.png")
                               document.getElementById('crane').append(a)
                               reset(2600,h)  
                               $('#game').css('animation','shak 52ms linear infinite') 
                            }}  
                            if(rotc<-38 && rotc>-44 && document.getElementsByClassName('gold5')[0] != null){
                                itempick=true
                                if(h>(42.5*vw)&& h<(44*vw)){
                                   clearInterval(chk)
                                   document.getElementsByClassName('gold5')[0].remove()
                                   var a = document.createElement('img')
                                   a.setAttribute('style',"top: -1.5vw;left: 0;width:3vw; position: relative;")
                                   a.setAttribute('src',"./img/gold.png")
                                   document.getElementById('crane').append(a)
                                   reset(1200,h)  
                                   $('#game').css('animation','shak 52ms linear infinite') 
                                }}  

                                if(rotc<-24 && rotc>-38 && document.getElementsByClassName('silver3')[0] != null){
                                    itempick=true
                                    if(h>(16.5*vw)&& h<(18*vw)){
                                       clearInterval(chk)
                                       document.getElementsByClassName('silver3')[0].remove()
                                       var a = document.createElement('img')
                                       a.setAttribute('style',"top: -2.5vw;left: 0;width:6vw; position: relative;")
                                       a.setAttribute('src',"./img/silver.png")
                                       document.getElementById('crane').append(a)
                                       reset(1200,h)   
                                       $('#game').css('animation','shak 52ms linear infinite')
                                    }} 
                                    if(rotc<-52 && rotc>-64 && document.getElementsByClassName('silver4')[0] != null){
                                        itempick=true
                                        if(h>(14.5*vw)&& h<(16*vw)){
                                           clearInterval(chk)
                                           document.getElementsByClassName('silver4')[0].remove()
                                           var a = document.createElement('img')
                                           a.setAttribute('style',"top: -2vw;left: 0;width:5vw; position: relative;")
                                           a.setAttribute('src',"./img/silver.png")
                                           document.getElementById('crane').append(a)
                                           reset(600,h)  
                                           $('#game').css('animation','shak 52ms linear infinite') 
                                        }}
                                        if(rotc<-49 && rotc>-54 && document.getElementsByClassName('gold4')[0] != null){
                                            itempick=true
                                            if(h>(22.5*vw)&& h<(24*vw)){ 
                                                    clearInterval(chk)
                                                    document.getElementsByClassName('gold4')[0].remove()
                                                    var a = document.createElement('img')
                                                    a.setAttribute('style',"top: -1vw;left: 0;width:2vw; position: relative;")
                                                    a.setAttribute('src',"./img/gold.png")
                                                    document.getElementById('crane').append(a)
                                                    reset(500,h)    
                                                    $('#game').css('animation','shak 52ms linear infinite')                     
                                            }}
                                            if(rotc<-50 && rotc>-64 && document.getElementsByClassName('gold6')[0] != null){
                                                itempick=true
                                                if(h>(38.5*vw)&& h<(40*vw)){ 
                                                        clearInterval(chk)
                                                        document.getElementsByClassName('gold6')[0].remove()
                                                        var a = document.createElement('img')
                                                        a.setAttribute('style',"top: -4vw;left: 0;width:13vw; position: relative;")
                                                        a.setAttribute('src',"./img/gold.png")
                                                        document.getElementById('crane').append(a)
                                                        reset(3000,h)    
                                                        $('#game').css('animation','shak 52ms linear infinite')                     
                                                }}

    })


    setTimeout(()=>{
        if(itempick==false){
            setTimeout(()=>{
                itempick=false
            console.log('res')
            down=true
            clearInterval(chk)
            $('#crane').css({
             animation:'rot 3000ms linear infinite'})
             $('#wire').css('animation','none')
             document.getElementById('cranem').pause()
            },3000)
        }
    },1000)
}
}

var elem = document.body;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
document.getElementById('start').onclick=()=>{
    openFullscreen()
    $('#game').fadeIn()
  
    $('#startd').fadeOut()
    $('#guide').fadeIn();
    setTimeout(()=>{
        $('#guide').fadeOut();
    },3500)
    setTimeout(()=>{
        down=true;
     timecount = setInterval(()=>{
        $('#clockT').text(
            parseInt($('#clockT').text())+1
        )
     },1000)
    },4000)
    document.getElementById('bgm').play()
    document.getElementById('cranem').play()
    document.getElementById('cranem').volume='0.7'
    document.getElementById('cranem').pause()
    document.getElementById('win').play()
    document.getElementById('win').pause()
    document.getElementById('success').play()
    document.getElementById('success').pause()
}
document.getElementById('quit').onclick=()=>{
    window.close()
}
