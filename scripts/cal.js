function init() {
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('body').appendChild(table);


    weekArray = ["","SUN", "MON", "THE", "WED", "THU", "FRI", "SAT"];
    let row_title = document.createElement('tr');
    for (let index = 0; index < weekArray.length; index++) {
        let heading = document.createElement('th');
        heading.setAttribute("scope", "col");       
        heading.innerHTML = weekArray[index];
        row_title.appendChild(heading);
    }
    thead.appendChild(row_title);

    timeSet = [9, 22];
    for (let index = 0; index < (timeSet[1]-timeSet[0]); index++) {
        let row_buf = document.createElement('tr');
        let headingTime = document.createElement('th');
        headingTime.setAttribute("scope", "row");       
        headingTime.innerHTML = (timeSet[0]+index)+":00"+" ~ "+(timeSet[0]+index+1)+":00";
        row_buf.appendChild(headingTime);
        for (let index = 0; index < (weekArray.length)-1; index++) {
            let heading = document.createElement('th');    
            heading.innerHTML = "NNN";
            row_buf.appendChild(heading);
        }
        thead.appendChild(row_buf);
    }
    var btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        alert("hello");
        
    })



    var req = new XMLHttpRequest();
    req.open("get", "http://127.0.0.1:8010/page.html");
    req.onload = function () {
        var content = document.getElementById("content");
        content.innerHTML = this.responseText;
        };
        req.send();

    

}



