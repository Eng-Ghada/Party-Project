//Header Section--Sidebar

$("#openBtn").click(function()
{
    $("header .content").animate({left:'15%'},300);
    $("aside").animate({left:'0%',zindex:'10',transition:'left,3s'},300);
    $("header button").animate({left:'20%'},300);
});


$("#closeBtn").click(function()
{
   $("aside").animate({left:'-20%'},300);
   $("header .content").animate({left:'0%'},300);
   $("header button").animate({left:'0%'},300);
});


$( 'aside a' ).on( 'click', function(e){
var href = $(this).attr( 'href' ); // Define variable of the clicked »a« element (»this«) and get its href value.
    	
 $( 'html, body' ).animate(
    {
          scrollTop: $( href ).offset().top
    }, 2000);   // Run a scroll animation to the position of the element which has the same id like the href value.
    e.preventDefault(); // Prevent the browser from showing the attribute name of the clicked link in the address bar
  
  });

/////////////////////////////////////////////////////////////////////////////////
//Singers Section

$("#singer1").click(function(){
    
    $("#para1").slideToggle(800);
    $("#para2,#para3,#para4").slideUp(800);

 });

$("#singer2").click(function(){
    $("#para2").slideToggle(800);
    $("#para1,#para3,#para4").slideUp(800);
});

$("#singer3").click(function(){
   
    $("#para2,#para4,#para1").slideUp(800);
    $("#para3").slideToggle(800);
 });
 
$("#singer4").click(function(){
    $("#para4").slideToggle(800);
    $("#para2,#para3,#para1").slideUp(800);
 });

//////////////////////////////////////////////////////////////////////////////////
//Counter section

function makeTimer() 
{
    var endTime = new Date("30 May 2021 14:31:00 GMT+02:00");			
        endTime = (Date.parse(endTime) / 1000);//returns the number of seconds between May 30, 2021 and midnight of January 1, 1970. 
                                            //we can also use getTime();

        var now = new Date();
        now = (Date.parse(now) / 1000);//returns the number of seconds between (today date) and midnight of January 1, 1970. 

        var timeLeft = endTime - now;//returns the number of seconds between (today date) and (event date January 30, 2021)

        var days = Math.floor(timeLeft / 86400); //60sec*60min*24hour
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        $("#days").html(-days + "<span>Days</span>");
        $("#hours").html(-hours + "<span>Hours</span>");
        $("#min").html(-minutes + "<span>Minutes</span>");
        $("#sec").html(-seconds + "<span>Seconds</span>");	
        
    if(timeLeft<=0)
    {
        $("#days").html("0"+ "<span>Days</span>");
        $("#hours").html("0" + "<span>Hours</span>");
        $("#min").html("0" + "<span>Minutes</span>");
        $("#sec").html("0" + "<span>Seconds</span>");
    }
}

setInterval(function() { makeTimer(); }, 1000);

    

////////////////////////////////////////////////////////////////////////////////////
//Contact Info Section

var maxLength = 100;
$('textarea').keyup(function() 
{   
    var length = $(this).val().length;//Check the value and get the length of it, store it in a variable
    var length = maxLength-length;
    $('#chars').text(length);
});