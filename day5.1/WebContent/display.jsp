<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h5>Email : <%= request.getParameter("em") %></h5>
<h5>Password : <%= request.getParameter("pass") %></h5>
<h5>Session ID : <%= session.getId() %></h5>
<h5>Page : <%= page %></h5>
<h5>PageContext : <%= pageContext %></h5>
<h5>Session : <%= session %></h5>
</body>
</html>