function clickHandle() {
    console.log("called");
}
document.getElementById("btn").addEventListener("click",function () {
    console.log("called inside EventListener");
})