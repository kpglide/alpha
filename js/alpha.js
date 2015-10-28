$(document).ready( function() {
	var counter = 0;

	var captions = ['Ant', 'Bee', 'Cat', 'Dog', 'Eel', 'Fox', 'Gecko', 'Horse', 'Iguana', 
					'Jaguar', 'Kangaroo', 'Lion', 'Moose', 'Newt', 'Octopus', 'Pig', 'Quail',
					'Rabbit', 'Seal', 'Turtle', 'Uakari', 'Vulture', 'Walrus', 'Xenops',
					'Yak', 'Zebra'  
					];
	
	getImageTag(captions[counter], function(images_array) {
    	var image = images_array[Math.floor(Math.random()*images_array.length)];
    	$('.item .container').append(image);
		imageStyles();
    });

    getLetter(captions, counter);

	$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
	
	$('.right.carousel-control').click(navRight);
	$('#right').click(navRight);

	$('.left.carousel-control').click(navLeft);
	$('#left').click(navLeft);

	function navLeft() {
		counter--;
		if (counter < 0) {
			counter = 25;
		}
	
		$('.item .container').empty();
	
		getImageTag(captions[counter], function(images_array) {
    		var image = images_array[Math.floor(Math.random()*images_array.length)];
    		$('.item .container').append(image);
			imageStyles();
		});	
	
		$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
		getLetter(captions, counter);
	}

	function navRight() {
		counter++;
		if (counter > 25) {
			counter = 0;
		}
		$('.item .container').empty();
		getImageTag(captions[counter], function(images_array) {
    		var image = images_array[Math.floor(Math.random()*images_array.length)];
    		$('.item .container').append(image);
			imageStyles();
		});	
		$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
		getLetter(captions, counter);
	}

});
	
var imageStyles = function() {
	$('.flickr-embed-frame').css({
		"display": "block",
		"margin": "0 auto"
	});
	
	$('img').css({
		"display": "block",
		"margin": "50px auto 0 auto"
	});
};

//accepts the desired text to search as a string, and then searches flickr
//API for images with that text.  Creates an <img> html tag using the url of 
//each image, and then selects one of the <img> tag at random and returns it.
var getImageTag = function(text, callback) {

	var k = '4d7473ee5d51627ddf5a43de869b35d9';

	var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&" +
            "api_key=" + k + "&text=" + text + "&license=2&" +
            "sort=relevance&per_page=5&safe_search=1&tag_mode=all";
      
	$.getJSON(url + "&format=json&jsoncallback=?", function(data) {
              var images = [];
              $.each(data.photos.photo, function(i, item) {
                    if ($(window).width() < 515) {
              			var extension = '_m.jpg';
              			var size = '>';
              		} 
              		else if ($(window).width() < 751) {
                    	var extension = '_n.jpg';
                    	var size = 'height=240>';
                    } 
                    else {
                    	var extension = '.jpg';
                    	var size = 'height=375>';
                    }
                    var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + 
                                   item.server + '/' + item.id + '_' + item.secret + extension;
                    var imageTag = '<img src="' + photoURL + '"' + size;
                    images.push(imageTag);
              });
              callback(images);
    });
};

//uses counter variable to determine which caption is being displayed.  Displays
//letter of alphabet associaed with that caption in a div.  Displays preceding letter
//in div to left and following letter in div to right
var getLetter = function(captions, counter) {
	if (counter > 0) {
		var left = '<h2>' + captions[counter-1][0] + '</h2>';
	} else {
		var left = '<h2>' + captions[25][0] + '</h2>';
	}
	if (counter < 25) {
		var right = '<h2>' + captions[counter+1][0] + '</h2>';
	} else {
		var right = '<h2>' + captions[0][0] + '</h2>';
	}

	var center = '<h2>' + captions[counter][0] + '</h2>';

	$('#left').html(left);
	$('#right').html(right);
	$('#center').html(center);
}
 