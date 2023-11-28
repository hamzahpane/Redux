import React from "react";
import Counter from "./Penambahan/counter";
import { Provider } from "react-redux";
import store from "../app/store";

const Redux = () =>{

return (


    <div>
        <Provider store={store}>
        <Counter/>
        </Provider>
    </div>

    )


}

export default Redux;