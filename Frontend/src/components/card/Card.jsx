import React from 'react'

const Card = ({item = { product: '', necklace: '' }}) => {
    return (
        <div class="card">
            <img src={item.imagea} class="card-img-top object-cover" alt="Hollywood Sign on The Hill" width={'100px'} height={'220px'} />
            <div class="card-body">
                <div className="d-flex justify-content-between">
                    <h5 class="card-title text-black">{item.name}</h5>
                    <h5 class="card-title text-black">NPR.{item.price}</h5>
                </div>
                <hr />
                <p className="text-black">
                    {item.description}
                </p>
                <button className="btn w-100 btn-outline-black">
                    View more
                </button>
            </div>
        </div>
    )
}

export default Card