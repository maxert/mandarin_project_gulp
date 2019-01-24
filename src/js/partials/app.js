$(function() {

	if ($(window).width() < 1280) {
   		$('.m_header_top_gr').appendTo('.grAdres_mob');
		$('.m_header_top_adress').appendTo('.grAdres_mob');
		$('.m_header_center_logo').appendTo('.mob_log_text');
		$('.m_header_center_logotext').appendTo('.mob_log_text');
		$('.m_header_center_tel').appendTo('.mob_tel_search');
		$('.m_header_center_search').appendTo('.mob_tel_search');
	}
});