/* 

$(document).ready(function(){
    var setdark = function () {
        $('#head').append('<link rel="stylesheet" href="styles/dark-styles.min.css" type="text/css" />');
    },
    setlight = function () {
        $('link[rel=stylesheet][href="styles/dark-styles.min.css" type="text/css"]').remove();
    };
    
    $("#light").click(function () {
        localStorage.setItem('theme', 'light');
        setlight();
    });
    
    $("#dark").click(function () {
        localStorage.setItem('theme', 'dark');
        setdark();
    });
    
    if (localStorage.getItem('theme') == 'light') {
        setlight(); 
        document.getElementById('checkbox').checked = false;
    } 
    
    else if (localStorage.getItem('theme') == 'dark') {
        setdark();
        document.getElementById('checkbox').checked = true;
     }
    })

    
 */
