import '../App.css'

export type card = {
    typeTransaction: string;
    value: number;
}

function HistoryCard(props: card) {
    return (
        <>
        <div className='historyCardBox'>
            <h2>{props.typeTransaction}:{props.value}$</h2>
        </div>
        </>
    );
}

export default HistoryCard