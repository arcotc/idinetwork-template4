<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://idinetwork.co.uk/taglibs/idinetwork" prefix="idi"%>

<c:if test="${not empty subPages}">
	<h1>Links</h1>
	<ul>
		<c:forEach items="${subPages}" var="subPage" varStatus="loopStatus">
			<li><a href="/site/${subPage.key}">${subPage.title}</a></li>
		</c:forEach>
	</ul>
</c:if>
