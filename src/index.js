import * as React from 'react';
import {View, Text} from 'react-native';

import Header from "./components/header/Header";


class Index extends React.Component{
    render() {
        return(
            <View>
                <Header />
            </View>
        )
    }
}

export default Index;