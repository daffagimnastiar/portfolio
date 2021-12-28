alert('selamat datang di my website')
alert('ini adalah identitas saya' 
	+'\n Nama : DAFFA GIMNASTIAR KURNIA IRAWAN' 
	+'\n NRP :    21 3040 135' 
	+'\n Jurusan : T.informatika' 
	+'\n Universitas Pasundan Bandung');
confirm('tekan ok untuk masuk ke halaman website')


// ini bagian action saat scroll link
	$('.ps').on('click', function(e){
// ini untuk mengambil isis href
	var href = $(this).attr('href');
	var elementhref = $(href);	
// ini untuk animasi saat page scroll
	$('html,body').animate({
		scrollTop: elementhref.offset().top
	}, 1500, 'easeOutBounce');
	e.preventDefault();
});

// ini untuk efek parallax
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();

		$('.jumbotron img').css({
			'transform' : 'translate(0px, '+ scroll/3 +'%)'
		});

		$('.jumbotron h1').css({
			'transform' : 'translate(0px, '+ scroll/3 +'%)'
		});

		$('.jumbotron p').css({
			'transform' : 'translate(0px, '+ scroll/1.2 +'%)'
		});

		

// ini untuk efek landing saat discroll
if( scroll > $('.about').offset().top  - 50 ) {
			$('.about .row').addClass('tampilkan');	
		}
if( scroll > $('.portfolio').offset().top  - 150 ) {
			$('.portfolio .row').addClass('tampilkan');
		}
if( scroll > $('.contact').offset().top  - 200 ) {
			$('.contact .row').addClass('tampilkan');
		}
});
