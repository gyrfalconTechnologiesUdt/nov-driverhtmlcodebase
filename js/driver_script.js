$(document) .ready(function(){

$("#driver_signup").click(function(){
    window.location.href = "4_driver_login.html";
}); 

$("#loginClDashBd").click(function(){
    window.location.href = "3_customer_dashboadrd.html";	
});

// driver signup page strat
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

//driver history page start
$(".curreqdetails").show();
$(".pasreqdetails").hide();
 $("#pastReq").click(function(){
       $(".pasreqdetails").show();
       $(".curreqdetails").hide();
	   $(".top2").css("border-bottom","3px solid #000");
	   $(".top1").css("border-bottom","0px solid #000");
    }); 
 $("#cureentReq").click(function(){
       $(".curreqdetails").show();
       $(".pasreqdetails").hide();
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