//oop
function each(array, func) {
    for (let i = 0; i < array.length; i++) {
      func(array[i], i);
    }
  }
  function map(array, func) {
    var acc = [];
    each(array, function (element, i) {
      acc.push(func(element, i));
    });
    return acc;
  }
  
  function filter(array, predicate) {
    var acc = [];
    each(array, function (element, i) {
      if (predicate(element, i)) {
        acc.push(element);
      }
    });
    return acc}
   
    function factory(jobname,salary,worktime,locations){
        return{
jobname:jobname,
salary:salary,
worktime:worktime,
locations:locations
        }
    }


function companyproduct(){

const addjob=function (jobname,salary,worktime,locations){
  this.list.push(factory(jobname,salary,worktime,locations))
}
const displaybyname=function(jobname){
return  filter(this.list,function(kk){
    return kk.jobname===jobname
}) 
}
    var obj={}
    obj.list=[]
    obj.displaybyname=displaybyname;
    obj.addjob=addjob;

return obj 
}

var comp1=companyproduct()
comp1.addjob("dev",1500,"8h/5j","rue tahran depar num 23 mannouba")
comp1.addjob("devp",1500,"8h/5j","rue tahran depar num 23 mannouba")
comp1.addjob("devpp",1500,"8h/5j","rue tahran depar num 23 mannouba")

console.log(comp1.list);
console.log( comp1.displaybyname('dev'));



function displayOne(job){
  $("#compowner").append(`<div class = "cc"> 
       <h1 id ="esm">job name :${job.jobname}</h1>
       <h1 id="shahreya">sallary:${job.salary}</p>
     <h1 id ="wa9tkhedma">work time :${job.worktime}</h1>
     <h1 id ="blasa">location : ${job.locations}</h1>
     <a id="mm" href="the cv.html"><h3>get it</h3></a>  
       </div>`)  
}
function displayAll(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        displayOne(element)
    }
}
displayAll(comp1.list)
       function search() {
        var searjob = $("#input1").val();
        $("#compowner").empty();
     var x=  comp1.displaybyname(searjob);
     if(x.length==0){
        alert('                       ***not found***')
     }
     displayAll(x)
      }
      $("button").on("click", function () {
        search();
      });

      



     