<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<%@ taglib prefix="janrain" uri="http://janrain4j.googlecode.com/tags" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--

	Spring Bloom by christopher robinson
	http://www.edg3.co.uk/
	hope you enjoy it and find it usefull :)

-->
<html xmlns="http://www.w3.org/1999/xhtml">

<head profile="http://gmpg.org/xfn/11">
	<title>
		<c:choose>
			<c:when test="${not empty page}">${page.title} | </c:when>
			<c:when test="${not empty article}">${article.title} | </c:when>
		</c:choose>
	 	<idi:configTag key="site-title"/>
	</title>	
	<link rel="shortcut icon" href="image/favicon.ico" />
	<link rel="stylesheet" href="/static/styles/style.css" type="text/css" media="screen" />
	<meta http-equiv="content-type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="en-gb" />
	<meta http-equiv="imagetoolbar" content="false" />
	<jsp:include page="includes/meta-tags.jsp"/>
</head>

<body>
	<div id="header">
		<h1><idi:configTag key="page-title"/></h1>
		<jsp:include page="includes/banner.jsp"/>
		<p><idi:configTag key="page-subtitle"/></p>
		<jsp:include page="includes/navigation1.jsp"/>
	</div>
	<div id="content">
		<div id="sidebar">
			<jsp:include page="includes/latestnews.jsp"/>
			<jsp:include page="includes/subpages.jsp"/>
		</div>
		<div id="main">
			<p>An unexpected error occurred, our apologises.</p>
		</div>
	</div>
	<div id="footer">
		<jsp:include page="includes/footer.jsp"/>
	</div>
	<janrain:signInOverlay />
</body>

</html>