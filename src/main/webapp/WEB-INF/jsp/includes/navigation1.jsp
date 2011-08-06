<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
    <!-- Navigation Level 1 -->
	<ul>
		<c:forEach items="${topNavigation}" var="navigation">
			<li><a href="/site/${navigation.key}">${navigation.title}</a></li>
		</c:forEach>
	</ul>
