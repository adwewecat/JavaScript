// alert('Hi JavaScript');
// var bossName = 'cún Khải'
// var bossAge  = 25
// var senName = 'Dũng'
// var senAge  = '0397495772'
// alert(bossAge)
// =========================================================

// var fullName = 'Nguyễn Anh Dũng';
// alert(fullName);

// var message ='Học về built-in functions trong JS';
// var warnMessage ='Đây là message cảnh báo';
// var errorMessage ='Đây là message lỗi';
// console.log(message);
// console.warn(warnMessage);
// console.error(errorMessage);
// var a = '15' - '5';

// ======================================================================
// var number = 10

// var a = ++number * 3 - number-- * 2
// var b = number++ * 2 - --number * 3

// console.log(a + b)
// ===========================================================================

// var socialType = 'email';
// var isVerified =false;
// var result;

// if((socialType =='google' || socialType =='facebook') || (socialType =='email' && isVerified == true)){
//     result = true;
// }else{
//     result = false;
// }
// console.log(result);



// function run(input) {
//     if((typeof input) == 'string'){
//         output = true;
//     }
//     else{
//         output = false;
//     }
//     return output;
//     console.log(output)
// }
// run('111111111');

// ===================================================================

// console.log(Boolean(1)) // true
// console.log(Boolean(['BMW'])) // true
// console.log(Boolean({ name: 'Miu' })) // true
// console.log(!!'hi') // true
// console.log(!!1) // true
// console.log(!!'f8') // true
// console.log(!!['Mercedes']) // true

// console.log(!!false) // false
// console.log(!!0) // false
// console.log(!!'') // false
// console.log(!!null) // false
// console.log(!!undefined) // false
// console.log(!!NaN) // false


// function run(a, b, c) {
//     a=1;
//     b=0;
//     c=2;
//     var result = a || b || c;
//     console.log(result);
// }
// run();


// var commentText ='"Học chưa hiểu là học chưa đủ!"';
// var authorName = 'Sơn Đặng:';
// var fullCommentText = `${authorName} ${commentText}`;

// var commentText ='Để hiển thị được chuỗi chứa dấu gạch chéo ngược (\\) ta phải thêm dấu \\ vào trước hoặc sau nó';
// console.log(commentText);


// =====================================================================

// function run(commentText) {
//     commentText = commentText.length;
//     console.log(commentText)
// }

// function run(title, description) {
//     if(title.indexOf('Javascript') != -1 && description.indexOf('Javascript') != -1 ){
//         result = true;
//         console.log(result);
//     }else{
//         result = false;
//         console.log(result);
//     }
//     return result;
// }

// Cắt chuỗi
// function run(title) {
//     language = title.slice(4,14);
//     rest = title.slice(14);
//     console.log(rest);
// }


// function run(content) {
//     console.log(content.replace(/JS/g, 'Javascript'));
//     return content.replace(/JS/g, 'Javascript');
    
// }


// Check số nguyên dương
// function run(number) {
    
//     if(number > 0 && !isNaN(number) && (typeof number) =='number' && Number.isInteger(number)){
//         result =true;
//         Number.isInteger(number)
//         console.log(result);
//     }
//     else{
//         result =false;
//         Number.isInteger(number)
//         console.log(result);
//     }
// }


// var anArray = []
// console.log(anArray.length)
// if(anArray.length == 0){
//     anArray.splice(0,0,'Cat','Mouse') 
//     console.log(anArray)
// } 
// if(anArray.length == 1){
//     anArray.splice(0,0,'Elephant') 
//     console.log(anArray)
// } 
// if(anArray.length > 2){
//     anArray.splice(1,1,'Monkey','Tiger') 
//     console.log(anArray)
// } 


// function sum(a,b) {
//     if (typeof (a,b) =='number'
//     && typeof (a,b) !='undefined'
//     && !isNaN(a,b)
//     ) {
//         return a+b;
//     }
//     else{
//         return false;
//     }
//     }

// var result = sum(1,2);
// console.log(result)


// function stringInString(needle , haystack) {
//     if (typeof (needle,haystack) === 'string' 
//     && haystack.indexOf(needle) !== -1 
//     && (haystack,needle).length > 0) {
//             return false;
//     }
//     else {
//         return false;
//     }
// }

// function stringInString(needle, haystack) {
//     if (needle.length > 0 && haystack.length > 0 && haystack.indexOf(needle) != -1) {
//         return true;
//     }
//     return false;
// }


// function checkIdo(listIdos,myido){
//     if(Array.isArray(listIdos) && typeof(myido) === 'string' && listIdos.indexOf(myido) !== -1)
//     {
//         return true
//     }
//     else{

//         return false
//     }
// }

// function checkIdo(listIdos, myidol) {
//     return Array.isArray(listIdos) && typeof(myidol) === 'string' && listIdos.indexOf(myidol) !== -1 ? true: false;
// }


// Lấy giá trị trong Array
// var formValues = [
//     { field: 'name', value: 'Sơn Đặng' },
//     { field: 'age', value: 18 },
//     { field: 'address', value: 'Hà Nội' },
// ]

// function getRequestBodyFromValues(formValues) {
//     var items = {}
//     formValues.forEach(function(course , index) {
//         items[course.field] = course.value
//     });
//     console.log(items);
//     return items
    
// }
// getRequestBodyFromValues(formValues);

// var array1 = ['1', '2', 6, 8]
// var array2 = ['2', '6', 9]
// function findEqualValues(array1,array2) {
//     return array1.filter(array => array2.includes(array));
//   };
// console.log(findEqualValues(array1,array2))


var inputs = [0, 1, 2, 8]
function run(inputs) {
    return inputs.map(function(course , index) {
        return course.proto
    });
}
console.log(run(inputs))
