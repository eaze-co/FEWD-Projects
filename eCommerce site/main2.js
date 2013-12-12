// document.ready shorthand
$(function(){

        // override all placeholders 
        $('#imgContainer img').each(function( index ){
            $this = $(this);

            var imgLink = products.accessories.bandanas[index][0]
            $this.attr('src', imgLink);
        })

        // listen for clicks on images
        $('#imgContainer').on('click','img', function(){
            $this = $(this);

        // decide which image is next                
            var nextImage = selectNextImage($this, selectImages($this));

        // change current image to next image
            $this.attr('src', nextImage);
        })

    // ---> what does this function do?
        function selectImages(current){

    // ---> which square is being clicked? ( idk?! )
            return $('#imgContainer img').index(current);
        }

    // ---> what does this function do?
        function selectNextImage(current, images){
            var images = products.accessories.bandanas[images];
            var imgLink = current.attr('src');
            var currentImage = images.indexOf(imgLink)
            // % = looparound to beginning (kinda)
            nextImage = (currentImage + 1) % images.length;
            return images[nextImage];
        }

}) 