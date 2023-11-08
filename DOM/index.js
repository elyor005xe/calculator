"use strict";

const display = document.querySelector(".display");

const buttons = document.querySelectorAll(".button");
let str ="0";
display.value =str;

const equal =(str)=> {
let fidtName =0;
let secondNum = 0;
let result = 0;
for (let i=0; i<str.length; i++){
if(str[i]==="-"){
  fidtName = +str.slice(0,i);
  secondNum = +str.slice(i+1);
  result = fidtName - secondNum;
}else if(str[i]==="+"){
  fidtName = +str.slice(0,i);
  secondNum = +str.slice(i+1);
  result = fidtName + secondNum;

}else if(str[i]==="/"){
  fidtName = +str.slice(0,i);
  secondNum = +str.slice(i+1);
  result = fidtName / secondNum;

}else if(str[i]==="*"){
  fidtName = +str.slice(0,i);
  secondNum = +str.slice(i+1);
  result = fidtName * secondNum;

}else if(str[i]==="%"){
  fidtName = +str.slice(0,i);
  secondNum = +str.slice(i+1);
  result = fidtName % secondNum;
}
}
return result;
};

buttons?.forEach((b)=> {
  b.addEventListener("click", (e)=>{
    if(str[0]==="0"){
      str="";
      display.value = str;
    }  else if (e.target.textContent === "="){
      str = equal (str);
      display.value = str;
    }
     else if (e.target.textContent === "DE"){
      str = str.slice(0,str.length - 1);
      display.value = str;
    }
     else if (e.target.textContent === "C"){
      str = "";
      display.value = str;
    }
    else {
    str = str + e.target.textContent;
    display.value = str;

    }
  });
});

