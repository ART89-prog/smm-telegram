
$(document).ready(function(){

// mob nav
    $('.open-nav').click(function(){
        $('.wrap-nav').addClass('open');
        $('.overlay').addClass('open');
    });
    $('.close-nav, .overlay').click(function(){
        $('.wrap-nav').removeClass('open');
        $('.overlay').removeClass('open');
    });





	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


      

});
