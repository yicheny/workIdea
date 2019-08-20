export function sleep(ms) {
    return new Promise(reslove=>setTimeout(reslove,ms))
}

export function mergeCn(...cns) {
    return [...cns].join(' ')
}