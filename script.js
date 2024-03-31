$(document).ready(function(){

    $('#menu').click(function(){

        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toogle');

    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toogle');
    });

    $('.portfolio .button-container .btn').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter =='all'){
            $('.portfolio .img-container .box').show('400')
        }
        else{
            $('.portfolio .img-container .box').not('.'+filter).hide('200');
            $('.portfolio .img-container .box').filter('.'+filter).show('400');
            
        }

    });

    // $('#theme-toggler').click(function(){
    //     $(this).toggleClass('fa-sun')


    // });

    $('#theme-toggler').click(function(){
        $(this).toggleClass('fa-sun fa-moon');
        $('body').toggleClass('dark-theme');
    });

    $('a[herf*="#"]').on('click',function(e){
        e.preventDefault();

        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,

        },
            500,'linear'
        );
    
    });    

});

$(document).ready(function(){
    const form = $('form');
    const fullname = $('#name');
    const email = $('#email');
    const subject = $('#subject');
    const message = $('#message');

    function sendEmail() {
        const body = `FullName: ${fullname.val()}<br> Email: ${email.val()} <br> subject: ${subject.val()} <br> message: ${message.val()}`;
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "devojuhrudhay190@gmail.com",
            Password: "F4FA83184403E5FD5A75E0CE68FD959D4BBD",
            To: 'devojuhrudhay190@gmail.com',
            From: 'devojuhrudhay190@gmail.com',
            Subject: subject.val(),
            Body: body
        }).then(
            message => {
                if (message === 'OK') {
                    Swal.fire({
                        title: "Success!",
                        text: "Message Sent Successfully!",
                        icon: "success"
                      });
                    
                } else {
                    throw new Error("Error: " + message);
                }
            }
        ).catch(error => {
            console.error("Error:", error);
            alert("An error occurred while sending the message. Please try again later.");
        });
    }

    form.on("submit", function(e) {
        e.preventDefault();
        sendEmail();
    });
});
