import {plays} from "./Data";

//改进【注：最终结果未必可以体现出所有手法】
//1-提炼函数
//2-变量重命名
//3-以查询取代临时变量
//4-内联变量【当该变量妨碍重构附近代码时】
//5-拆分循环【分离出累加过程】
//6-移动语句【将累加变量的声明与累加过程集中到一起】
//7-拆分阶段
//8-搬移函数
//9-管道取代循环
//10-以多态取代条件表达式【我很喜欢的一个手法】
class PerformanceCalculator{
    constructor(aPerformance,aplay){
        this.performance = aPerformance;
        this.play = aplay;
    }
}
function createStatementData(invoice) {
    const statementData = {};
    statementData.customer = invoice.customer;
    statementData.performances = invoice.performances.map(enrichPerformance);
    statementData.totalVolumeCredits = totalVolumeCredits(statementData);
    statementData.totalAmount = totalAmount(statementData);
    return statementData;

    function enrichPerformance(aPerformance) {
        const calculator = new PerformanceCalculator(aPerformance,playFor(aPerformance));
        const result  = Object.assign({},aPerformance);
        result.play = calculator.play;
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    function amountFor(aPerformance) {
        let result = 0;
        switch (aPerformance.play.type) {
            case "tragedy":
                result = 40000;
                if (aPerformance.audience > 30) {
                    result += 1000 * (aPerformance.audience - 30);
                }
                break;
            case "comedy":
                result = 30000;
                if (aPerformance.audience > 20) {
                    result += 10000 + 500 * (aPerformance.audience - 20);
                }
                result += 300 * aPerformance.audience;
                break;
            default:
                throw new Error(`unknown type: ${aPerformance.play.type}`);
        }
        return result;
    }
    function volumeCreditsFor(aPerformance) {
        let result = 0;
        result += Math.max(aPerformance.audience - 30, 0);
        if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);
        return result;
    }
    function totalVolumeCredits(data) {
        return data.performances.reduce((total,p)=>total+p.volumeCredits,0)
    }
    function totalAmount(data){
        return data.performances.reduce((total,p)=>total+p.amount,0)
    }
}

function statement(invoice){
    return renderPainText(createStatementData(invoice));
}

function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
            minimumFractionDigits: 2 }).format(aNumber);
}

function renderPainText (data) {
    let result = `Statement for ${data.customer}\n`;
    for (let perf of data.performances) {
        result += ` ${perf.play.name}: ${usd(perf.amount / 100)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(data.totalAmount)}\n`;
    result += `You earned ${data.totalVolumeCredits} credits\n`;
    return result;
}

//下面的代码没有使用，可以利用对象的多态性或者分离文件使用
/*function htmlStatement (invoice, plays) {
    return renderHtml(createStatementData(invoice, plays));
}
function renderHtml (data) {
    let result = `<h1>Statement for ${data.customer}</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>";
    for (let perf of data.performances) {
        result += ` <tr><td>${perf.play.name}</td><td>${perf.audience}</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
    }
    result += "</table>\n";
    result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
    result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;
    return result;
}*/

export default statement;