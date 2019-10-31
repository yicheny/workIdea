export function useOnClickOutside(node,event) {
    document.addEventListener('click',handleClick,true);
    // document.removeEventListener('click',handleClick,true);

    function handleClick(e) {
        if(!node.contains(e.target)) {
            return event()
        }
    }
}