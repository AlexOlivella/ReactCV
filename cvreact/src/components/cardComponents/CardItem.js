import React from 'react'

function CardItem(props) {

    return (
        <>
            <li className="cards__item">
                {props.cardType === "Link" ?
                    <a className="cards__item__link" href={props.path} onClick={() => {
                        if (props.externalLink.exists) {
                            window.open(props.externalLink.link)
                        }
                    }}>

                        <figure className={props.boolLabel ? "cards__item__pic-wrap" : "cards__item__pic-wrap-no-label"} data-category={props.label}>
                            <img
                                src={props.src}
                                alt="Info"
                                className="cards__item__img"
                            />
                        </figure>

                        <div className="cards__item__info">
                            <h5 className="cards__item__text">
                                {props.text}
                            </h5>
                        </div>
                    </a>
                    :
                    <div>
                    </div>}
            </li>
        </>
    )
}

export default CardItem
