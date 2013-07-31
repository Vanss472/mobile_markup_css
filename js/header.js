/* global jQuery */

;(function($){

  "use strict";

  $(function(){
    $('.btn-navbar.dropdown-button').click(function(e){
      e.preventDefault()
      $('.navigation-collapse').collapse('toggle')
      $(this).toggleClass('open')
    })

    $('.btn-search').click(function(e){
      e.preventDefault()
      $('.search-collapse').collapse('toggle')
    })
  })


})(jQuery)