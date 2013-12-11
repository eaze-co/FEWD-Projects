
// ---> Navigation Bar .....................................................

	// ---> Mens ...........................................................

		$(".nav.dept.mens").click(function(){
			$(this).addClass("active");
			$(".nav.menu.mens").slideToggle(500);
		});

	// ---> Womens ........................................................

		$(".nav.dept.womens").click(function(){
			$(this).addClass("active");
			$(".nav.menu.womens").slideToggle(500);
		});

	// ---> Accessories ....................................................
		
		$(".nav.dept.accessories").click(function(){
			$(this).addClass("active");
			$(".nav.menu.accessories").slideToggle(500);
		});

	// ---> To View Pics Click Menu Category ...................................

		$(".category").click(function(){
			// $(this).addClass("active");
			$("#imgContainer").slideToggle(500);
		});

// ---> Pic Changer ........................................................	

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
// ---> End ...


// ---> imgLink(s) ........................................................


var products = 

{
// ---> accessories .......................................................
	accessories : 
	{
		bandanas : 
		[
			[ 
			"images/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L1.jpg",
			"images/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L2.jpg",
			"images/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L3.jpg",
			"images/bandanas/bandana1/JSHomesteadIndigoDyedBandana_L4.jpg"
			],[
			"images/bandanas/bandana2/StanleySonsPatternBandanaBlack_L1.jpg",
			"images/bandanas/bandana2/StanleySonsPatternBandanaBlack_L2.jpg",
			"images/bandanas/bandana2/StanleySonsPatternBandanaBlack_L3.jpg",
			"images/bandanas/bandana2/StanleySonsPatternBandanaBlack_L4.jpg"
			],[
			"images/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L1.jpg",
			"images/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L2.jpg",
			"images/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L3.jpg",
			"images/bandanas/bandana3/JSHomesteadBlackSulfurDyedBandana_L4.jpg"
			],[
			"images/bandanas/bandana4/StanleySonsBandanaOlive_L1.jpg",
			"images/bandanas/bandana4/StanleySonsBandanaOlive_L2.jpg",
			"images/bandanas/bandana4/StanleySonsBandanaOlive_L3.jpg",
			"images/bandanas/bandana4/StanleySonsBandanaOlive_L4.jpg"
			],[
			"images/bandanas/bandana5/StanleySonsBandanaNavy_L1.jpg",
			"images/bandanas/bandana5/StanleySonsBandanaNavy_L2.jpg",
			"images/bandanas/bandana5/StanleySonsBandanaNavy_L3.jpg",
			"images/bandanas/bandana5/StanleySonsBandanaNavy_L4.jpg"
			],[
			"images/bandanas/bandana6/StanleySonsBandanaCinnamon_L1.jpg",
			"images/bandanas/bandana6/StanleySonsBandanaCinnamon_L2.jpg",
			"images/bandanas/bandana6/StanleySonsBandanaCinnamon_L3.jpg",
			"images/bandanas/bandana6/StanleySonsBandanaCinnamon_L4.jpg"
			],[
			"images/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L1.jpg",
			"images/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L2.jpg",
			"images/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L3.jpg",
			"images/bandanas/bandana7/MadeontheMoonGizaBandanaBlack_L4.jpg"
			],[
			"images/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L1.jpg",
			"images/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L2.jpg",
			"images/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L3.jpg",
			"images/bandanas/bandana8/MadeontheMoonGizaBandanaRed_L4.jpg"
			],[
			"images/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L1.jpg",
			"images/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L2.jpg",
			"images/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L3.jpg",
			"images/bandanas/bandana9/MadeontheMoonGizaBandanaNavy_L4.jpg"
			]
		],

	// add another accessories category here !!!


	},  


// ---> mens ...........................................................
	mens : 
	{
		jackets :
		[
			[ 
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L1.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L2.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L3.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyGreen_L4.jpg"
			],[
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyYellow_L1.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyYellow_L2.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyYellow_L3.jpg",
			"images/jackets/jacket1/MightyMacQuiltedARORaceJacketNavyYellow_L4.jpg"
			],[
			"images/jackets/jacket3/MightyMacRaceClothAROSportJacketNavy_L1.jpg",
			"images/jackets/jacket3/MightyMacRaceClothAROSportJacketNavy_L2.jpg",
			"images/jackets/jacket3/MightyMacRaceClothAROSportJacketNavy_L3.jpg",
			"images/jackets/jacket3/MightyMacRaceClothAROSportJacketNavy_L4.jpg"
			],[
			"images/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L1.jpg",
			"images/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L2.jpg",
			"images/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L3.jpg",
			"images/jackets/jacket4/ArpenteurVillefrancheJacketBlue_L4.jpg"
			],[
			"images/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L1.jpg",
			"images/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L2.jpg",
			"images/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L3.jpg",
			"images/jackets/jacket5/ArpenteurMayenneJacketCotedeCheval_L4.jpg"
			],[
			"images/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L1.jpg",
			"images/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L2.jpg",
			"images/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L3.jpg",
			"images/jackets/jacket6/ArpenteurVillefrancheJacketGreycroise2_L4.jpg"
			],[
			"images/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L1.jpg",
			"images/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L2.jpg",
			"images/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L3.jpg",
			"images/jackets/jacket7/BlueBlueBassenDyedIndgioBlazer_L4.jpg"
			],[
			"images/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L1.jpg",
			"images/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L2.jpg",
			"images/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L3.jpg",
			"images/jackets/jacket8/BlueBlueJapanDyedIndigoKnitBlazerPolkaDot_L4.jpg"
			],[
			"images/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L1.jpg",
			"images/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L2.jpg",
			"images/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L3.jpg",
			"images/jackets/jacket9/GitmanVintageSportJacketZebraStripe_L4.jpg"
			]
		],
	},  
};		
				