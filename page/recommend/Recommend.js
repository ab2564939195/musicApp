import React,{Component}  from 'react';
import {Platform, StyleSheet, Text, View ,Image} from 'react-native';

import Swiper from 'react-native-swiper';
import HeadNav from '.././common/HeadNav';
let {width,height} =  require("Dimensions").get('window');
export default class Recommend extends Component<Props>{
    static navigationOptions = ({navigation}) => {
        return {
            header: () =><HeadNav isBack={false}  content={'悦音'} />
        }
    };
    render(){
        return (
            <View style={style.container}>
                {/*轮播*/}
                <View style={style.swiperView}>
                    <View style={{width:width, height:height/3, padding:5}}>
                        <Swiper
                            autoplay={true}
                            horizontal={true}
                            autoplayTimeout={3}
                            paginationStyle={{bottom: 25}}
                            activeDot={<View style={{
                                backgroundColor: 'green', width: 8, height:
                                    8, borderRadius: 8
                            }}/>}
                            showsButtons ={false}>
                            <Image style={style.swiperImg} source={require('../../images/1.jpg')}/>
                            <Image  style={style.swiperImg} source={require('../../images/1.jpg')}/>
                            <Image style={style.swiperImg}  source={require('../../images/1.jpg')}/>
                        </Swiper>
                    </View>
                </View>

            </View>
        )
    }

}
const style = StyleSheet.create({
    container:{
        width: '100%',
        height: height,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
// 轮播
    swiperView:{
       flex:1
    },
    swiperImg:{
        height:height/3.5 ,
        width:"100%",
        borderRadius:8
    }
});