var end_point_url ="http://apis.data.go.kr/1262000/TravelBanService/getTravelBanInfo";
var t_url="http://apis.data.go.kr/1262000/TravelWarningService/getTravelWarningInfo";
var f_url="http://apis.data.go.kr/1262000/CountryBasicService/getCountryBasicInfo";
var s_url="http://apis.data.go.kr/1262000/CountrySafetyService/getCountrySafetyInfo";

var authentication_key="JAXx6ve4cJckfEURkQJyAAdjEuHx80zdcEp30mHF8vNoaQUVKAgeHzzz3yBue2fpI3zmErQbSimlCRihKFaP0Q%3D%3D";

window.onload=function(){
for(i=0;i<7;i++)
{
if(i==0)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('375');
	$.ajax({
		type	 : "GET",
		url		 :  end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name1).html(boxhtml1);
		$(continent1).html(boxhtml2);
		$(note1).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==1)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('131');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name2).html(boxhtml1);
		$(continent2).html(boxhtml2);
		$(note2).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==2)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('284');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name3).html(boxhtml1);
		$(continent3).html(boxhtml2);
		$(note3).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==3)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('294');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name4).html(boxhtml1);
		$(continent4).html(boxhtml2);
		$(note4).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==4)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('174');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name5).html(boxhtml1);
		$(continent5).html(boxhtml2);
		$(note5).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==5)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('120');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name6).html(boxhtml1);
		$(continent6).html(boxhtml2);
		$(note6).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
else if(i==6)
{
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + ('252');
	$.ajax({
		type	 : "GET",
		url		 : end_point_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);


		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("countryName").text();
		var boxhtml2=$xml.find("continent").text();
		var boxhtml3= $xml.find("banNote").text();
		$(name7).html(boxhtml1);
		$(continent7).html(boxhtml2);
		$(note7).html(boxhtml3);

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
}
}
// 여기는 처음화면에서 넘어가는 부분. get방식으로 전송.
function bb() {
test123=document.getElementById('contryname').value;
location.href="result1.html?" + test123;
};

function cc(){
result123=decodeURIComponent(window.location.search);
result123=result123.replace('?','');
myid=id();
var queryParams = '?' + ('ServiceKey=' + authentication_key );
queryParams += '&' +('id') + '=' + myid;
	$.ajax({
		type	 : "GET",
		url		 : f_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);

		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("basic").text();
		var boxhtml2= $xml.find("imgUrl").text();
		var boxhtml3= $xml.find("countryName").text();
		var boxhtml4= $xml.find("continent").text();
		var abc=document.getElementById("bb");
		abc.innerHTML=boxhtml1;
		var qq=document.getElementById("test");
		qq.src=boxhtml2;
		var yy=document.getElementById("nene");
		yy.innerHTML=boxhtml3;
		var ww=document.getElementById("con");
		ww.innerHTML=boxhtml4;


	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
//국가 안전 정보
function dd(){
myid=idid();
var queryParams = '?' + ('ServiceKey=' + authentication_key );
queryParams += '&' +('id') + '=' + myid;
	$.ajax({
		type	 : "GET",
		url		 : s_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);
	

		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("content").text();
		var boxhtml2= $xml.find("title").text();
		var boxhtml3= $xml.find("wrtDt").text();
		var abc=document.getElementById("dd");
		var def=document.getElementById("gg");
		var qwe=document.getElementById("pp");
		abc.innerHTML=boxhtml1;
		def.innerHTML=boxhtml2;
		qwe.innerHTML=boxhtml3;

	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
function ee(){
myid=id();
var queryParams = '?' + ('ServiceKey=' + authentication_key );
	queryParams += '&' +('id') + '=' + myid;
	$.ajax({
		type	 : "GET",
		url		 : t_url + queryParams,
		dataType : "xml",
		async 	 : true,
		success  : response_parse,
		error	 : error
	});

	function response_parse(data)
	{
		var $xml = $(xml);

		if(navigator.appName == "Microsoft Internet Explorer") {
			var xml = new ActiveXObject('Microsoft.XMLDOM');
			xml.async = false;
			xml.loadXML(data.responseText);

			$xml = $(xml);
			document.title = ($xml.find("telname").text() + " : " + $xml.find("title").text());
		} else {
			$xml = $(data.responseText);

			$("title").text($xml.find("telname").text() + " : " + $xml.find("title").text());
		}
		var boxhtml1= $xml.find("imgUrl2").text();
		var boxhtml2= $xml.find("control").text();
		var boxhtml3= $xml.find("attention").text();
		var boxhtml4= $xml.find("controlPartial").text();
		var boxhtml5= $xml.find("attentionPartial").text();
		var boxhtml6= $xml.find("controlNote").text();
		var boxhtml7= $xml.find("attentionNote").text();
		var boxhtml8= $xml.find("wrtDt").text();
		var abc=document.getElementById("vv");
		abc.src=boxhtml1;
		var dmd=document.getElementById("rol");
		dmd.innerHTML=boxhtml2;
		var ala=document.getElementById("att");
		ala.innerHTML=boxhtml3;
		var tmt=document.getElementById("rolpa");
		tmt.innerHTML=boxhtml4;
		var ala=document.getElementById("attpa");
		ala.innerHTML=boxhtml5;
		var ala=document.getElementById("attnote");
		ala.innerHTML=boxhtml6;
		var ala=document.getElementById("rolnote");
		ala.innerHTML=boxhtml7;
		var ala=document.getElementById("da");
		ala.innerHTML=boxhtml8;
	}
	
	function error (xml)
	{
		$("#box1").val("오류");
	}
}
//이거는 국가 기본정보
function re1(){
contryresult=decodeURIComponent(window.location.search);
location.href="result1.html" + contryresult;
myid=id();
}
//이거는 국가 안전 정보
function re2(){
contryresult=decodeURIComponent(window.location.search);
location.href="result2.html" + contryresult;
myid=idid();
}
//이거는 여행 경보 상태
function re3(){
contryresult=decodeURIComponent(window.location.search);
location.href="result3.html" + contryresult;
myid=id();
}
//이거는 id찾기
function id(){
result123=decodeURIComponent(window.location.search);
result123=result123.replace('?','');

if(result123=="가나")
return 390;

else if(result123=="마카오")
return 378;

else if(result123=="홍콩")
return 377;

else if(result123=="리비아")
return 375;

else if(result123=="콜롬비아")
return 213;

else if(result123=="시리아")
return 131;

else if(result123=="나이지리아")
return 18;

else if(result123=="소말리아")
return 120;

else if(result123=="이라크")
return 174;

else if(result123=="예멘")
return 294;

else if(result123=="아프가니스탄")
return 284;

else if(result123=="수단")
return 122;

else if(result123=="바레인")
return 288;

else if(result123=="태국")
return 260;

else if(result123=="조지아")
return 332;

else if(result123=="중국")
return 189;

else if(result123=="필리핀")
return 252;

else if(result123=="일본")
return 183;

else if(result123=="러시아")
return 39;

else if(result123=="아랍에미리트")
return 135;

else if(result123=="쿠바")
return 327;

else if(result123=="캄보디아")
return 259;

else if(result123=="칠레")
return 197;

else if(result123=="남아프리카공화국")
return 20;

else if(result123=="체코")
return 195;

else if(result123=="인도")
return 285;

else if(result123=="요르단")
return 165;

else if(result123=="미국")
return 69;

else if(result123=="캐나다")
return 204;

else if(result123=="스리랑카")
return 124;

else if(result123=="피지")
return 249;

else if(result123=="호주")
return 255;

else if(result123=="몰디브")
return 309;

else if(result123=="덴마크")
return 31;

else if(result123=="이탈리아")
return 179;

else if(result123=="페루")
return 243;

else if(result123=="파키스탄")
return 239;

else if(result123=="폴란드")
return 246;

else if(result123=="이란")
return 176;

else if(result123=="이스라엘")
return 177;

else if(result123=="코스타리카")
return 209;

else if(result123=="파라과이")
return 237;

else if(result123=="아이티")
return 324;

else if(result123=="인도네시아")
return 181;

else if(result123=="쿠웨이트")
return 216;

else if(result123=="우루과이")
return 167;

else if(result123=="우즈베키스탄")
return 168;

else if(result123=="독일")
return 34;

else if(result123=="슬로베니아")
return 130;

else if(result123=="오스트리아")
return 163;

else if(result123=="에티오피아")
return 156;

else if(result123=="세네갈")
return 114;

else if(result123=="레바논")
return 40;

else if(result123=="과테말라")
return 7;

else if(result123=="라오스")
return 36;

else if(result123=="우크라이나")
return 169;

else if(result123=="포르투갈")
return 244;

else if(result123=="룩셈부르크")
return 337;

else if(result123=="볼리비아")
return 92;

else if(result123=="대만")
return 372;

else if(result123=="루마니아")
return 43;

else if(result123=="스페인")
return 128;

else if(result123=="헝가리")
return 254;

else if(result123=="멕시코")
return 58;

else if(result123=="브라질")
return 104;

else if(result123=="그리스")
return 11;

else if(result123=="벨기에")
return 87;

else if(result123=="터키")
return 228;


else if(result123=="프랑스")
return 248;

else if(result123=="튀니지")
return 233;

else if(result123=="베트남")
return 86;

else if(result123=="사우디아라비아")
return 107;

else if(result123=="자메이카")
return 326;

else if(result123=="카자흐스탄")
return 201;

else if(result123=="카메룬")
return 199;

else if(result123=="네팔")
return 22;

else if(result123=="불가리아")
return 98;

else if(result123=="영국")
return 159;

else if(result123=="카타르")
return 202;

else if(result123=="아일랜드")
return 141;

else if(result123=="모나코")
return 341;

else if(result123=="스웨덴")
return 126;

else if(result123=="싱가포르")
return 134;

else if(result123=="네덜란드")
return 21;

else if(result123=="스위스")
return 127;

else if(result123=="온두라스")
return 164;

else if(result123=="핀란드")
return 251;

else if(result123=="노르웨이")
return 23;

else if(result123=="아이슬란드")
return 139;

else if(result123=="크로아티아")
return 218;

else if(result123=="몽골")
return 68;

else if(result123=="뉴질랜드")
return 25;

else if(result123=="아르헨티나")
return 138;

else if(result123=="에콰도르")
return 155;

else
return 1000;
}
//이거는 안전정보를 얻기위한 id....
function idid(){
result123=decodeURIComponent(window.location.search);
result123=result123.replace('?','');

if(result123=="가나")
return "ATC0000000004789";

else if(result123=="홍콩")
return "ATC0000000004617";

else if(result123=="리비아")
return "ATC0000000004727";

else if(result123=="나이지리아")
return "ATC0000000004881";

else if(result123=="이라크")
return "ATC0000000004875";

else if(result123=="예멘")
return "ATC0000000004136";

else if(result123=="아프가니스탄")
return "ATC0000000004720";

else if(result123=="수단")
return "ATC0000000004840";

else if(result123=="바레인")
return "ATC0000000004747";

else if(result123=="태국")
return "ATC0000000004645";

else if(result123=="중국")
return "ATC0000000004890";

else if(result123=="필리핀")
return "ATC0000000004889";

else if(result123=="일본")
return "ATC0000000004878";

else if(result123=="러시아")
return "ATC0000000004886";

else if(result123=="아랍에미리트")
return "ATC0000000004570";

else if(result123=="캄보디아")
return "ATC0000000004311";

else if(result123=="칠레")
return "ATC0000000004155";

else if(result123=="남아프리카공화국")
return "ATC0000000004888";

else if(result123=="체코")
return "ATC0000000004595";

else if(result123=="인도")
return "ATC0000000004482";

else if(result123=="요르단")
return "ATC0000000004639";

else if(result123=="미국")
return "ATC0000000004858";

else if(result123=="캐나다")
return "ATC0000000004813";

else if(result123=="스리랑카")
return "ATC0000000004874";

else if(result123=="피지")
return "ATC0000000004250";

else if(result123=="호주")
return "ATC0000000004832";

else if(result123=="몰디브")
return "ATC0000000004560";

else if(result123=="이탈리아")
return "ATC0000000004753";

else if(result123=="페루")
return "ATC0000000004759";

else if(result123=="파키스탄")
return "ATC0000000004804";

else if(result123=="폴란드")
return "ATC0000000004898";

else if(result123=="이란")
return "ATC0000000004666";

else if(result123=="이스라엘")
return "ATC0000000004792";

else if(result123=="코스타리카")
return "ATC0000000004876";

else if(result123=="파라과이")
return "ATC0000000003683";

else if(result123=="아이티")
return "ATC0000000004529";

else if(result123=="인도네시아")
return "ATC0000000004905";

else if(result123=="쿠웨이트")
return "ATC0000000004887";

else if(result123=="우루과이")
return "ATC0000000004061";

else if(result123=="우즈베키스탄")
return "ATC0000000004622";

else if(result123=="독일")
return "ATC0000000004903";

else if(result123=="슬로베니아")
return "ATC0000000004104";

else if(result123=="오스트리아")
return "ATC0000000004849";

else if(result123=="에티오피아")
return "ATC0000000004423";

else if(result123=="세네갈")
return "ATC0000000004837";

else if(result123=="레바논")
return "ATC0000000004904";

else if(result123=="과테말라")
return "ATC0000000004682";

else if(result123=="라오스")
return "ATC0000000004857";

else if(result123=="우크라이나")
return "ATC0000000004828";

else if(result123=="포르투갈")
return "ATC0000000004737";

else if(result123=="볼리비아")
return "ATC0000000004695";

else if(result123=="대만")
return "ATC0000000004880";

else if(result123=="루마니아")
return "ATC0000000004332";

else if(result123=="스페인")
return "ATC0000000004795";

else if(result123=="헝가리")
return "ATC0000000004665";

else if(result123=="멕시코")
return "ATC0000000004655";

else if(result123=="브라질")
return "ATC0000000004751";

else if(result123=="그리스")
return "ATC0000000004796";

else if(result123=="벨기에")
return "ATC0000000004717";

else if(result123=="터키")
return "ATC0000000004909";

else if(result123=="프랑스")
return "ATC0000000004892";

else if(result123=="튀니지")
return "ATC0000000004652";

else if(result123=="베트남")
return "ATC0000000004844";

else if(result123=="사우디아라비아")
return "ATC0000000004850";

else if(result123=="카자흐스탄")
return "ATC0000000004906";

else if(result123=="카메룬")
return "ATC0000000004544";

else if(result123=="네팔")
return "ATC0000000004308";

else if(result123=="영국")
return "ATC0000000004754";

else if(result123=="카타르")
return "ATC0000000004616";

else if(result123=="스웨덴")
return "ATC0000000004811";

else if(result123=="싱가포르")
return "ATC0000000004860";

else if(result123=="네덜란드")
return "ATC0000000004735";

else if(result123=="스위스")
return "ATC0000000004836";

else if(result123=="온두라스")
return "ATC0000000004377";

else if(result123=="핀란드")
return "ATC0000000004218";

else if(result123=="크로아티아")
return "ATC0000000004220";

else if(result123=="몽골")
return "ATC0000000004256";

else if(result123=="뉴질랜드")
return "ATC0000000004723";

else if(result123=="아르헨티나")
return "ATC0000000004605";

else if(result123=="에콰도르")
return "ATC0000000004869";

else
return 1000;

}

