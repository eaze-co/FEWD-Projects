
// ---> Navigation Bar .....................................................

	// ---> Mens ...........................................................

		$(".nav.dept.mens").hover(function(){

			$(".nav.dept").removeClass("active");
			$(this).addClass("active");

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");

			$(".nav.menu.mens")       .show();
			$(".nav.menu.womens")     .hide();
			$(".nav.menu.accessories").hide();
		});

	// ---> Womens ........................................................

		$(".nav.dept.womens").hover(function(){

			$(".nav.dept").removeClass("active");
			$(this).addClass("active");

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");

			$(".nav.menu.mens")       .hide();
			$(".nav.menu.womens")     .show();
			$(".nav.menu.accessories").hide();
		});

	// ---> Accessories ....................................................
		
		$(".nav.dept.accessories").hover(function(){

			$(".nav.dept").removeClass("active");
			$(this).addClass("active");

			$(".nav.dept").removeClass("hidden");
			$(this).addClass("hidden");
			
			$(".nav.menu.mens")       .hide();
			$(".nav.menu.womens")     .hide();
			$(".nav.menu.accessories").show();	
		});

	// ---> To View Pics Click Menu Category ...................................

		$("#navContainer").on("click",".category",function(){
			var dept = $(".nav.dept.active").text().trim();
			var cat = $(this).data("category");

			$("#imgContainer img").each(function( index ){
            	$this = $(this);

            	var imgLink = products[dept][cat][index][0];
            	$this.attr("src", imgLink);
        	});

        	$("#imgContainer").slideDown();
        	// $(".nav.dept.mens").removeClass("hidden");   	
		});

// ---> Pic Changer ........................................................	

// document.ready shorthand
$(function(){

	// listen for clicks on images
        $('#imgContainer').on('click','img', function(){
            $this = $(this);

        // decide which image is next                
            var nextImage = selectNextImage($this, selectImages($this));

        // change current image to next image
            $this.attr('src', nextImage);
        })

        function selectImages(current){
            return $('#imgContainer img').index(current);
        }

    // ---> Advance to Next Image
        function selectNextImage(current, images){
        	var dept = $(".nav.dept.active").text().trim();
			var cat = $(this).data("category");
			// var index = ???
            var images = products[dept][cat][index][0];
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
		]
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
			"images/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L1.jpg",
			"images/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L2.jpg",
			"images/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L3.jpg",
			"images/jackets/jacket2/MightyMacRaceClothAROSportJacketNavy_L4.jpg"
			],[
			"images/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L1.jpg",
			"images/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L2.jpg",
			"images/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L3.jpg",
			"images/jackets/jacket3/MightyMacQuiltedARORaceJacketNavyYellow_L4.jpg"
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
		]
	}
};		
				