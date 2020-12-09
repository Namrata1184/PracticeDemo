<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h5>
		Session ID from details page :
		<%=session.getId()%></h5>
		<%--sessionScope.get(user_dtls) --%>
		<%--session.getAttribute(user_dtls) --%>
	<h4>User Details : ${requestScope.user_dtls}</h4>
	<%--get the attribute  from request scope n add session scope --%>
	<%
	session.setAttribute("user_dtls",request.getAttribute("user_dtls"));
	%>
	
	<h5>
		<a href="logout.jsp">Log Me Out</a>
	</h5>
</body>
</html>