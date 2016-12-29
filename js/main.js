$(document).ready(function() {  
   /* Animation slide */
    var $animation = function() {
    $('.sp-layer-l, .sp-layer-a, .sp-layer-s, .sp-layer-t').css({
           'transition-delay': '0.5s',
           'transform': 'scale(0.69063) translate3d(0, 0, 0)',
           'opacity': 1
       });
        $('.sp-layer-40').css({
            'transition-delay': '1.2s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('#sp-img-01').css({
            'transition-delay': '2s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('#sp-img-02').css({
            'transition-delay': '2.5s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('#sp-layer-creative, #sp-layer-studios').css({
            'transition-delay': '3.5s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('.sp-layer-border1, .sp-layer-border2, .sp-layer-border3, .sp-layer-border4').css({
            'transition-delay': '6s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('.sp-layer-smtext1, .sp-layer-smtext2, .sp-layer-smtext3, .sp-layer-smtext4').css({
            'transition-delay': '6s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
    };
    var $animation2 = function() {
        $('.sp-layer-smtext7, .sp-layer-smtext6').css({
            'transition-delay': '0.6s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1  
        });
        $('.sp-layer-smtext5').css({
            'transition-delay': '1.5s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('.sp-layer-smtext8').css({
            'transition-delay': '2.5s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
        $('.sp-layer-smtext9').css({
            'transition-delay': '2.8s',
            'transform': 'scale(0.69063) translate3d(0, 0, 0)',
            'opacity': 1
        });
    };
    var $resetAnimation2 = function() {
        $('.sp-layer-smtext5, .sp-layer-smtext6').css({
            'transform': 'scale(0.699479) translate3d(0px, -50px, 0px)',
            'transition-delay': '0s',  
            'opacity': 0,
        });
        $('.sp-layer-smtext7, .sp-layer-smtext8').css({
            'transform': 'scale(0.699479) translate3d(0px, 50px, 0px)',
            'transition-delay': '0s',  
            'opacity': 0
        });
        $('.sp-layer-smtext9').css({
            'transform': 'scale(0.699479) translate3d(0, 0, 0px)',
            'transition-delay': '0s',  
            'opacity': 0,
        });
    };
    var $resetAnimation = function() {
        $('.sp-layer-l, .sp-layer-a, .sp-layer-s, #sp-img-01, #sp-img-02').css({
           'transform': 'scale(0.69063) translate3d(0, -50px, 0)',
           'transition-delay': '0s',
           'opacity': 0
        });
        $('.sp-layer-t, .sp-layer-40').css({
            'transform': 'scale(0.69063) translate3d(0, 50px, 0)',
            'transition-delay': '0s',
            'opacity': 0
        });
        $('#sp-layer-creative, .sp-layer-border1, .sp-layer-border3, .sp-layer-smtext1, .sp-layer-smtext3').css({
            'transform': 'scale(0.69063) translate3d(50px, 0, 0)',
            'transition-delay': '0s',
            'opacity': 0
        });
        $('#sp-layer-studios, .sp-layer-border2, .sp-layer-border4, .sp-layer-smtext2, .sp-layer-smtext4').css({
            'transform': 'scale(0.69063) translate3d(-50px, 0, 0)',
            'transition-delay': '0s',
            'opacity': 0
        });
        
    };
    $animation();
    
    /* Good move slide */
    $('#kopa-area1').on('click', '#kopa-area1-next', function() {
        var width = 1360;
        var $this = $(this);
        var $kopaArea1Slide = $this.siblings('#kopa-area1-slide');
        var $kopaArea1Container = $kopaArea1Slide.children('#kopa-slide-wrapper');
        var $selectIndex = $kopaArea1Slide.children('#kopa-slide-wrapper').children('.active').attr('id');
        var $active = $kopaArea1Slide.children('#kopa-slide-wrapper').children('.active');
        var $kopaArea1Slide3 = $kopaArea1Container.children('.kopa-slides3');
        $selectIndex++;
        $kopaArea1Container.css({
            "transform": "translate3d(-" + width * $selectIndex + "px,0px,0px)",   
            "transition": "all 500ms ease",
        });  
        $active.removeClass('active');
        $kopaArea1Slide.children('#kopa-slide-wrapper').children('.kopa-slides' + $selectIndex).addClass('active');
        if ($selectIndex === 3) {
            $active.removeClass('active');
//            $selectIndex--;
            
            $kopaArea1Container.css({
                "transform": "translate3d(-" + width * $selectIndex + "px,0px,0px)",   
                "transition": "all 500ms ease",
            });
            setTimeout(function () {
                $kopaArea1Container.css({
                    "transform": "translate3d(-" + 1360 + "px,0px,0px)",   
                    "transition": 'none',
                });
            }, 500);
            $('.kopa-slides3').removeClass('active');
            $selectIndex = 1;
            $kopaArea1Slide.children('#kopa-slide-wrapper').children('.kopa-slides' + $selectIndex).addClass('active');
        } 
        if ($selectIndex === 2) {
            $animation2();
            $resetAnimation();
        } else if($selectIndex === 1) {
            $animation();
            $resetAnimation2();
        }
//        $resetAnimation();
    });
    
    $('#kopa-area1').on('click', '#kopa-area1-prev', function() {
        var width = 1360;
        var $this = $(this);
        var $kopaArea1Slide = $this.siblings('#kopa-area1-slide');
        var $kopaArea1Container = $kopaArea1Slide.children('#kopa-slide-wrapper');
        var $selectIndex = $kopaArea1Slide.children('#kopa-slide-wrapper').children('.active').attr('id');
        var $active = $kopaArea1Slide.children('#kopa-slide-wrapper').children('.active');
        var $kopaArea1Slide3 = $kopaArea1Container.children('.kopa-slides3');
//        alert($selectIndex);
        $active.removeClass('active');
        $selectIndex--;
//        alert($selectIndex);
         if ($selectIndex === 0) {
            $animation2();
            $resetAnimation();
        }
        if ($selectIndex === 1) {
            $animation();
            $resetAnimation2();
            }
        if ($selectIndex === 0) {
            $kopaArea1Slide.children('#kopa-slide-wrapper').children('.kopa-slides' + 2).addClass('active');
            $kopaArea1Container.css({
                "transform": "translate3d(-" + width * 0 + "px,0px,0px)",   
                "transition": "all 500ms ease",
            });
            setTimeout(function () {
                $kopaArea1Container.css({
                    "transform": "translate3d(-" + width * 2 + "px,0px,0px)",   
                    "transition": 'none',
                });
            }, 500);
            $selectIndex = 2;
            
        } else {
            $kopaArea1Slide.children('#kopa-slide-wrapper').children('.kopa-slides' + 1).addClass('active');
            $kopaArea1Container.css({
                "transform": "translate3d(-" + width * 1 + "px,0px,0px)",   
                "transition": "all 500ms ease",
            });
             
        }
    });
    
    // Rotate 3d
    $('.kopa-area2-item').on('mouseover', '.kopa-area2-img', function() {
        var $this = $(this);
        var $koparea2Img = $('.kopa-area2-img');
        $this.css({
            'cursor': 'pointer',
            'transition': 'all 1s, visibility 0s',
            'transform': 'rotateY(-360deg)',
        });
    });
    $('.kopa-area2-item').on('mouseout', '.kopa-area2-img', function() {
        var $this = $(this);
        $this.css({
            'transition': 'all 1s, visibility 0s',
            'transform': 'rotateY(-180deg)',
        });
    });
    
    // Jquery kopa area4
    $('#kopa-area4, #kopa-area7-bottom').on('mouseover','.kopa-area4-item', function() {
        var $this = $(this);
        var $kopaBump = $this.children('#kopa-area4-bump');
        var $kopaBumpDiv = $kopaBump.children('div');
        var $kopaBumpLink = $kopaBump.children('a');
        $kopaBump.css({
           'opacity': '1', 
        });      
        $kopaBumpDiv.css({
            'transform': 'translate3d(0, 0, 0)',
            'opacity': 1,
        });
        $kopaBumpLink.css({
            'transform': 'translate3d(0, 0, 0)',
            'opacity': 1,
        });
    });
    $('#kopa-area4, #kopa-area7-bottom').on('mouseout','.kopa-area4-item', function() {
        var $this = $(this);
        var $kopaBump = $this.children('#kopa-area4-bump');
        var $kopaBumpDiv = $kopaBump.children('div');
        var $kopaBumpLink = $kopaBump.children('a');
        $kopaBump.css({
           'opacity': '0', 
        });      
        $kopaBumpDiv.css({
            'transform': 'translate3d(0, 120px, 0)',
            'opacity': 0,
        });
        $kopaBumpLink.css({
            'transform': 'translate3d(0, 120px, 0)',
            'opacity': 0,
        });
    });
    
    // Scroll to Section 2
    $('#kopa-area1').on('click', '#kopa-area1-scroll', function() {
        $('html, body').animate({
            scrollTop: $('#kopa-area2').offset().top
        }, 1200);    
    });
});
