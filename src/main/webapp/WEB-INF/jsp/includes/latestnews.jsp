<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>
<idi:articlesTag tags="news" maxItems="3"/>

<c:if test="${not empty articles}">
	<h1>Latest News</h1>
   	  <c:forEach items="${articles}" var="article" varStatus="loopStatus">
		<p>
			${article.intro}
        	<a href="/site/article/${article.key}" class="more">Read more &rsaquo;</a>
        </p>
      </c:forEach>
</c:if>