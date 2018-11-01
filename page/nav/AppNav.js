import React, {Component} from 'react';
import {createStackNavigator , createBottomTabNavigator} from 'react-navigation';
import RanKing from './../ranking/RanKing';
import Recommend from './../recommend/Recommend';
import DianTai from './../dianTai/DianTai';
import Mv from "../mv/Mv";
import My from './../my/My';
import Entypo from 'react-native-vector-icons/Entypo';

export default class AppNavigation extends Component<Props> {
    render() {
        return <AppStack/>
    };
}
//底部导航
let MyBottomTabNavigator = createBottomTabNavigator({
    recommend:{
        screen:Recommend,
        navigationOptions: {
            tabBarLabel: "推荐",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'star-outlined'} size={20} color="#f00"/>
            )
        }

    },
    ranking:{
        screen:RanKing,
        navigationOptions:{
            tabBarLabel:"排行",
        }
    },
    dianTai:{
        screen:DianTai,
        navigationOptions:{
            tabBarLabel:"电台",
        }
    },
    mv:{
        screen:Mv,
        navigationOptions:{
            tabBarLabel:"MV",
        }
    },
    my:{
        screen:My,
        navigationOptions:{
            tabBarLabel:"我的",
        }
    },
});

//总体导航
let AppStack =  createStackNavigator({
    MyBottomTabNavigator:{
        screen: MyBottomTabNavigator,
        navigationOptions:{
            header: null,
            tabBarVisible: false,
        }
    }
});