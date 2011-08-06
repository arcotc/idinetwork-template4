<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>

<html>
	<head>
		<title>Management | Pages | Edit</title>
		<script type="text/javascript" src="/static/ckeditor/ckeditor.js"></script>
	</head>
	<body>
		<h1>Edit Page</h1>
		<table>
			<tr>
				<td width="100%">
					<c:choose>
						<c:when test="${empty page}">
							An error occurred and the requested page could not be found
						</c:when>
						<c:otherwise>
							<c:if test="${not empty editConfirmation}">
								You changes have been applied.<br/>
								<br/>
							</c:if>
							<form method="post" action="/site/management/pages/edit">
								<input type="hidden" name="id" value="${page.id}"/><br/>
								Title: <input type="text" name="title" value="${page.title}"/><br/>
								Link: <input type="text" name="linkTitle" value="${page.key}"/></br>
								Introduction:<br/>
								<textarea cols="80" id="intro" name="intro" rows="5">${page.intro}</textarea><br/>
								Body:<br/>
								<textarea cols="80" id="body" name="body" rows="10">${page.body}</textarea><br/>
								Page Links: <input type="text" name="linkText" value="${page.linkText}"/></br>
								<script type="text/javascript">
								//<![CDATA[
								CKEDITOR.replace( 'intro', { toolbar : [ ['Source'], 
								                                    [ 'Bold','Italic','Underline','Strike','-','Subscript','Superscript' ],
							                                        ['NumberedList','BulletedList','-','Outdent','Indent'],
							                                        ['Link','Unlink','Anchor'],
							                                        ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
							                                        ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'] ] } );
								CKEDITOR.replace( 'body', { toolbar : [ ['Source'], 
									                                    [ 'Bold','Italic','Underline','Strike','-','Subscript','Superscript' ],
								                                        ['NumberedList','BulletedList','-','Outdent','Indent'],
								                                        ['Link','Unlink','Anchor'],
								                                        ['Image','Flash','Table','HorizontalRule','Smiley','SpecialChar','PageBreak'],
								                                        ['Cut','Copy','Paste','PasteText','PasteFromWord','-','Print', 'SpellChecker', 'Scayt'] ] } );
								//]]>
								</script>
								Meta Description:<br/>
								<textarea rows="3" cols="40" name="metaDescription">${page.metaDescription}</textarea><br/>
								Meta Keywords: <input type="text" name="metaKeywords" value="${page.metaKeywords}"/><br/>
								Blogger Tags: <input type="text" name="tags" value="${page.tags}"/><br/>
								Template Name: 
								<select name="templateName">
									<option value="firstLevelPage" <c:if test="${page.templateName == 'firstLevelPage'}">selected</c:if>>Home Page</option>
									<option value="firstLevelCarouselPage" <c:if test="${page.templateName == 'firstLevelCarouselPage'}">selected</c:if>>Home Carousel Page</option>
									<option value="secondLevelPage" <c:if test="${page.templateName == 'secondLevelPage'}">selected</c:if>>Promo Page</option>
									<option value="thirdLevelPage" <c:if test="${page.templateName == 'thirdLevelPage'}">selected</c:if>>Content Page</option>
								</select>
								<br/>
								Include Path: <input type="text" name="includePath" value="${page.includePath}"/><br/>
								<br/>
								<input type="submit" value="save"/>
							</form>
						</c:otherwise>
					</c:choose>
				</td>
			</tr>
		</table>
		<br/>
		Return to <a href="/site/management/pages">pages management</a> | <a href="/site/management">management</a>.
	</body>
</html>