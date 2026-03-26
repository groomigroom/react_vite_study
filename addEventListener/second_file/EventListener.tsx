const rootDiv = document.getElementById('root');
if (rootDiv) {
    rootDiv.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e
        console.log('mouse click occurs.', isTrusted, target, bubbles)
    }
    rootDiv.onclick = (e: Event) => {
        const { isTrusted, target, bubbles } = e
        console.log('mouse click also occurs on rootDiv', isTrusted, target, bubbles)
    }
}
export default function EventListener() {
    return (
        <div>
            온 클릭
        </div>
    )
}
