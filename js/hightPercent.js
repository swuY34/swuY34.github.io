


function calculatePercentOfHight () 
{
    var a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100) // 计算百分比
        
    return result
};

// 页面百分比
function percentGoUpButton()
{
    let up = document.querySelector("#go-up"), // 获取按钮
        percentResult = calculatePercentOfHight()

    if (percentResult 