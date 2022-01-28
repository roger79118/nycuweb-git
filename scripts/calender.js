let calenderTag;
let timeshift = new Date();
window.onload = function(){
    calenderTag = document.getElementById("calender");
    console.log("hello");
    //updateInfo();
    var Today = new Date();
    var view = document.getElementById("viewitem");
    view.innerHTML = (Today.getFullYear()+ "-" + (Today.getMonth()+1) + "-" + Today.getDate());
    createCalender(calenderTag, 9, 22);
    displayDate(Today);
    //updateInfo(timeshift);

    // 點擊顯示下周日曆
    var addbtn = document.getElementById("add");
    addbtn.addEventListener("click", function () {
        var now = new Date(timeshift.setDate(timeshift.getDate()+7));
        view.innerHTML = (now.getFullYear()+ "-" + (now.getMonth()+1) + "-" + now.getDate());
        displayDate(now);
        updateInfo(timeshift);

    })
    // 點擊顯示上周日曆
    var minusbtn = document.getElementById("minus");
    minusbtn.addEventListener("click", function () {
        var now = new Date(timeshift.setDate(timeshift.getDate()-7));
        view.innerHTML = (now.getFullYear()+ "-" + (now.getMonth()+1) + "-" + now.getDate());
        displayDate(now);
        updateInfo(timeshift);

    })

};
// 創建日曆
function createCalender(tag, time_start, time_end) {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    tag.appendChild(table);

    // create title
    weekArray = ["","SUN", "MON", "THE", "WED", "THU", "FRI", "SAT"];
    let row_date = document.createElement('tr');
    let row_week = document.createElement('tr');
    for (let index = 0; index < weekArray.length; index++) {
        // date id setting
        let heading_date = document.createElement('th');
        heading_date.setAttribute("id", "dateTag"+index);
        heading_date.setAttribute("scope", "col");       
        //heading_date.innerHTML = weekArray[index];
        row_date.appendChild(heading_date);
        // week id setting
        let heading_week = document.createElement('th');
        heading_week.setAttribute("id", "weekTag"+index);
        heading_week.setAttribute("scope", "col");       
        //heading_week.innerHTML = weekArray[index];
        row_week.appendChild(heading_week);
    }
    thead.appendChild(row_date); //日期
    thead.appendChild(row_week); //星期

    let setIdFor_thLabel = 0;
    for (let index = 0; index < (time_end-time_start); index++) {
        let row_buf = document.createElement('tr');
        let headingTime = document.createElement('th');
        headingTime.setAttribute("scope", "row");       
        headingTime.innerHTML = (time_start+index)+":00"+" ~ "+(time_start+index+1)+":00";
        row_buf.appendChild(headingTime);
        for (let indexTh = 0; indexTh < (weekArray.length)-1; indexTh++) {
            let heading = document.createElement('th');    
            //heading.innerHTML = setIdFor_thLabel;
            row_buf.appendChild(heading);
            heading.setAttribute("id", setIdFor_thLabel); //每個格子加入id
            setIdFor_thLabel++;
        }
        thead.appendChild(row_buf);
    }
}

// 更新每格資料
function updateInfo(datetime) {
    itm = (datetime.getFullYear()+ "-" + (datetime.getMonth()+1) + "-" + datetime.getDate());
    // 修改每格資料
    let index = 0
    while(document.body.contains(document.getElementById(index))){ //檢查id是否存在
        let thItem = document.getElementById(index);
        thItem.innerHTML = itm+"-"+index;
        index++;   
    }    
}

// 顯示當週日期星期
function displayDate(date) {
    var datenow = date;
    for(var i=1; i<=7; i+=1) {
        var dateTag = document.getElementById("dateTag"+i);
        var weekTag = document.getElementById("weekTag"+i);
        if (i==1) {
            var dateshift = new Date(datenow.setDate(datenow.getDate()));
        } else {
            var dateshift = new Date(datenow.setDate(datenow.getDate()+1));
        }
        var exportDate = (dateshift.getMonth()+1) + "/" + dateshift.getDate();
        var dayStr = ["SUN", "MON", "TUE", "WED"," THU", "FRI", "SAT"];
        var exportDayStr = dayStr[dateshift.getDay()];
        dateTag.innerHTML = exportDate;
        weekTag.innerHTML = exportDayStr;
    }
}

