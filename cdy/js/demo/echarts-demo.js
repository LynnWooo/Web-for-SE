$(function () {
    // Movies Per Year - Echart
    var barChart_year = echarts.init(document.getElementById("echarts-bar-chart-year"));
    var baroption = {
        title : {
            text: 'Movies Per Year'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Total']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Total',
                type:'bar',
                data:[12.0, 24.9, 57.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 10.2, 42.4, 21.3, 34.5],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    barChart_year.setOption(baroption);

    window.onresize = barChart_year.resize;

});

function moviesPerMonth() {
    // alert('msg');
    // Movies Per Month - Echart
    var barChart_month = echarts.init(document.getElementById("echarts-bar-chart-month"));
    var baroption = {
        title : {
            text: 'Movies Per Month'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Total']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Total',
                type:'bar',
                data:[12.0, 24.9, 57.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 10.2, 42.4, 21.3, 34.5],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    barChart_month.setOption(baroption);

    window.onresize = barChart_month.resize;

}

function moviesPerWeekday() {
    // alert('msg');
    // Movies Per Month - Echart
    var barChart_weekdays = echarts.init(document.getElementById("echarts-bar-chart-weekday"));
    var baroption = {
        title : {
            text: 'Movies Per Weekday'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Total']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Total',
                type:'bar',
                data:[12.0, 24.9, 57.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 10.2, 42.4, 21.3, 34.5],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    barChart_weekdays.setOption(baroption);

    window.onresize = barChart_weekdays.resize;

}

function moviesPerSeason() {
    // alert('msg');
    // Movies Per Month - Echart
    var barChart_season = echarts.init(document.getElementById("echarts-bar-chart-season"));
    var baroption = {
        title : {
            text: 'Movies Per Season'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Total']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Total',
                type:'bar',
                data:[12.0, 24.9, 57.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 10.2, 42.4, 21.3, 34.5],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    barChart_season.setOption(baroption);

    window.onresize = barChart_season.resize;

}

function moviesPerCategory() {
    // alert('msg');
    // Movies Per Month - Echart
    var barChart_category = echarts.init(document.getElementById("echarts-bar-chart-category"));
    var baroption = {
        title : {
            text: 'Movies Per Season'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['Total']
        },
        grid:{
            x:30,
            x2:40,
            y2:24
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'Total',
                type:'bar',
                data:[12.0, 24.9, 57.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3, 10.2, 42.4, 21.3, 34.5],
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
        ]
    };
    barChart_category.setOption(baroption);

    window.onresize = barChart_category.resize;

}
