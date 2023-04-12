import { useState } from "react";
import candleOne from "../images/candleOne.jpg"


export const useItems = () => {

    //Not a real situation just practicing with custom hooks otherwise I would call the data with axios 
    const [items, setItems] = useState([
        { id: 1, name: 'Yankee Candle', pic: candleOne, price: 16.00, scent: 'Vanilla', qty: 0 },
        { id: 2, name: 'Yankee Candle', pic: candleOne, price: 17.00, scent: 'Strawberry', qty: 0 },
        { id: 3, name: 'Yankee Candle', pic: candleOne, price: 18.00, scent: 'Chocolate', qty: 0 },
        { id: 4, name: 'Yankee Candle', pic: candleOne, price: 19.00, scent: 'Chamomile', qty: 0 },
        { id: 5, name: 'Yankee Candle', pic: candleOne, price: 22.00, scent: 'Lavender', qty: 0 },
        { id: 6, name: 'Yankee Candle', pic: candleOne, price: 12.00, scent: 'Velvet', qty: 0 },
    ])


    const [basketItems, setBasketItems] = useState([]);
    //nav display number of items
    const [itemNumber, setItemNumber] = useState(0);

    //popup message from main when user has added an item from main to basket
    const [itemAdded, setItemAdded] = useState(false);
    const [total, setTotal] = useState(0);

    //how many of the same item a customer can have
    const [maxQty, setMaxQty] = useState("");





    //from main js basket will only add each item once (qty will on ever be one if user has clicked and then can up the qty in basket.js), protecting from spam clicks
    const addToBasket = (id) => {

        const inBasket = items.map((item) => {
            if (item.id === id) {

                if (item.qty === 0) {

                    setTotal(prev => prev + item.price)
                    setBasketItems(prevBasketItems => [...prevBasketItems, { ...item, qty: 1 }]);
                    setItemNumber(prev => prev + 1)
                    setItemAdded(true);

                    setTimeout(() => {
                        setItemAdded(false); // set itemAdded state back to false after 3 seconds
                    }, 3000);
                }
                return { ...item, qty: item.qty + 1 };
            } else {
                return item;
            }
        });
        setItems(inBasket)
    }

    //when user is in the basket and clicks (+) increments basket
    const basketIncrement = (id) => {

        const itemIncrement = basketItems.map(item => {

            if (item.id === id && item.qty === 5) {
                //items will not go higher than and will be alert user this with timeout below
                setMaxQty("Due to high demand only 5 products per customer");
                setTimeout(() => {
                    setMaxQty("");
                }, 3000)

                return item
            }
            else if (item.id === id && item.qty < 5) {

                setItemNumber(prev => prev + 1)
                setTotal(prev => prev + item.price);
                return { ...item, qty: item.qty + 1 }
            } else {
                return item
            }
        })

        setBasketItems(itemIncrement);

    }

    //when user is in the basket and clicks (-) decrements basket
    const basketDecrement = (id) => {
        //condition where qty has to be greater than zero
        const minusBasketQty = basketItems.map(item => {

            if (item.id === id && item.qty > 0) {
                setTotal(prev => prev - item.price)
                return { ...item, qty: item.qty - 1 }

            } else {
                return item
            }

        }).filter(item => item.qty !== 0)

        //when one of the items is 0 in the basket this will reset the main back to 0, so if user wants to re-add the message will appear you have added one item
        const mainItemPage = items.map((item) => {
            if (item.id === id && item.qty === 1) {

                return { ...item, qty: 0 };

            } else {

                return item;
            }
        });
        setItems(mainItemPage)
        setItemNumber(prev => prev - 1)
        setBasketItems(minusBasketQty)
    }



    return [items, addToBasket, itemNumber, basketItems, itemAdded, basketIncrement, basketDecrement, maxQty, total];

}