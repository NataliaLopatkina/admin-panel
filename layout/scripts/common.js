console.log("Hello! I\"m Admin Panel😊.")

// Page login

if (document.querySelectorAll(".nav-authorization").length > 0) {
    var navAuthorization = document.querySelector(".nav-authorization");
    var buttonNavAuthorization = document.querySelector(".button-menu");
    var navListAuthorization = document.querySelector(".nav-authorization__list");

    buttonNavAuthorization.addEventListener("click", function () {
        var heightNavAuthorization = navListAuthorization.offsetHeight;

        if (navAuthorization.classList.contains("nav-authorization--opened")) {
            navAuthorization.classList.remove("nav-authorization--opened");
            navAuthorization.style.height = "0px";
            buttonNavAuthorization.classList.add("button-menu--opened");
            buttonNavAuthorization.classList.remove("button-menu--closed");
        }

        else {
            navAuthorization.classList.add("nav-authorization--opened");
            navAuthorization.style.height = heightNavAuthorization + "px";
            buttonNavAuthorization.classList.add("button-menu--closed");
            buttonNavAuthorization.classList.remove("button-menu--opened");
        }
    })
}

// Menu header

if (document.querySelectorAll(".nav-site__menu").length > 0) {
    var nav = document.querySelector(".nav-site__menu");
    var buttonNav = document.querySelector(".nav-site__button-menu");
    var navList = document.querySelector(".nav-site__menu-list");

    buttonNav.addEventListener("click", function() {
        var heightNav = navList.offsetHeight;

        if (nav.classList.contains("nav-site__menu--opened")) {
            nav.classList.remove("nav-site__menu--opened");
            nav.style.height = "0px";
        }

        else {
            nav.classList.add("nav-site__menu--opened");
            nav.style.height = heightNav + "px";
        }
    })
}

if (document.querySelectorAll(".nav-site__field-search").length > 0) {
    var search = document.querySelector(".nav-site__field-search");
    var buttonSearch = document.querySelector(".nav-site__button-search");

    buttonSearch.addEventListener("click", function () {
        if (search.classList.contains("nav-site__field-search--opened")) {
            search.classList.remove("nav-site__field-search--opened");
        }

        else {
            search.classList.add("nav-site__field-search--opened");
        }
    })
}

if (document.querySelectorAll(".graphic-sales").length > 0) {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Task", "Hours per Day"],
            ["Websites",     1],
            ["Logo",      1],
            ["Social media",  2.5],
            ["Adwords", 2],
            ["E-Commerce", 2],
        ]);

        var options = {
            title: "Your Sales",
            titleTextStyle: {
                fontSize: 36,
                bold: true,
                color: "#8492af",
            },

            pieHole: 0.6,
            chartArea: {
                top: 132,
                left: 35,
                width: 500,
            },

            enableInteractivity: false,

            legend: {
                alignment: "center",
                textStyle: {
                    fontSize: 20,
                    color: "#8492af",
                }
            },
        };

        var chart = new google.visualization.PieChart(document.getElementById("graphic-sales"));
        chart.draw(data, options);

        // Title

        var chartBlock = document.querySelector(".graphic-sales"); // Блок графика
        var defs = chartBlock.querySelector("defs"); // Элемент defs
        var rect = defs.nextSibling; // Элемент rect
        var groupTitle = rect.nextSibling; // Группа, внутри которой лежит заголовок
        var title = groupTitle.firstChild; // Заголовок

        title.setAttribute("x", "35");
        title.setAttribute("y", "65");
    }

    // Graphic report

    google.load("visualization", "1", {packages: ["corechart"]});
    google.setOnLoadCallback(drawChartReport);

    function drawChartReport() {

        var data = new google.visualization.DataTable();
        data.addColumn("number", "");
        data.addColumn("number", "");
        data.addRows([
            [{ v: 0, f: "0" }, 320],
            [{ v: 1, f: "0.4" }, 300],
            [{ v: 2, f: "0.8" }, 280],
            [{ v: 3, f: "1" }, 290],
            [{ v: 4, f: "1.5" }, 400],
            [{ v: 5, f: "2" }, 380],
            [{ v: 6, f: "2.2" }, 370],
            [{ v: 7, f: "2.7" }, 700],
            [{ v: 8, f: "3" }, 680],
            [{ v: 9, f: "3.5" }, 400],
            [{ v: 10, f: "4" }, 450],
            [{ v: 11, f: "4.3" }, 470],
            [{ v: 12, f: "4.8" }, 280],
            [{ v: 13, f: "5" }, 290],
            [{ v: 14, f: "5.5" }, 320],
            [{ v: 15, f: "6" }, 300],

        ]);

        var options = {
            title: "Report",
            titleTextStyle: {
                fontSize: 36,
                bold: true,
                color: "#8492af",
            },

            curveType: "function",
            
            hAxis: {
                gridlines: {
                    color: "#dadee7",
                    count: 5,
                },

            },
            vAxis: {
                minValue: 0,
                gridlines: {
                    color: "#dadee7",
                    count: 5,
                }
            },

            chartArea: {
                left: 85,
                top: 125,
                width: 765,
                height: 310,
            },

            legend: "none",
            fontSize: 20,
            enableInteractivity: false,
        };

        var chart = new google.visualization.LineChart(document.getElementById("graphic-report"));
        chart.draw(data, options);

        var chartBlock = document.querySelector(".graphic-report");

        var value = chartBlock.querySelectorAll("text[text-anchor='end']");

        value.forEach(function(item) {
            item.classList.add("graphic-report__value-text");
        })

        var title = chartBlock.querySelector("text[text-anchor='start']");
        title.setAttribute("x", "35");
        title.setAttribute("y", "67");

        // var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
        // linearGradient.setAttribute("id", "linear-gradient");

        // var svgChart = chartBlock.querySelectorAll("svg");

        // svgChart[0].appendChild(linearGradient);

        // var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
        // var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");

        // linearGradient.appendChild(stop1);
        // linearGradient.appendChild(stop2);

        // stop1.setAttribute("offset", "10%");
        // stop1.setAttribute("stop-color", "gold");

        // stop2.setAttribute("offset", "100%");
        // stop2.setAttribute("stop-color", "teal");

        // var groupChart = chartBlock.querySelector("g[clip-path]");
        // var childrenGroupChart = groupChart.childNodes[2];
        // var graphReport = childrenGroupChart.querySelector("path");

        // graphReport.setAttribute("stroke", "url(#linear-gradient)");
    }
}

// Graphic active users

if (document.querySelectorAll(".graphic-active-users").length > 0) {
    
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChartActiveUsers);

    function drawChartActiveUsers() {

        var data = new google.visualization.DataTable();
        data.addColumn("number", "");
        data.addColumn("number", "");
        data.addRows([
            [{ v: 0, f: "0" }, 320],
            [{ v: 1, f: "0.4" }, 300],
            [{ v: 2, f: "0.8" }, 280],
            [{ v: 3, f: "1" }, 290],
            [{ v: 4, f: "1.5" }, 400],
            [{ v: 5, f: "2" }, 380],
            [{ v: 6, f: "2.2" }, 370],
            [{ v: 7, f: "2.7" }, 700],
            [{ v: 8, f: "3" }, 680],
            [{ v: 9, f: "3.5" }, 400],
            [{ v: 10, f: "4" }, 450],
            [{ v: 11, f: "4.3" }, 470],
            [{ v: 12, f: "4.8" }, 280],
            [{ v: 13, f: "5" }, 290],
            [{ v: 14, f: "5.5" }, 320],
            [{ v: 15, f: "6" }, 300],

        ]);

        var options = {
            title: "Active users",
            titleTextStyle: {
                fontSize: 36,
                bold: true,
                color: "#8492af",
            },

            curveType: "function",

            hAxis: {
                gridlines: {
                    color: "#dadee7",
                    count: 5,
                },

            },
            vAxis: {
                minValue: 0,
                gridlines: {
                    color: "#dadee7",
                    count: 5,
                }
            },

            chartArea: {
                left: 85,
                top: 125,
                width: 765,
                height: 310,
            },

            legend: "none",
            fontSize: 20,
            enableInteractivity: false,
        };

        var chart = new google.visualization.LineChart(document.getElementById("graphic-active-users"));
        chart.draw(data, options);

        var chartBlock = document.querySelector(".graphic-active-users"); // Блок с графиком
        var value = chartBlock.querySelectorAll("text[text-anchor='end']"); // Значения по оси Y
 
        value.forEach(function (item) {
            item.classList.add("graphic-report__value-text"); // Добавление класса значениям по оси Y
        })
    
        var title = chartBlock.querySelector("text[text-anchor='start']"); // Заголовок графика
        title.setAttribute("x", "35"); // Изменение атрибута x
        title.setAttribute("y", "67"); // Изменение атрибута y

        var linearGradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient"); // Создание элемента linearGradient
        linearGradient.setAttribute("id", "linear-gradient"); // Добавление id элементу linearGradient

        var svgChart = chartBlock.querySelectorAll("svg"); // Svg графика
        svgChart[0].appendChild(linearGradient); // Добавление элемента linearGradient в svg

        var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop"); // Создание элемента stop
        var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop"); // Создание элемента stop

        linearGradient.appendChild(stop1); // Добавление элемента stop в элемент linearGradient
        linearGradient.appendChild(stop2); // Добавление элемента stop в элемент linearGradient

        stop1.setAttribute("offset", "10%"); // Добавление атрибута stop элементу stop
        stop1.setAttribute("stop-color", "#5883fd"); // Добавление атрибута stop элементу stop

        stop2.setAttribute("offset", "100%"); // Добавление атрибута stop элементу stop
        stop2.setAttribute("stop-color", "#f93c7a"); // Добавление атрибута stop элементу stop

        var groupChart = chartBlock.querySelector("g[clip-path]"); // Группа, в которой лежит график
        var childrenGroupChart = groupChart.childNodes[2]; // Children group
        var graphReport = childrenGroupChart.querySelector("path"); // График

        graphReport.setAttribute("stroke", "url(#linear-gradient)"); // Добавлене атрибута графику

        var circleButton1 = document.createElementNS("http://www.w3.org/2000/svg","circle"); // Создание элемента circle
        svgChart[0].appendChild(circleButton1); // Добавление circle внутрь svg
        circleButton1.classList.add("graphic-active-users__button");
        circleButton1.classList.add("graphic-active-users__button--edit");

        var circleButton2 = document.createElementNS("http://www.w3.org/2000/svg", "circle"); // Создание элемента circle
        svgChart[0].appendChild(circleButton2); // Добавление circle внутрь svg
        circleButton2.classList.add("graphic-active-users__button");
        circleButton2.classList.add("graphic-active-users__button--delete");
    }
}

// Canvas
if (document.getElementById("chart-sales-direct")) {
    // First chart. Direct sales
    var canvasDirect = document.getElementById("chart-sales-direct");
    var context = canvasDirect.getContext("2d");
    var startAngle = 0.5 * Math.PI;
    var percent = 45;
    var endAngle = startAngle + (percent * 2 * Math.PI) / 100;

    context.beginPath();
    context.arc(96, 90, 86, startAngle, endAngle);
    context.lineWidth = 18;
    context.strokeStyle = "#5484ff";
    context.stroke();
    context.closePath();

    // Second chart. Channel sales
    var canvasChannel = document.getElementById("chart-sales-channel");
    var contextChannel = canvasChannel.getContext("2d");
    var percent = 20;
    var endAngle = startAngle + (percent * 2 * Math.PI) / 100;

    contextChannel.beginPath();
    contextChannel.arc(96, 90, 86, startAngle, endAngle);
    contextChannel.lineWidth = 18;
    contextChannel.strokeStyle = "#aa5fba";
    contextChannel.stroke();
    contextChannel.closePath();

    // Third chart. Channel sales
    var canvasChannel = document.getElementById("chart-sales-channel-second");
    var contextChannel = canvasChannel.getContext("2d");
    var percent = 25;
    var endAngle = startAngle + (percent * 2 * Math.PI) / 100;

    contextChannel.beginPath();
    contextChannel.arc(96, 90, 86, startAngle, endAngle);
    contextChannel.lineWidth = 18;
    contextChannel.strokeStyle = "#f83c7b";
    contextChannel.stroke();
    contextChannel.closePath();
}
