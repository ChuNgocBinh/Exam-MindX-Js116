// ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH']
function allLongestStrings(inputArray) {
    let myArray = [];
    for (i = 0; i < inputArray.length; i++) {
        let maxLength = inputArray[0].length;
        if (inputArray[i].length > maxLength) {
            maxLength = inputArray[i]
            myArray.push(inputArray[i])
        }
    }
    console.log(myArray)
}
allLongestStrings(['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'])




