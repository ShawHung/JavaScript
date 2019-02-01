
  var myTab = document.getElementById("tab");
  var Ul = document.getElementById("Ul");
  var liList = Ul.getElementsByTagName("li");
  var divList = myTab.getElementsByTagName("div");



function changeTab(curIndex){
  for(let i = 0; i<liList.length;i++){
    liList[i].className = divList[i].className = '';
  }
  liList[curIndex].className = "active";
  divList[curIndex].className = "show";
}

for(let i = 0;i<liList.length;i++){
  liList[i].myIndex = i;
  liList[i].onclick = function () {
    changeTab(this.myIndex);
  }

}

