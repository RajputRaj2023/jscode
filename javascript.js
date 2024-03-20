function test() {
    var uid = document.getElementById("name").value;
    var ema = document.getElementById("email").value;
    var pass = document.getElementById("password").value;



    var data = [];
    data.push(uid);
    data.push(ema);
    data.push(pass);
    var data_string = JSON.stringify(data);
    var file = new Blob([data_string], { type: "text/plain" }); 
    var anchor = document.createElement("a");
    anchor.href = URL.createObjectURL(file);
    anchor.download = "raj.txt"; // added download attribute to specify filename
    anchor.click();
}
