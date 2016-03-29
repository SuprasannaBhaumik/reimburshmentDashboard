<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script type="text/javascript"
	src="https://rawgit.com/SuprasannaBhaumik/reimburshmentDashboard/master/src/main/webapp/WEB-INF/js/myDirective.js"></script>


<body>
	
	<title value="${title}"></title>

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
				<p>${pageContext.request.userPrincipal.name}
					| <a href="javascript:formSubmit()"> Logout</a>
				</p>
			</c:when>
			<c:otherwise>
				<p align="right">Tom Cruise  | <a href="javascript:formSubmit()"> Logout</a>
				</p>
			</c:otherwise>
		</c:choose>
	</sec:authorize>
	<br />
	
</body>
