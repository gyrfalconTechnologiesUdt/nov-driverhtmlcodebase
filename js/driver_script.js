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
$("#forgotLnk").click(function(){
    window.location.href = "4_customer_forgotpassword.html";	
});
$("#registerLink").click(function(){
    window.location.href = "1_driver_signup.html";
}); 
$("#loginClDashBd").click(function(){
    window.location.href = "2_driver_currenthistorypage.html";
}); 
$("#confirmId").click(function(){
    window.location.href = "4_driver_locationpage.html";
}); 
$("#homeId").click(function(){
    window.location.href = "4_driver_locationpage.html";
}); 
$("#tripId").click(function(){
    window.location.href = "2_driver_currenthistorypage.html";
}); 
$("#settingsId").click(function(){
    window.location.href = "3_driver_settings.html";
}); 
$("#logoutId").click(function(){
    window.location.href = "1_customer_login.html";	
});
$("#arrowId").click(function(){
    window.location.href = "4_driver_locationpage.html";	
});
$("#backarrowId").click(function(){
    window.location.href = "4_driver_locationpage.html";	
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

//customer resetpaswrd page Start 
$("#newPswrdInpt input").focus(function(e){	
$("#newPaswrdLbl").addClass("newPaswrdLbl");
});

$("#newPswrdInpt input").blur(function(e){
	let inputVal = e.currentTarget.value;
	if(inputVal === ''){
		$("#newPaswrdLbl").removeClass("newPaswrdLbl");
	}
});
$("#submitLnk").click(function(){
    alert("submitted");
});
//customer resetpaswrd page End 

//driver Dashboard page start
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
//driver Dashboard page End

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

//location page start
$("#map").hide();
$("#close").click(function() {
	$("#popUp").hide();	
    $("#map").show();	
});
$(window).on('load', function(){ 
	$("#popUp").show();
});	
//location page End


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
$('#editId1').click(function() {
     $('#nameId').focus();
});
$('#editId2').click(function() {
     $('#mblId').focus();
});
$('#editId3').click(function() {
     $('#addId').focus();
});

//driver settings page End

});