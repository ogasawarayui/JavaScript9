/* Q1 変数の中にtrueまたは、falseが代入された時の処理を作ってください。*/
/*var boolean = true;
var resultText = "";
if (boolean) {
  resultText = "Aの処理"
} else {
  resultText = "Bの処理"
};
console.log(resultText);*/
var resultText = boolean ? "Aの処理" : "Bの処理";
console.log(resultText);
/* Q2  代入された変数の中が5より大きい時にtrueの処理と、5より小さい時にfalseの処理を作ってください。*/
var resultNum = 6 > 5 ? true : false;
console.log(resultNum);
/* Q3 代入された変数の中が5より小さい時にtrueの処理と、5より大きい時にfalseの処理を作ってください。*/
var resultNum = 4 < 5 ? true : false;
console.log(resultNum);
/* Q4 代入された変数の中が10以上の時にtrueの処理と、10以下の時にfalseの処理を作ってください。*/
var resultNum = 10 >= 10 ? true : false;
console.log(resultNum);
/* Q5 代入された変数の中に値が存在する場合はtrue、存在しない場合はfalseの処理にしてください。*/
var str = "ABC"
var resultNum = str === null ? true : false;
console.log(resultNum);
/*NOTでひっくり返す場合*/
var str = "ABC"
var resultNum = !str ? true : false;
console.log(resultNum);