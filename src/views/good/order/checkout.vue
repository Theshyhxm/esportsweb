<!DOCTYPE html>
<html>
<head>
	<base href="${pageContext.request.scheme}://${pageContext.request.serverName}:${pageContext.request.serverPort}${pageContext.request.contextPath}/">
	<meta charset="UTF-8">
<title>结算页面</title>
<link type="text/css" rel="stylesheet" href="static/css/style.css" >
<style type="text/css">
	h1 {
		text-align: center;
		margin-top: 200px;
	}
</style>
</head>
<body>
	
	<div id="header">
			<img class="logo_img" alt="" src="static/img/logo.gif"  width="230px" height="80px">
			<span class="wel_word">结算</span>
			<div>
				<span>欢迎<span class="um_span">${sessionScope.user.username}</span>光临网上书城</span>
				<a href="OrderServlet?action=listOrder">我的订单</a>
				<a href="userServlet?action=logout">注销</a>
				<a href="index.jsp">返回</a>
			</div>
	</div>
	
	<div id="main">
		
		<h1>您的订单已结算，订单号为${sessionScope.orderID}</h1>
	</div>

	<%@include file="/pages/common/bottom.jsp"%>
</body>
</html>