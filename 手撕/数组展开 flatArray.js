var arr = [1, [2], [3, [4, 5]]];


/**
 * 暴力法
 */
arr.flat(Infinity)


/**
 * reduce
 */

function flatArray(array) {
    if (!Array.isArray(array)) return;

    return array.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatArray(cur) : cur)
    }, [])

}
flatArray(arr) //[1, 2, 3, 4, 5]
