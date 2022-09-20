import React from 'react';
import PromoText from "../PromoText/PromoText";
import MealList from "./MealList/MealList";

const Meals = () => {
    return (
        <React.Fragment>
          <PromoText/>
          <MealList/>
        </React.Fragment>
    );
};

export default Meals;