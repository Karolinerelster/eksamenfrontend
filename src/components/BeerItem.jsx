import ButtonAmount from "./ButtonAmount"

export default function BeerItem (props) {
    return (
        <article>
            <div style={{cursor: "pointer"}} onClick={ () => { props.setSliderDisplay(prevState => !prevState); props.setSlideIndex(props.index) } }>
                <img src={`./images/beers/${props.label}`} alt={props.description.overallImpression}/>
                <h4>{props.name}</h4>
                <p>{props.category} - {props.alc}%</p>
                <p>{props.price} DKK</p>
            </div>
            <div className="button-container">
                <ButtonAmount name={props.name} available={props.available} index={props.index} basket={props.basket} setBasket={props.setBasket} />
                <button className="info" onClick={ () => { props.setSliderDisplay(prevState => !prevState); props.setSlideIndex(props.index) } } STYLE="text-transform:lowercase">i</button>
            </div>
        </article>
    )
}