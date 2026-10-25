const sum=require("./app");
if(sum(10,20)===30){
    console.log("test success");
}
else{console.log("test failure");
    process.exit(1);
}
