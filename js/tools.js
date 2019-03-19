
    
    // var timer;
    function move( obj , attr, target, speed ,callback){
                var current = parseInt(getStyle(obj , attr));
                if (current > target) {
                    speed = -speed;
                }
                clearInterval(obj.timer);
                obj.timer = setInterval(function(){
                var oldValue = parseInt(getStyle(obj , attr));
            //   alert(oldValue);
                 var newValue = oldValue + speed;
                 if ( (speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                     newValue = target;                     
                 }
                 obj.style[attr] = newValue +"px";
                 if (newValue == target) { 
                    clearInterval(obj.timer);
                    callback && callback();
                 }
            },30);
        
    };
     function getStyle(obj, name){
        if (window.getComputedStyle) {
            return getComputedStyle(obj ,null)[name];
        }else{
            return obj.currentStyle[name];
        };
    };
    
