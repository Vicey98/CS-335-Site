/*
COMPSCI 335 Assignment #2M
Name: Danny Roy Jenuil
AUID: 8687679
UPI: djen109
*/

let currentTab = "";

function showhome_tab() {
 if (currentTab != "home_tab") {
	currentTab = "home_tab";
	showNoTabs();
	document.getElementById("home_tab").style.backgroundColor = "lightBlue";
	document.getElementById("home_section").style.display = "inline";
 }
}

function showcourses_tab() {
 if (currentTab != "courses_tab") {
	currentTab = "courses_tab";
	showNoTabs();
	document.getElementById("courses_tab").style.backgroundColor = "lightBlue";
	document.getElementById("courses_section").style.display = "inline";
 }
}

function showpeople_tab() {
 if (currentTab != "people_tab") {
	currentTab = "people_tab";
	showNoTabs();
	document.getElementById("people_tab").style.backgroundColor = "lightBlue";
	document.getElementById("people_section").style.display = "inline";
 }
}

function shownotices_tab() {
 if (currentTab != "notices_tab") {
	currentTab = "notices_tab";
	showNoTabs();
	document.getElementById("notices_tab").style.backgroundColor = "lightBlue";
	document.getElementById("notices_section").style.display = "inline";
 }
}

function shownews_tab() {
 if (currentTab != "news_tab") {
	currentTab = "news_tab";
	showNoTabs();
	document.getElementById("news_tab").style.backgroundColor = "lightBlue";
	document.getElementById("news_section").style.display = "inline";
 }
}

function showcomments_tab() {
 if (currentTab != "comments_tab") {
	currentTab = "comments_tab";
	showNoTabs();
	document.getElementById("comments_tab").style.backgroundColor = "lightBlue";
	document.getElementById("comments_section").style.display = "inline";
 }
}

function showNoTabs() {
 document.getElementById("home_tab").style.backgroundColor = "transparent";
 document.getElementById("courses_tab").style.backgroundColor = "transparent";
 document.getElementById("people_tab").style.backgroundColor = "transparent";
 document.getElementById("notices_tab").style.backgroundColor = "transparent";
 document.getElementById("news_tab").style.backgroundColor = "transparent";
 document.getElementById("comments_tab").style.backgroundColor = "transparent";
 
 document.getElementById("home_section").style.display = "none";
 document.getElementById("courses_section").style.display = "none";
 document.getElementById("people_section").style.display = "none";
 document.getElementById("notices_section").style.display = "none";
 document.getElementById("news_section").style.display = "none";
 document.getElementById("comments_section").style.display = "none";
 
}

window.onload = function () {
 showhome_tab();
}

function getCourses() {
	const uri = "https://api.auckland.ac.nz/service/courses/v2/courses?subject=COMPSCI&year="+ (new Date()).getFullYear() +"&size=500";
	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri, true);
	xhr.onload = () => {
		const resp = JSON.parse(xhr.responseText);
		showCourses(resp.data);
	}
	xhr.send(null);
}

function showCourses(courses) {
	let content = "<h2 class='section_header'>Courses</h2>\n\n";
	const addCourse = (course) => {
		content += "<p class='course_title'>" + course.subject + " " + course.catalogNbr + " - " + course.titleLong + "</p>\n\n";
	}
	courses.forEach(addCourse);
	document.getElementById("show_courses").innerHTML = content;
}

function getNotices() {
	const uri = "http://redsox.uoa.auckland.ac.nz/ups/UniProxService.svc/notices";
	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri, "True");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onload = () => {
		const resp = JSON.parse(xhr.responseText);
		showNotices(resp);
	}
	xhr.send(null);
}

function showNotices(notices) {
	let content = "<h2 class='section_header'>Notices</h2>\n<hr />";
	const addNotice = (notice) => {
		content += "<a href=\"" + notice.linkField + "\"target=_blank>" + notice.titleField + "</a>\n" + "<p>" + notice.descriptionField + "</p>\n<hr />";
	}
	notices.forEach(addNotice);
	document.getElementById("show_notices").innerHTML = content;
}

function getNews() {
	const uri = "http://redsox.uoa.auckland.ac.nz/ups/UniProxService.svc/news";
	const xhr = new XMLHttpRequest();
	xhr.open("GET", uri, "True");
	xhr.setRequestHeader("Accept", "application/json");
	xhr.onload = () => {
		const resp = JSON.parse(xhr.responseText);
		showNews(resp);
	}
	xhr.send(null);
}

function showNews(news) {
	let content = "<h2 class='section_header'>News</h2>\n<hr />";
	const addNews = (item) => {
		content += "<a href=\"" + item.linkField + "\"target=_blank>" + item.titleField + "</a>\n" + "<p>" + item.descriptionField + "</p>\n<hr />";
	}
	news.forEach(addNews);
	document.getElementById("show_news").innerHTML = content;
}
