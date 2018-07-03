$(document) .ready(function(){

$("#driver_signup").click(function(){
    window.location.href = "4_driver_login.html";
}); 

$("#driver_signup").click(function(){
    window.location.href = "1_customer_login.html";	
});
$("#fblnk").click(function(){
    window.location.href = "http://www.facebook.com/";	
});
$("#googlelnk").click(function(){
    window.location.href = "https://plus.google.com/";	
});
$("#twitterlnk").click(function(){
    window.location.href = "http://www.twitter.com/";	
});
$("#registerLink").click(function(){
    window.location.href = "1_driver_signup.html";
}); 
$("#loginClDashBd").click(function(){
    window.location.href = "2_driver_currenthistorypage.html";
}); 

// driver signup page strat
$("#userNameInpt input").focus(function(e){	
$("#usrNmLbl").addClass("usrNmLbl");
});

$("#userNameInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#usrNmLbl").removeClass("usrNmLbl");
	}
});
$("#mailIdInput input").focus(function(e){	
$("#emailLbl").addClass("emailLbl");
});

$("#mailIdInput input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#emailLbl").removeClass("emailLbl");
	}
});

$("#mobileNoInpt input").focus(function(e){
$("#mblNoLbl").addClass("mblNoLbl");
});

$("#mobileNoInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#mblNoLbl").removeClass("mblNoLbl");
	}
});


//driver signup page End
//Sign In Page Start
$("#userNameInpt input").focus(function(e){	
$("#usrNmLbl").addClass("usrNmLbl");
});

$("#userNameInpt input").blur(function(e){	
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#usrNmLbl").removeClass("usrNmLbl");
		
	}
});

$("#passWrdInpt input").focus(function(e){	
$("#paswrdLbl").addClass("paswrdLbl");
});

$("#passWrdInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#paswrdLbl").removeClass("paswrdLbl");
	}
});
//Sign In Page End 

//driver history page start
$(".currentrequest").show();
$(".pastrequest").hide();
 $("#pastReq").click(function(){
       $(".pastrequest").show();
       $(".currentrequest").hide();
	   $(".top2").css("border-bottom","3px solid #000");
	   $(".top1").css("border-bottom","0px solid #000");
    }); 
 $("#cureentReq").click(function(){
       $(".currentrequest").show();
       $(".pastrequest").hide();
	   $(".top1").css("border-bottom","3px solid #000");
	   $(".top2").css("border-bottom","0px solid #000");
    });
$(".overlay").hide();
$(".accept").click(function () {
    $(".overlay").show();
});
$("#CloseBut").click(function () {
    $(".overlay").hide();
});
$("#confirmId").click(function () {
    $(".overlay").hide();
});	
$( "#declineId1" ).click(function() {
  $( "#reqId1" ).css("opacity", "0.5");
});
$( "#declineId2" ).click(function() {
  $( "#reqId2" ).css("opacity", "0.5");
});
//driver history page End

//poppup message start
$("#msgBox").hide();
$(".accept").click(function(){
	$("#msgBox").show();
});
$("#CloseBut").click(function(){
	$("#msgBox").hide();
});
$("#confirmId").click(function () {
    $("#msgBox").hide();
});	
//poppup message end

//driver settings page start
$("#addressId input").focus(function(e){	
$("#addressLbl").addClass("addressLbl");
});
$("#addressId input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#addressLbl").removeClass("addressLbl");
	}
});

//driver settings page End

});