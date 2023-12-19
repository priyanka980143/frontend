function calculate(){
    let marks1 = parseInt(document.getElementById("marks1").value)
    let marks2 = parseInt(document.getElementById("marks2").value)
    let marks3 = parseInt(document.getElementById("marks3").value)
    let marks4 = parseInt(document.getElementById("marks4").value)
    console.log(marks1);
    console.log("marks1 isnan ",isNaN(marks1));
    if (isNaN(marks1) || isNaN(marks2)){
        console.log("inside if");
        document.getElementById("total").innerHTML = "Value Can't be empty";
    }else{
        console.log("inside else");
        let sum = marks1 + marks2 + marks3 + marks4
        let avg = parseFloat(sum / 4)
        // document.getElementById("result").value = "test"
        document.getElementById("result").value = sum
        
        document.getElementById("total").innerHTML = "Total is : " + sum;
        document.getElementById("avg").innerHTML = "Avarage is : " + avg;
    }
}