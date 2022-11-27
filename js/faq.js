$(document).ready(function(){
    $('.open1').click(function(){
        $(this).parent().next().stop().show()
    })
    $('.close1').click(function(){
        $(this).parent().next().stop().hide()
    })
    $('.open').click(function(){
        $('article p').stop().slidedown()
    })
    $('.close').click(function(){
        $('article p').stop().slideup()
    })
})