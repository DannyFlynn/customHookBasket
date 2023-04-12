import { useContext } from "react";
import { ShopContext } from "../App";

function Main() {

    const shopItems = useContext(ShopContext);
    return (
        <div className="d-flex flex-md-row justify-content-around flex-wrap p-md-4">
            {shopItems.items.map(item => (
                <div key={item.id} className="card w-25 m-md-3 shadow p-3 mb-5 bg-white rounded">
                    <h3>{item.name}</h3>
                    <p className="my-2">{item.scent}</p>
                    <div className="img-container my-3">
                        <img src={item.pic} class="img" alt="Responsive image" />
                    </div>
                    <p className="my-2">£{item.price.toFixed(2)}</p>

                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-success my-3 w-50"
                            onClick={() => shopItems.addToBasket(item.id)}>Add</button>
                    </div>
                </div>
            ))}
            {shopItems.itemAdded ?
                <div class="w-50 alert alert-secondary position-fixed top-10 start-25" role="alert">

                    <span>Your item has been added</span>

                </div>
                :
                false}
        </div>
    )
}

export default Main