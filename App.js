const data = new Date();

function valid() {
  const d1 = document.getElementById("dd").value;
  const m1 = document.getElementById("mm").value;
  const y1 = document.getElementById("yy").value;
  let oy = data.getFullYear();
  const dataString = "`${y1}-${m1}-${d1}`";
  const dob = Date.parse(dataString);

  if (isNaN(dob)) {
    Day();
    Month();
    Year();
    console.log("true");
    let year = data.getFullYear() - y1;
    let month = data.getMonth() - m1;
    const date = data.getDate() - d1;

    if (data.getMonth() >= m1 && data.getDate() >= d1) {
      if (month < 0) {
        month = 12 - m1;
        month = month + data.getMonth() + 1;
      }

      var dis3 = document.getElementById("dis3");
      var dis2 = document.getElementById("dis2");
      var dis1 = document.getElementById("dis1");
      dis3.innerHTML = Math.abs(date);
      dis2.innerHTML = Math.abs(month);
      dis1.innerHTML = year;
    } else {
      if (month < 0) {
        month = 12 - m1;
        month = month + data.getMonth() + 1;
      }
      year--;
      var dis3 = document.getElementById("dis3");
      var dis2 = document.getElementById("dis2");
      var dis1 = document.getElementById("dis1");
      dis3.innerHTML = Math.abs(date);
      dis2.innerHTML = Math.abs(month);
      dis1.innerHTML = year;
    }
  } else {
    var err = document.getElementById("title1");
    var err1 = document.getElementById("title2");
    var err2 = document.getElementById("title3");

    var ed = document.getElementById("error-dd");
    ed.innerHTML = "Must be a valid day";
    err.style.color = "red";
    err1.style.color = "red";
    err2.style.color = "red";
  }
}

function Day() {
  const d = document.getElementById("dd").value;
  var err = document.getElementById("title1");
  var ed = document.getElementById("error-dd");
  console.log(d);
  if (d.length == 0) {
    ed.innerHTML = "This field is required";
    err.style.color = "red";
  } else if (d > 31 || d < 0) {
    ed.innerHTML = "Must be a valid day";
  } else {
    ed.innerHTML = "";
    err.style.color = "";
  }
}

function Month() {
  const m = document.getElementById("mm").value;
  var err1 = document.getElementById("title2");
  var em = document.getElementById("error-mm");
  if (m.length == 0) {
    em.innerHTML = "This field is required";
    err1.style.color = "red";
  } else if (m > 12 || m < 0) {
    em.innerHTML = "Must be a valid month";
    err1.style.color = "red";
  } else {
    em.innerHTML = "";
    err1.style.color = "";
  }
}

function Year() {
  const y = document.getElementById("yy").value;
  var err2 = document.getElementById("title3");
  const y1 = data.getFullYear();
  var ey = document.getElementById("error-yy");

  if (y.length == 0) {
    ey.innerHTML = "This field is required";
    err2.style.color = "red";
  } else if (y > y1) {
    console.log(y);
    ey.innerHTML = "Must be in the past";
    err2.style.color = "red";
  } else {
    ey.innerHTML = "";
    err2.style.color = "";
  }
}
