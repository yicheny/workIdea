export function sleep(ms:number) {
    // @ts-ignore
    return new Promise(reslove=>setTimeout(reslove,ms))
}