function animate(element,target ,num){

  cancelAnimationFrame(timer);

  var timer =requestAnimationFrame(function animation(){
    var leader = parseInt(element.offsetLeft);
    var step  = target > leader?num:-num;
    var distance = Math.abs(target-leader);
    if(distance>=Math.abs(step)){
          leader+=step;
          element.style.left = leader + "px";
          timer = requestAnimationFrame(animation);
    }else{
          element.style.left = "0";
          cancelAnimationFrame(timer);
    }
  })
}