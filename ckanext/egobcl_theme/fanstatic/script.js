$(document).ready(function(){
  var datosGob = {
    init : function(){
            this.slider = $('#myCarousel');
            this.bindEvents();
            return this;
          },
          initPlugins : function(){
            // no plugins
          },
          bindEvents:function(){
            var self = this;
            if(this.slider.length){
              this.slider.on('slid', function(e){
                self.cambiaSlide();
              });
              this.slider.on('click', 'li.marker', function(e){
                console.log('click')
                var item = $(this).data('item');
                self.slider.carousel(item);
                e.preventDefault();
              });
            }
          },
          cambiaSlide:function(){
            var self = this,
            activeSlide = this.slider.find('div.item.active');
            self.cambiaSlideMark(activeSlide.data('item'));
          },
          cambiaSlideMark : function(item){
            var self = this,
            markers = this.slider.find('li.marker');
            markers.filter('.active').removeClass('active');
            markers.filter('[data-item="'+item+'"]').addClass('active');
          }
        };

        $(function(){
            window.datosGob = datosGob.init();
        });
})