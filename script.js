//First Last6
function firstLast6(arr){
    if(arr[0] == 6 || arr[arr.length - 1] == 6){
        return true;
    }else{
        return false;
    }

}

//has_23
function has23(arr){
    if(arr[0] == 2 || arr[0] == 3 || arr[1] == 2 || arr[1] ==3){
        return true;
    }else{
        return false;
    }
}

//fix_23
function fix23(arr){
    for(var i = 0; i < arr.length - 1; i++){
        if(arr[i] == 2 && arr[i +  1] == 3){
            arr[i + 1] = 0;
        }
    }
    return arr;
}

//countYZ
function countYZ(arr){
    var four = 0;
    if(arr[arr.length - 1] == "y" || arr[arr.length - 1] == "z" || arr[arr.length - 1] == "Z" || arr[arr.length - 1] == "Y") {
        four++;
    }
    for(var i = 0; i < arr.length; i++) {
        if (arr[i+1] == " " && (arr[i] == "y" || arr[i] == "Y" || arr[i] == "z" || arr[i] == "Z")){
            four++;
        }
    }
    return four;
}

//endOther
function endOther(x,y){
    var p = x.toLowerCase();
    var q = y.toLowerCase();
    if(p.substring(p.length - q.length, p.length) == q) {
        return true;
    }else if(q.substring(q.length - p.length, q.length) == p){
        return true;
    }else{
        return false;
    }
}

//StarOut
function starOut(str){
    var monkey = "";
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+1) != "*" && str.substring(i-1, i) != "*" && str.substring(i+1, i+2) != "*"){
            monkey += str.substring(i, i+1);
        }
    }
    return monkey;
}

//getSandwich

function getSandwich(str){
    var beg = str.indexOf("bread") + 5;
    var end = str.lastIndexOf("bread");
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if(str.substring(i, i+5) == "bread"){
            count++;
        }
    }
    if(count >= 2){
        return str.substring(beg, end);
    }else{
        return "";
    }
}

//canBalance


function canBalance (nums) {
    var one = 0;
    var two = 0;
    for (var i = 0; i < nums.length; i++){
        two += nums[i]; //adding all nums together
    }
    for (var i = 0; i <= nums.length - 2; i++){
        one += nums[i];
        two -= nums[i];
        if (one == two){
            return true;
        }
    }
    return false;
}

//countClumps

function countClumps (num){
    var clum = -1;
    var clumps = 0;
    for (var i = 0; i < num.length; i++){
        if (num[i] == num[i+1] && num[i] != clum){
            clumps += 1;
            clum = num[i];
        } else {
            if (num[i] != clum){
                clum = -1
            }
        };
    }
    return clumps;
}

//evenlySpaced

function evenlySpaced(a,b,c) {
    return (a - b == c - a) || (b - a == c - b) || (c - b == a - c);
}