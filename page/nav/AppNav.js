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

let HomeStack = createStackNavigator({
    recommend: {screen: Recommend}
});
//底部导航
let MyBottomTabNavigator = createBottomTabNavigator({
    recommend:{
        screen:HomeStack,
        navigationOptions: {
            tabBarLabel: "推荐",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'star'} size={20} color={tintColor}/>
            )
        }

    },
    ranking:{
        screen:RanKing,
        navigationOptions:{
            tabBarLabel:"排行",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'bar-graph'} size={20} color={tintColor}/>
            )
        }
    },
    dianTai:{
        screen:DianTai,
        navigationOptions:{
            tabBarLabel:"电台",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'tv'} size={20} color={tintColor}/>
            )
        }
    },
    mv:{
        screen:Mv,
        navigationOptions:{
            tabBarLabel:"MV",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'video-camera'} size={20} color={tintColor}/>
            )
        }
    },
    my:{
        screen:My,
        navigationOptions:{
            tabBarLabel:"我的",
            tabBarIcon:({tintColor}) =>(
                <Entypo name={'github'} size={20} color={tintColor}/>
            )
        }
    },
},{
    // initialRouteName: 'Recommend',
    // swipeEnabled: true,
    // tabBarVisible: false,
    // animationEnabled: true,
    // lazy: true,
    tabBarOptions:{
        activeTintColor:"red" ,  //底部导航选中后的颜色
        // activeBackgroundColor:"red" //底部导航选中后的背景颜色
        // inactiveTintColor 非选中的颜色
        //inactiveBackgroundColor 非选中的背景颜色
        showLabel:true,
        style:{
            borderTop:10
        }
    }
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
}

);