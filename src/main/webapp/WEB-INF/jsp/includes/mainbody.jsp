<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>


	<c:if test="${not empty page}">
		<h1>${page.title}</h1>
		${page.body}
	</c:if>
	<c:if test="${not empty article}">
		<h1>${article.title}</h1>
		${article.copy}
	</c:if>
	<c:if test="${not empty page.tags}">
	  <idi:articlesTag tags="${page.tags}" name="pageArticles"/>
      <c:forEach items="${pageArticles}" var="article" varStatus="loopStatus">
		<p><b>${article.title}</b></p>
		<p>
		  <c:out value="${fn:substring(article.copy,0,200)}"/>...
          &rsaquo;&rsaquo;&rsaquo;&nbsp;<a href="/site/article/${article.key}">read more</a>
		</p>
	  </c:forEach>		
	</c:if>
    <c:if test="${not empty includePage}">
    	<jsp:include page="${includePage}"/>
    </c:if>
