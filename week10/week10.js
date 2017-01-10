function loadDoc(fileInput) {
    var doc = new XMLHttpRequest();
    doc.open("GET", fileInput, false);
    doc.send();
    document.getElementById("cityData").innerHTML = doc.responseText;
}

function openJSON() {
    var request = new XMLHttpRequest();
    var file = document.getElementById("fileInput").value;

    if (request != null) {
        request.onreadystatechange = function parseJSON() {
            var data = JSON.parse(request.responseText);
            var parsedData="";
            for (var i = 0; i < data.students.length; i++) {
                parsedData += data.students[i].first + " " +
                    data.students[i].last + "\n" +
                    data.students[i].address.city + ", " +
                    data.students[i].address.state + " " +
                    data.students[i].address.zip + "\nMajor: " +
                    data.students[i].major + "\nGPA: " +
                    data.students[i].gpa + "\n\n";
            }
            document.getElementById("dataJSON").innerHTML = parsedData;
        }
    }
    request.open("GET", file, true);
    request.send();
}