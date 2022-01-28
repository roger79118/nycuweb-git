
// 顯示當週日期星期
function displayDate(date) {
    var datenow = date;
    for(var i=1; i<=7; i+=1) {
        var dtDate = document.getElementById("dt"+i);
        var dtDay = document.getElementById("dd"+i);
        if (i==1) {
            var dateshift = new Date(datenow.setDate(datenow.getDate()));
        } else {
            var dateshift = new Date(datenow.setDate(datenow.getDate()+1));
        }
        var exportDate = (dateshift.getMonth()+1) + "/" + dateshift.getDate();
        var dayStr = ["SUN", "MON", "TUE", "WED"," THU", "FRI", "SAT"];
        var exportDayStr = dayStr[dateshift.getDay()];
        dtDate.innerHTML = exportDate;
        dtDay.innerHTML = exportDayStr;
    }
}

var timeshift = new Date();
function init () {
    var Today = new Date();
    var view = document.getElementById("viewitem");
    view.innerHTML = (Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate());
    displayDate(Today);
    
    // 點擊顯示下周日曆
    var addbtn = document.getElementById("add");
    addbtn.addEventListener("click", function () {
        var now = new Date(timeshift.setDate(timeshift.getDate()+7));
        view.innerHTML = (now.getFullYear()+ "-" + (now.getMonth()+1) + "-" + now.getDate());
        displayDate(now);
    })
    // 點擊顯示上周日曆
    var minusbtn = document.getElementById("minus");
    minusbtn.addEventListener("click", function () {
        var now = new Date(timeshift.setDate(timeshift.getDate()-7));
        view.innerHTML = (now.getFullYear()+ "-" + (now.getMonth()+1) + "-" + now.getDate());
        displayDate(now); 
    })

    var tag = document.getElementById("tag");

    tag.addEventListener("mouseover", function (params) {
        params.target.style.color = "red";
    });
    
    tag.addEventListener("mouseout", function (params) {
        params.target.style.color = "black";
    });





    //動態新增表格
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);
    // Adding the entire table to the body tag
    g=document.getElementById("jsbox").appendChild(table);
    g.setAttribute("id", "tab");

    // Creating and adding data to first row of the table
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Sr. No.";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Name";
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Company";

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = "1.";
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = "James Clerk";
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = "Netflix";
    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);


    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = "2.";
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = "Adam White";
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = "Microsoft";

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);

    // Creating and adding data to fourth row of the table
    let row_4 = document.createElement('tr');
    let row_4_data_1 = document.createElement('td');
    row_4_data_1.innerHTML = "s";
    row_4.appendChild(row_4_data_1);
    tbody.appendChild(row_4);




    var ifrab10 = document.getElementById("b10");
    ifrab10.src = "http://127.0.0.1:8010/cal.html"
    var ifrab11 = document.getElementById("b11");
    ifrab11.src = "http://127.0.0.1:8010/cal.html"
    var ifrab12 = document.getElementById("b12");
    ifrab12.src = "http://127.0.0.1:8010/cal.html"


}





// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');

// table.appendChild(thead);
// table.appendChild(tbody);
// // Adding the entire table to the body tag
// document.getElementById("jsbox").appendChild(table);



