cssVars();

//mobile nav, if the attribute  of aria expanded is false on that element change it to true. , 

$ ('.nav-prompt').click(function() {    
    
    if ($('.nav-inner').attr('aria-expanded') == 'false') {
        
    $('.nav-inner').attr('aria-expanded', 'true');

    
    } else {
        
        $('.nav-inner').attr('aria-expanded', 'false');
        }

        
});