
    $(document).ready(function() 
    {
        $("#icon_click").click(function() 
        {
       		$(this).toggleClass("fas fa-eye fas fa-eye-slash");
         	var type = $(this).hasClass("fas fa-eye-slash") ? "text" : "password";
            $("#pass").attr("type", type);
        });
    });
