document.addEventListener('DOMContentLoaded', function(e) {
    var frame = document.getElementById('responsive');
    var w = parseInt(getComputedStyle(frame).width.replace('px', ''));
    var h = parseInt(getComputedStyle(frame).height.replace('px', ''));

    var addr = {
        "frame": frame,
        "w": w,
        "h": h,
        "minW": 320,
        "dw": w,
        "dh": h,
        "friction": 4.5,
        "down": true,
        "delay": 1000
    };
    
    var inter = setInterval(function() {
        if (addr.down) {
            if (addr.dw > addr.minW) {
                addr.dw -= addr.friction;
            } else {
                setTimeout(function() {
                    addr.down = false;
                }, addr.delay);
            }
        } else {
            if (addr.dw < addr.w) {
                addr.dw += addr.friction;
            } else {
                setTimeout(function() {
                    addr.down = true;
                }, addr.delay);
            }
        }

        addr.frame.style.width = addr.dw + 'px';
    }, 0, addr);
});
