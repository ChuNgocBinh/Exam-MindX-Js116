// INPUT [60, 40, 55, 75, 64] thì OUTPUT là [179, 115]
function alternatingSums(array) {
    let row1 = [];
    let row2 = [];
    array.forEach((element, index) => {
        if (index % 2 !== 0) {
            row2.push(element)
        } else {
            row1.push(element)
        }
    });
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < row1.length; i++) {
        sum1 += row1[i];
    }
    for (i = 0; i < row2.length; i++) {
        sum2 += row2[i];
    }
    let myArray = [sum1, sum2];
    console.log(myArray)
}
alternatingSums([60, 40, 55, 75, 64])
