//macro-task-宏任务(包括整体代码，)
//micro-task-微任务（Promise,process.nextTick(callback)）.
//begin(script->macro-task)->micro-task->next loop->begin
            //->setTimeout,setInterval->Event queue

//代码开始——>执行宏任务代码，遇到->>遇到微任务（Promise,process.nextTick）
//->加入Promise,process.nextTick任务队列。宏任务执行完毕->执行微任务队列->下一次宏任务循环开始。（读取加入setTimeout/setInterval事件队列）

console.log("1");//loop1 macro-task1


//setTimeout1 Event queue(macro-task)
setTimeout(() => {

  console.log("2"); //loop2 macro-task1

  //loop2 micro - task1
  process.nextTick(()=>{
    console.log("3");
  });

  //loop2 micro - task2
  new Promise((resolve)=>{
    console.log("4"); ////loop2 macro-task1
    resolve();
  }).then(()=>{
    console.log("5");
  });

});

console.log("6"); //loop1 macro-task1

//micro-task1 Event queue
process.nextTick(() => {
  console.log("7");
});

//micro-task2 Event queue
new Promise((resolve) => {
  console.log("8"); //loop1 macro-task1
  resolve();
}).then(() => {
  console.log("9");
});

console.log("-----"); //loop1 macro-task1

//setTimeout2 Event queue(macro-task)
setTimeout(() => {

  console.log("10"); //loop2 macro-task1

  //loop2 micro - task3
  process.nextTick(() => {
    console.log("11");
  });

  //loop2 micro - task4
  new Promise((resolve) => {
    console.log("12"); //loop2 macro-task1
    resolve();
  }).then(() => {
    console.log("13");
  });

});

//输出结果：

// 1
// 6
// 8
// -----
// 7
// 9
// 2
// 4
// 10
// 12
// 3
// 11
// 5
// 13