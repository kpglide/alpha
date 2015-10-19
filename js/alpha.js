$(document).ready( function() {
	var counter = 0;
	var images = ['<a data-flickr-embed="true"  href="https://www.flickr.com/photos/markop/1036891509/in/photolist-8L5pXR-2zCkHP-7QyyFk-amb7f5-33dcfq-eeiohb-fMyGk4-eevkpn-a926nV-cSeJUL-bTXvJt-5RNEhL-pSNaGV-8UhEVz-dUGyic-4nC3Je-PFM2p-r6Fu82-8pfWzC-iYB9zX-eRhnD5-bHGLtX-eZR3Rs-3RTQEY-fw7xRW-9Dvc1e-62aW4h-pBNcLG-83GMgp-8t8HS3-ecipvC-rmRGkQ-eawd5X-6nTDi1-8t5GZ8-cwwLbh-fL8zRg-pti8wK-25ANGY-vTpCuc-nPqHBQ-axWkPm-QMBkx-p1PfJZ-qsBfVM-9vqSzw-dvsiGe-aUzrVc-84A7fp-oAjiFG" title="Velvet ant"><img src="https://farm2.staticflickr.com/1138/1036891509_8a7ea06d30.jpg" width="500" height="333" alt="Velvet ant"></a>',
	'<a data-flickr-embed="true"  href="https://www.flickr.com/photos/autanex/519742656/in/photolist-MVPoh-nFtjjy-ovHV4t-cuCggo-aZQswr-MAkA5-rydUL6-6a9HTP-anA9LU-GKT5r-Mg5AQ-8h6fwG-47umw-23Ahkq-keqNav-9AsaH8-wg7eUz-9pJEE6-qkbFpG-p1z5jV-geqSxG-s9W6CY-8Ws8PR-51dnrz-nACbEn-sqdBT-AmDfx-sMCHaX-einqJY-6G74xK-n3PAzS-cVm7Kh-pDwkoy-g3RcZX-edxF67-nrT2sg-Quava-tFqsrF-6FZecp-2uixP-fFYkMt-4qoK6P-53ofRb-fi6FJZ-fi6Ftx-qpwCcM-qFovUG-psrCVf-vqBG1G" title="European Honey Bee Touching Down"><img src="https://farm1.staticflickr.com/210/519742656_0b2323bc8e.jpg" width="500" height="333" alt="European Honey Bee Touching Down"></a>'
	]
	var captions = ['Ant', 'Bee'];
	
	$('.item .container').append(images[counter]);
	imageStyles();

	$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
	
	$('.right.carousel-control').click( function(event){
		counter++;
		$('.item .container').html('<div>' + images[counter] + '</div>');
		imageStyles();
		$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
	});

	$('.left.carousel-control').click( function(event){
		counter--;
		$('.item .container').html('<div>' + images[counter] + '</div>');
		imageStyles();
		$('.carousel-caption').html('<h1>' + captions[counter] + '</h1>');
	});
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

/*
// this function takes the question object returned by StackOverflow 
// and creates new result to be appended to DOM
var showQuestion = function(question) {
	
	// clone our result template code
	var result = $('.templates .question').clone();
	
	// Set the question properties in result
	var questionElem = result.find('.question-text a');
	questionElem.attr('href', question.link);
	questionElem.text(question.title);

	// set the date asked property in result
	var asked = result.find('.asked-date');
	var date = new Date(1000*question.creation_date);
	asked.text(date.toString());

	// set the #views for question property in result
	var viewed = result.find('.viewed');
	viewed.text(question.view_count);

	// set some properties related to asker
	var asker = result.find('.asker');
	asker.html('<p>Name: <a target="_blank" href=http://stackoverflow.com/users/' + question.owner.user_id + ' >' +
													question.owner.display_name +
												'</a>' +
							'</p>' +
 							'<p>Reputation: ' + question.owner.reputation + '</p>'
	);

	return result;
};
*/