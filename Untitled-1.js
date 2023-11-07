//生成点3
if (starPoint3 >= 0 && mark3 != 0) {
    var dou1 = (centerPint3 - starPoint3 - 15) * 0.5
    var dou2 = (centerPint3 - starPoint3 - 15) * 0.5
    // var dou3 = (centerPint3 - starPoint3) * 0.3
    // var dou4 = (centerPint3 - starPoint3) * 0.2
    //顶部固定200k/30个点
    var dou3 = 10
    var dou4 = 5
    if (i >= starPoint3 - dou1 * 2 && i < starPoint3) {
        iniup3 = iniup3 + 0.5;
        randNum = generateRandomInteger(init - int_val, init + int_val) + iniup3
        if (randNum >= generateRandomInteger(init - int_val, init + int_val) + (mark3 - init) * 0.33 / dou1) {
            randNum = generateRandomInteger(init - int_val, init) + iniup3 - 0.5
        }
        cleft3 = iniup3;
        inidown3.push(randNum);
        inidown3Index = inidown3.length;
    }
    //  上升底下抖动
    if (i >= starPoint3 && i < starPoint3 + dou1) {
        cleft3 = cleft3 + (mark3 - init) * 0.15 / dou1
        randNum = generateRandomInteger(init - int_val, init + int_val) + cleft3
        left3 = cleft3 - 5
        cright3.push(randNum);
        cright3Index = cright3.length;

    }
    //上升波形
    if (i >= starPoint3 + dou1 && i < starPoint3 + dou1 + dou2) {
        left3 = left3 + (mark3 - init) * 0.625 / dou2
        randNum = generateRandomInteger(init - int_val, init + int_val) + left3
        if (i % 2 === 0 && i > starPoint3 + dou1) {
            randNum = randNum - M1_updown3
        }
        right3.push(randNum);
        right3Index = right3.length;
    }
    //上升波峰抖动波形
    if (i >= starPoint3 + dou1 + dou2 && i < starPoint3 + dou1 + dou2 + dou3) {
        randNum = generateRandomInteger(mark3 - int_val1 - 1, mark3)
        if (document.getElementById("mySelect2").value === "s1") {
            randNum = generateRandomInteger(mark3 - int_val1, mark3 + topNum)
        }
    }
    //峰值出现波形
    if (i >= starPoint3 + dou1 + dou2 + dou3 && i <= starPoint3 + dou1 + dou2 + dou3 + dou4 * 2) {
        randNum = generateRandomInteger(mark3 - int_val1 - 1, mark3)
        if (document.getElementById("mySelect2").value === "s2") {
            randNum = generateRandomInteger(mark3 - int_val1, mark3 + topNum)
        }
    }

    //下降波峰抖动波形
    if (i > starPoint3 + dou1 + dou2 + dou3 + dou4 * 2 && i <= starPoint3 + dou1 + dou2 + dou3 * 2 + dou4 * 2) {
        randNum = generateRandomInteger(mark3 - int_val1 - 1, mark3)
        if (document.getElementById("mySelect2").value === "s3") {
            randNum = generateRandomInteger(mark3 - int_val1, mark3 + 3)
        }
        // right3 = 7
    }

    //下降波形
    if (i > starPoint3 + dou1 + dou2 + dou3 * 2 + dou4 * 2 && i <= starPoint3 + dou1 + dou2 * 2 + dou3 * 2 + dou4 * 2) {
        right3Index = right3Index - 1;
        randNum = right3[right3Index];
    }
    // //底下抖动
    if (i > starPoint3 + dou1 + dou2 * 2 + dou3 * 2 + dou4 * 2 && i <= starPoint3 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2) {
        cright3Index = cright3Index - 1;
        randNum = cright3[cright3Index];
    }
    if (i > starPoint3 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2 && i <= starPoint3 + dou1 * 2 + dou2 * 2 + dou3 * 2 + dou4 * 2 + dou1 * 2) {
        inidown3Index = inidown3Index - 1;
        randNum = inidown3[inidown3Index]
    }
}