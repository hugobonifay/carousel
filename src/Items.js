const data = [...Array(1).keys()].map(d => ({
    title: 'Mission ' + String(d),
    text: 'La grande mission ' + String(d),
}));

const Items = () => (
    <div className="Box">
        {data.map((d,i) => 
            <div key={i}>
                <h2>{d.title}</h2>
                <p>{d.text}</p>
                <p>{d.text}</p>
                <p>{d.text}</p>
                <p>{d.text}</p>
            </div>
        )}
    </div>
);

export default Items;