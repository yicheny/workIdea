//剧团数据展示
import React from 'react';
import {Container} from "../../../component";
import {plays,invoices} from "./Data";

//打印账单详情--初始【反模式】
function statement (invoice, plays) {
    let totalAmount = 0;//赚取总额
    let volumeCredits = 0;//观众量积分
    let result = `Statement for ${invoice.customer}\n`;
    const format = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format;

    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        let thisAmount = 0;

        switch (play.type) {
            case "tragedy":
                thisAmount = 40000;
                if (perf.audience > 30) {
                    thisAmount += 1000 * (perf.audience - 30);
                }
                break;
            case "comedy":
                thisAmount = 30000;
                if (perf.audience > 20) {
                    thisAmount += 10000 + 500 * (perf.audience - 20);
                }
                thisAmount += 300 * perf.audience;
                break;
            default:
                throw new Error(`unknown type: ${play.type}`);
        }

        // add volume credits
        volumeCredits += Math.max(perf.audience - 30, 0);
        // add extra credit for every ten comedy attendees
        if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

        // print line for this order
        result += ` ${play.name}: ${format(thisAmount/100)} (${perf.audience} seats)\n`;
        totalAmount += thisAmount;
    }

    result += `Amount owed is ${format(totalAmount/100)}\n`;
    result += `You earned ${volumeCredits} credits\n`;
    return result;
}

//改进【注：最终结果未必可以体现出所有手法】
//1-提炼函数
//2-变量重命名
//3-以查询取代临时变量
//4-内联变量【当该变量妨碍重构附近代码时】
//5-拆分循环【分离出累加过程】
//6-移动语句【将累加变量的声明与累加过程集中到一起】
function playFor(aPerformance) {
    return plays[aPerformance.playID];
}
function amountFor(aPerformance) {
    let result = 0;
    switch (playFor(aPerformance).type) {
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
            throw new Error(`unknown type: ${playFor(aPerformance).type}`);
    }
    return result;
}
function volumeCreditsFor(aPerformance) {
    let result = 0;
    result += Math.max(aPerformance.audience - 30, 0);
    if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
    return result;
}
function usd(aNumber) {
    return new Intl.NumberFormat("en-US",
        { style: "currency", currency: "USD",
            minimumFractionDigits: 2 }).format(aNumber);
}
function totalVolumeCredits() {
    let volumeCredits = 0;
    for (let perf of invoices.performances){
        volumeCredits += volumeCreditsFor(perf);
    }
    return volumeCredits;
}
function appleSauce(){
    let totalAmount=0;
    for (let perf of invoices.performances){
        totalAmount += amountFor(perf)
    }
    return totalAmount;
}
function statement2 (invoice) {
    let result = `Statement for ${invoice.customer}\n`;
    for (let perf of invoice.performances) {
        result += ` ${playFor(perf).name}: ${usd(amountFor(perf) / 100)} (${perf.audience} seats)\n`;
    }
    result += `Amount owed is ${usd(appleSauce())}\n`;
    result += `You earned ${totalVolumeCredits()} credits\n`;
    return result;
}

function Part1(props) {
    // console.log(statement(invoices, plays));
    console.log(statement2(invoices, plays));
    return <Container>
        <h3>Part1-第一个案例</h3>
    </Container>
}

export default Part1;