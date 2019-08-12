//剧目数据
export const plays = {
    "hamlet": {"name": "Hamlet", "type": "tragedy"},//剧目的名称及类型
    "as-like": {"name": "As You Like It", "type": "comedy"},
    "othello": {"name": "Othello", "type": "tragedy"}
};

//账单数据
export const invoices = {
    "customer": "BigCo",//消费者名称
    "performances": [//演出
        {
            "playID": "hamlet",//剧目
            "audience": 55 //观众数量
        },
        {
            "playID": "as-like",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
}