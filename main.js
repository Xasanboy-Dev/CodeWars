var getMilitaryTime = function (input) {
    let split = input.split(" ")
    let r = 0
    let text = ""
    let time = ""
    for (r in input) {
        if (input[r] == ":") {
            text += " "
        } else if (Number(input[r]).toString() == "NaN") {
            time += input[r]
        }
        else {
            text += input[r]
        }
    }
    let arr = text.split(" ")
    let one
    if (time == "AM") {
        one = (Number(arr[0]) - 12) < 0 ? arr : `0${Number(arr[0]) - 12}`
    } else {
        one = (Number(arr[0]) + 12) >= 24 ? arr : `${Number(arr[0]) + 12}`
    }
    let d = 0
    if (one.length == 2) {
        let tea = ""
        for (d in arr) {
            if (d == 0) {
                tea += one + ":"
            } else {
                if (d == arr.length - 1) {
                    tea += arr[d]
                } else {
                    tea += arr[d] + ":"
                }
            }
        }
        console.log(tea)
    } else {
        console.log(one.join(":"))
    }
}
getMilitaryTime('12:24:25PM')
