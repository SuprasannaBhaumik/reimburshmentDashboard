<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script type="text/javascript"
	src="https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/myDirective.js"></script>


<body>
	
	<my-header heading="${title}"></my-header>

	<sec:authorize access="permitAll">
		<!-- For login user -->
		<c:url value="/j_spring_security_logout" var="logoutUrl" />
		<form action="${logoutUrl}" method="post" id="logoutForm">
			<input type="hidden" name="${_csrf.parameterName}"
				value="${_csrf.token}" />
		</form>
		<script>
			function formSubmit() {
				document.getElementById("logoutForm").submit();
			}
		</script>

		<c:choose>
			<c:when test="${pageContext.request.userPrincipal.name != null}">
				<logged-entity user="${pageContext.request.userPrincipal.name}"></logged-entity>
			</c:when>
			<c:otherwise>
				<logged-entity user="Tom Cruise"></logged-entity>
			</c:otherwise>
		</c:choose>
	</sec:authorize>
	<br />
	
</body>
