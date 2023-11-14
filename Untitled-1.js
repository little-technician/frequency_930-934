//生成点1
if (starPoint5 >= 0 && mark5 != 0) {
    if (document.getElementById("mySelectWidth1").value === "topWidth1") {
        var dou1 = (centerPint5 - starPoint5 - 10) * 0.5
        var dou2 = (centerPint5 - starPoint5 - 10) * 0.5
        // var dou3 = (centerPint5 - starPoint5) * 0.3
        // var dou4 = (centerPint5 - starPoint5) * 0.2
        //顶部固定200k/30个点
        var dou3 = 5
        var dou4 = 5
    } else {
        var dou1 = (centerPint5 - starPoint5 - 15) * 0.5
        var dou2 = (centerPint5 - starPoint5 - 15) * 0.5
        // var dou3 = (centerPint5 - starPoint5) * 0.3
        // var dou4 = (centerPint5 - starPoint5) * 0.2
        //顶部固定200k/30个点
        var dou3 = 10
        var dou4 = 5
    }
    if (i >= starPoint5 - bottom_width5 && i < starPoint5) {
        iniup5 = iniup5 + 0.5;
        randNum = generateRandomInteger(init - int_val, init + int_val) + iniup5
        if (randNum >= generateRandomInteger(init - int_val, init + int_val) + (mark5 - init) * 0.33 / dou1) {
            randNum = generateRandomInteger(init - int_val, init) + iniup5 - 0.5
        }
        cleft5 = iniup5;
        inidown5.push(randNum);
        inidown5Index = inidown5.length;
    }
    //  上升底下抖动
    if (i >= starPoint5 && i < starPoint5 + dou1) {
        cleft5 = cleft5 + (mark5 - init) * 0.15 / dou1
        randNum = generateRandomInteger(init - int_val, init + int_val) + cleft5
        left5 = cleft5 - M5_updownini
        cright5.push(randNum);
        cright5Index = cright5.length;

    }
    //上升波形
    if (i >= starPoint5 + dou1 && i < starPoint5 + dou1 + dou2) {
        left5 = left5 + (mark5 - init) * 0.625 / dou2
        randNum = generateRandomInteger(init - int_val, init + int_val) + left5
        if (i % 2 === 0 && right5Index > 2) {
            randNum = randNum - M5_updown
        }
        right5.push(randNum);
        right5Index = right5.length;
    }
    //上升波峰抖动波形
    if (i >= starPoint5 + dou1 + dou2 && i < starPoint5 + dou1 + dou2 + dou3) {
        randNum = generateRandomInteger(mark5 - int_val1 - 1, mark5)
        if (document.getElementById("mySelect5").value === "s1") {
            randNum = generateRandomInteger(mark5 - int_val1, mark5 + topNum)
        }
    }
    //峰值出现波形
    if (i >= starPoint5 + dou1 + dou2 + dou3 && i <= starPoint5 + dou1 + dou2 + dou3 + dou4 * 2) {
        randNum = generateRandomInteger(mark5 - int_val1 - 1, mark5)
        if (document.getElementById("mySelect5").value === "s2") {
            randNum = generateRandomInteger(mark5 - int_val1, mark5 + topNum)
        }
    }

    //下降波峰抖动波形
    if (i > starPoint5 + dou1 + dou2 + dou3 + dou4 * 2 && i <= starPoint5 + dou1 + dou2 + dou3 * 2 + dou4 * 2) {
        randNum = generateRandomInteger(mark5 - int_val1 - 1, mark5)
        if (document.getElementById("mySelect5").value === "s3") {
            randNum = generateRandomInteger(mark5 - int_val1, mark5 + topNum)
        }
        // right5 = 7
    }

    //下降波形
    if (i > starPoint5 + dou1 + dou2 + dou3 * 2 + dou4 * 2 && i <= starPoint5 + dou1 + dou2 * 2 + dou3 * 2 + dou4 * 2) {
        right5Index = right5Index - 1;
        randNum = right5[right5Index];
    }
    // //底下抖动
    if (i > starPoint5 + dou1 + dou2 * 2 + dou3 * 2 + dou4 * 2 && i <= starPoint5 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2) {
        cright5Index = cright5Index - 1;
        randNum = cright5[cright5Index];
    }
    if (i > starPoint5 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2 && i <= starPoint5 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2 + bottom_width5) {
        inidown5Index = inidown5Index - 1;
        randNum = inidown5[inidown5Index]
    }
}