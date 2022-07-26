
// Given two strings, find the number of common characters between them.


function solution(s1, s2) {

    let amount = 0;

    const arr1 = s1.split('');
    const arr2 = s2.split('');

    for (let i = 0; i < arr1.length; i++) {
        const index = arr2.indexOf(arr1[i]);
        if (index !== -1) {
            arr2.splice(index, 1);
            amount += 1
        }
    }

    return amount
}
