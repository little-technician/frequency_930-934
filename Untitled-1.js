option2 = {
    //             x：直角坐标系内绘图网格与左侧距离，数值单位 px，支持百分比（字符串），如：50%
    //             x2：直角坐标系内绘图网格与右侧距离，数值单位 px，支持百分比（字符串），如：50%
    //             y：直角坐标系内绘图网格与顶部距离，数值单位 px，支持百分比（字符串），如：50%
    //              y2：直角坐标系内绘图网格与底部距离，数值单位 px，支持百分比（字符串），如：50%
    grid: {
        x: 65,
        y: 40,
        x2: 5,
        y2: 50
    },
    title: [
        {
            top: "14",
            left: '0',
            text: 'Ref:-20.00dBm',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "14",
            left: '300',
            text: '#Att:0dB',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "40",
            text: 'Log\n10\ndB/',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "195",
            text: 'LgAv',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "258",
            text: '1M\tP',
            textStyle: {
                //文字颜色
                color: '#e8ea6d',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "280",
            text: '2S\tP',
            textStyle: {
                //文字颜色
                color: '#2c7e3e',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "302",
            text: '3S\tP',
            textStyle: {
                //文字颜色
                color: '#48a3a3',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "324",
            text: '4S\tP',
            textStyle: {
                //文字颜色
                color: '#af25af',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "365",
            text: 'FC',
            left: '18',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            top: "500",
            text: 'ETrg\nFFT',
            left: '2',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            }
        },
        {
            text: 'Start:' + StartFrequency + ' MHz',
            bottom: '20',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23

            },
        },
        {
            text: 'Stop:' + StopFrequency + ' MHz',
            bottom: '20',
            left: '640',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23

            },
        },
        {
            text: '#Res BW:1.000 kHz',
            bottom: '0',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            },
        },
        {
            text: '#VBW:3.000 kHz',
            left: 'center',
            bottom: '0',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            },
        },
        {
            text: 'Sweep:617.31 ms\t\t\t\t\t\t\t ',
            left: '640',
            bottom: '0',
            textStyle: {
                //文字颜色
                color: '#000000',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 23
            },
        },
        //画y轴刻度
        {
            top: "77",
            left: '60',
            text: '-30.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "135",
            left: '60',
            text: '-40.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "194",
            left: '60',
            text: '-50.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "253",
            left: '60',
            text: '-60.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "313",
            left: '60',
            text: '-70.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "371",
            left: '60',
            text: '-80.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "429",
            left: '60',
            text: '-90.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "489",
            left: '60',
            text: '-100.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "549",
            left: '60',
            text: '-110.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
        {
            top: "608",
            left: '60',
            text: '-120.00',
            textStyle: {
                //文字颜色
                color: '#C0C0C0',
                //字体风格,'normal','italic','oblique'
                fontStyle: 'normal',
                //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
                fontWeight: 'normal',
                //字体系列
                fontFamily: 'UniFont',
                fontSize: 18
            }
        },
    ],
    backgroundColor: '#000000',
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 59 //x轴数据距离x轴的距离
            , show: false
        },
        data: x_data,
        splitLine: {
            show: true, //让网格显示
            lineStyle: {
                //网格样式
                color: ['#ffffff'], //网格的颜色
                width: 1, //网格的宽度
                type: 'solid' //网格是实实线，可以修改成虚线以及其他的类型
            }
        },
    },
    yAxis: {
        type: 'value',
        min: -120,
        max: -20,
        interval: 10,
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#ffffff'],
                width: 1,
                type: 'solid'
            }
        },
        axisLabel: {
            show: false,
            color: '#000000',
            // inside: true,
        }
    },
    series: [
        {
            data: y_data,
            type: 'line',
            color: '#000000', //改变折线点的颜色
            lineStyle: {
                color: '#0000FF', //改变折线颜色
                width: 1
            },
            markPoint: {
                data: [
                    {
                        coord: ['' + x_data[getMaxIndex(y_data, starPoint1 - 5, starPoint1 + 65)], '' + y_data[getMaxIndex(y_data, starPoint1 - 5, starPoint1 + 65)]],
                        value: '1',
                        symbol: "circle",
                        symbolSize: 5,
                        animation: true,
                        label: {
                            offset: [0, -10],
                            show: true,
                            color: '#000000',
                            fontSize: 23
                        },
                        itemStyle: { color: '#000000' }
                    },
                    {
                        coord: ['' + x_data[getMaxIndex(y_data, starPoint2 - 5, starPoint2 + 65)], '' + y_data[getMaxIndex(y_data, starPoint2 - 5, starPoint2 + 65)]],
                        value: '2',
                        symbol: "circle",
                        symbolSize: 5,
                        animation: true,
                        label: {
                            offset: [0, -10],
                            show: true,
                            color: '#000000',
                            fontSize: 23
                        },
                        itemStyle: { color: '#000000' }
                    },
                    {
                        coord: ['' + x_data[getMaxIndex(y_data, starPoint3 - 5, starPoint3 + 65)], '' + y_data[getMaxIndex(y_data, starPoint3 - 5, starPoint3 + 65)]],
                        value: '3',
                        symbol: "circle",
                        symbolSize: 5,
                        animation: true,
                        label: {
                            offset: [0, -10],
                            show: true,
                            color: '#000000',
                            fontSize: 23
                        },
                        itemStyle: { color: '#000000' }
                    },
                ],
            },
        }
    ]
};
//判断显示几个峰值
if (starPoint1 > 0 && mark1 != 0) {
    var title_m = {
        top: '-6',
        right: '200',
        text: 'M1:' + x_data[getMaxIndex(y_data, starPoint1 - 5, starPoint1 + 65)].toFixed(2) + ' MHz',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    var title_db = {
        top: '-5',
        right: '0',
        text: getMax(y_data, starPoint1 - 5, starPoint1 + 65) + 'dBm',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    option2.title.push(title_m)
    option2.title.push(title_db)
}
if (starPoint2 > 0 && mark2 != 0) {
    var title_m = {
        top: '14',
        right: '200',
        text: 'M2:' + x_data[getMaxIndex(y_data, starPoint2 - 5, starPoint2 + 65)].toFixed(2) + ' MHz',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    var title_db = {
        top: '14',
        right: '0',
        text: getMax(y_data, starPoint2 - 5, starPoint2 + 65) + 'dBm',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    option2.title.push(title_m)
    option2.title.push(title_db)
}
if (starPoint3 > 0 && mark3 != 0) {
    var title_m = {
        top: '32',
        right: '200',
        text: 'M3:' + x_data[getMaxIndex(y_data, starPoint3 - 5, starPoint3 + 65)].toFixed(2) + ' MHz',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    var title_db = {
        top: '32',
        right: '0',
        text: getMax(y_data, starPoint3 - 5, starPoint3 + 65) + 'dBm',
        textStyle: {
            //文字颜色
            color: '#000000',
            //字体风格,'normal','italic','oblique'
            fontStyle: 'normal',
            //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
            fontWeight: 'normal',
            //字体系列
            fontFamily: 'UniFont',
            fontSize: 23
        }
    }
    option2.title.push(title_m)
    option2.title.push(title_db)
}