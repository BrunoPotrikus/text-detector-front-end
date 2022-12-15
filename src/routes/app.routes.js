import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 

import ImagePickerComponent from "../pages/Home/ImagePickerComponent";
import callApiPython from "../pages/Home/helperFunction";

const AppStack = createStackNavigator();

function AppRoutes () {

    return(

        <ImagePickerComponent onSubmit={callApiPython}/>

    );

}

export default AppRoutes;