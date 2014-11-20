
/**
		Calculates the combination of the data
	*/
	function combinationCalc(n, r){
		var numerator = math.factorial(n);
		var denominator = math.factorial(r) * math.factorial(n - r);
		return numerator/denominator;
	}

	/**
		Calculates the permutation of the data
	*/
	function permutationCalc(n, r){
		var numerator = math.factorial(n);
		var denominator = math.factorial(n - r);
		return numerator/denominator;
	}

	function clearEditPane(){
		$('.calculation-input').val('');
		$('.calc-result').text('');
	}

	/**
		Initial javascript bindings on extension load
	*/
	$(function(){

		//Links qtip to the entire extention
		$(document).tooltip();

		/**
			Loads the menu view and hides all other views on menu click
		*/
		document.getElementById('menu-button').addEventListener("click", function(){
			//Hide all calculator views
			$('#combination-permutation-view').hide();
			$('#edges-degrees-view').hide();
			$('#tree-data-view').hide();
			$('#resources-view').hide();

			//Show menu view and set title text
			$('#main-menu-options').show();
			$('#calc-title').text('Selection Menu');

			//Clear all edit panes
			clearEditPane();
		});

		/**
			Loads the combination/permutation view on selection click
		*/
		document.getElementById('combination-permutation-button').addEventListener("click", function(){
			//Hide menu view
			$('#main-menu-options').hide();

			//Show new view and set text
			$('#permutationView').hide();
			$('#combination-permutation-view').show();
			$('#combinationView').show();
			$('#calc-title').text('Combinations/Permutations');

			//Set button click view
			$('#permutation-view-button').css({"background-color": "white"});
			$('#permutation-view-button').css({"color": "black"});
			$('#combination-view-button').css({"background-color": "#0066FF"});

		});

		/**
			Click for the combinations button in com/perm view
		*/
		document.getElementById('combination-view-button').addEventListener("click", function(){
			//Show new view and set text
			$('#permutationView').hide();
			$('#combinationView').show();

			//Set button click view
			$('#permutation-view-button').css({"background-color": "white"});
			$('#permutation-view-button').css({"color": "black"});
			$('#combination-view-button').css({"background-color": "#0066FF"});
			$('#combination-view-button').css({"color": "white"});
		});

		/**
			Click for the permutation button in com/perm view
		*/
		document.getElementById('permutation-view-button').addEventListener("click", function(){
			//Show new view and set text
			$('#combinationView').hide();
			$('#permutationView').show();

			//Set button click view
			$('#combination-view-button').css({"background-color": "white"});
			$('#combination-view-button').css({"color": "black"});
			$('#permutation-view-button').css({"background-color": "#0066FF"});
			$('#permutation-view-button').css({"color": "white"});
		});

		/**
			Click for the combination calculation in com/perm view
		*/
		document.getElementById('combination-calculate-button').addEventListener("click", function(){
			var n = parseInt($('#combination-n').val());
			var r = parseInt($('#combination-r').val());

			//Check to make sure input is valid here
			if(n < r){
				$('#combination-calc-result').text('n must be >= r');
				return false;
			}

			if(n < 1){
				$('#combination-calc-result').text('n must be >= 1');
				return false;
			}

			var result = combinationCalc(n, r);
			$('#combination-calc-result').text('nCr = ' + result.toString());
		});

		/**
			Click for the permutation calculation in com/perm view
		*/
		document.getElementById('permutation-calculate-button').addEventListener("click", function(){
			var n = parseInt($('#permutation-n').val());
			var r = parseInt($('#permutation-r').val());

			//Check to make sure input is valid here
			if(n < r){
				$('#permutation-calc-result').text('n must be >= r');
				return false;
			}

			if(n < 1){
				$('#permutation-calc-result').text('n must be >= 1');
				return false;
			}

			var result = permutationCalc(n, r);
			$('#permutation-calc-result').text('nPr = ' + result.toString());
		});

		/**
			Loads the edges/data view on selection click
		*/
		document.getElementById('edges-degrees-button').addEventListener("click", function(){
			//Hide menu view
			$('#main-menu-options').hide();

			//Show new view and set text
			$('#edges-degrees-view').show();
			$('#calc-title').text('Edges/Regions/Vertices');
		});


		/**
			Loads the tree/data view on selection click
		*/
		document.getElementById('tree-data-button').addEventListener("click", function(){
			//Hide menu view
			$('#main-menu-options').hide();

			//Show new view and set text
			$('#tree-data-view').show();
			$('#calc-title').text('Tree Calculations');
		});


		$('.clear-input-button').on("click", function(e){
			$('.calculation-input').val('');
			$('.calc-result').text('');
		});


		/**
			Loads the additional resources view
		*/
		document.getElementById('resources-button').addEventListener("click", function(){
			//Hide menu view
			$('#main-menu-options').hide();

			//Show new view and set text
			$('#resources-view').show();
			$('#calc-title').text('Additional Resources');
		});


		$('.clear-input-button').on("click", function(e){
			$('.calculation-input').val('');
			$('.calc-result').text('');
		});

		//-------------------------------CALCULATION FUNCTIONS--------------------------------------

		/**
			Calculates the edges/vertices/degrees
		*/
		document.getElementById('erv-calculate-button').addEventListener("click", function(){
			var edges = $('#edges-input').val();
			var regions = $('#regions-input').val();
			var vertices = $('#vertices-input').val();

			//Calculate the missing edges value
			if(edges == "" && regions != "" && vertices != ""){
				var result = parseInt(regions) + parseInt(vertices) - 2;
				$('#erv-calc-result').text('Edges: ' + result);
				$('#edges-input').val(result);
				return true;
			}
			//Calculate the missing degrees value
			else if(edges != "" && regions == "" && vertices != ""){
				var result = parseInt(edges) - parseInt(vertices) + 2;
				$('#erv-calc-result').text('Regions: ' + result);
				$('#regions-input').val(result);
				return true;
			}
			//Calculate the missing vertices value
			else if(edges != "" && regions != "" && vertices == ""){
				var result = (parseInt(edges) + 2) - parseInt(regions);
				$('#erv-calc-result').text('Vertices: ' + result);
				$('#vertices-input').val(result);
				return true;
			}

			//Else if nothing else is hit
			$('#erv-calc-result').text('2 of the 3 inputs must be entered');
			return false;
		});


		/**
			Forces all text put in calculation-input fields to be numbers
		*/
		$( ".calculation-input" ).keypress(function(e) {
			//Hex KeyCodes for numbers
			var numbers = [48, 49, 50, 51, 52, 53, 54 ,55, 56, 57];

			for(var i = 0; i < 10; i++){
				if(e.keyCode == numbers[i]) {
					return true;
				}
			}
			return false;
		});


	});

	