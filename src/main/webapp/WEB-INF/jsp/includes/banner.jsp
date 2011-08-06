<%@ page language="java" session="false" contentType="text/html; charset=UTF-8" %>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<%@ taglib prefix="janrain" uri="http://janrain4j.googlecode.com/tags" %>

		<div id="banner">
		  <c:set var="profile">
		  	<idi:configTag key="profile"/>
		  </c:set>
		  <c:if test="${not empty profile && profile == 'on'}">
			<c:choose>
				<c:when test="${not empty currentUser}">
					${currentUser.displayName}
				</c:when>
				<c:otherwise>
					<janrain:signInLink>Sign-in</janrain:signInLink>
				</c:otherwise>
			</c:choose>
		  </c:if>
		</div>
