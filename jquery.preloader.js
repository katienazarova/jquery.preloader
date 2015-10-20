(function($) {
    var actions = {
        start: function() {
            var $preloader = $("<div id='jpreloader' class='preloader-overlay'><div class='loader' style='position:absolute;left:50%;top:50%;margin-left:-24px;margin-top:-24px;'><svg width='48px' height='48px' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid' class='uil-default'><rect x='0' y='0' width='100' height='100' fill='none' class='bk'></rect><rect x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(0 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(45 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.125s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(90 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.25s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(135 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.375s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(180 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.5s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(225 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.625s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(270 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.75s' repeatCount='indefinite'/></rect><rect  x='45' y='37.5' width='10' height='25' rx='7' ry='7' fill='#ffffff' transform='rotate(315 50 50) translate(0 -30)'>  <animate attributeName='opacity' from='1' to='0' dur='1s' begin='0.875s' repeatCount='indefinite'/></rect></svg></div></div>");
            $preloader.css({
                'background-color': '#4c4c4c',
                'width': '100%',
                'height': '100%',
                'left': '0',
                'top': '0',
                'opacity': '0.3',
                'z-index': '100',
                'position': 'absolute'
            });
            this.append($preloader);
        },

        stop: function() {
            this.find('.preloader-overlay').remove();
        }
    };
    
    $.fn.preloader = function(action) {
        actions[action].apply(this);
        return this;
    };
}(jQuery));