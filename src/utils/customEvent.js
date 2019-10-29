export function useOnClickOutside(node,event) {
    document.addEventListener('click',(e)=>{
        if(!node.contains(e.target)){
            event()
        }
    })
}