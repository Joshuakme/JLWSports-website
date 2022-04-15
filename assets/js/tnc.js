var phonetopbutton = document.getElementById("phone-top-Button")

    window.onscroll = function() {scrollAppear()};

    // Scroll Top Button
    function scrollAppear(){
        // Check condition event then trigger scrollAppear() Function (phone View)
        if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) && phoneView.matches) {
            phonetopbutton.style.display = "block";
        } 
        else{
            phonetopbutton.style.display = "none";
        }    
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //phoneView size set
    var phoneView = window.matchMedia("(max-width: 750px)")