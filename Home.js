fetch("http://localhost:4000/getTimeStories")
  .then((response) => response.json())
  .then((data) => {
    console.log(data, "data ===>");
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: -->" + err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var a = document.createElement("a");
    var time = document.createElement("h6");
    time.className = "time";
    time.append("JANUARY 26, 2022 - 11:43 PM EST");
    a.innerHTML = data[i]?.title;
    a.href = data[i]?.link;
    a.target = "_blank";
    mainContainer.appendChild(a);
    mainContainer.appendChild(time);
  }
}
