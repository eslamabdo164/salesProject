

// change Navbar when scroll

 $(window).scroll(function(){
    let scrolTop = $(window).scrollTop();
    // TODO : GET the ScrolTop value and change Style Based On It
    if(scrolTop > 150 ){
        document.getElementById('mn_header').classList.add('moving');
    } else {
        document.getElementById('mn_header').classList.remove('moving')
    }

})
