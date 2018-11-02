import React,{Component}  from 'react';
import {Platform, StyleSheet, Text, View ,Image} from 'react-native';
import HeadNav from "../common/HeadNav";
import Swiper from 'react-native-swiper';
export default class Recommend extends Component<Props>{
    static navigationOptions = ({navigation}) => {
        return {
            header: () =><HeadNav isBack={false}  content={'悦音'} />
        }
    };
    render(){
        return (
            <View>
                {/*轮播*/}
                <View>
                    <Swiper
                        autoplay={true}
                        height = {require("Dimensions").get('window').width/2.5}
                        width= {require("Dimensions").get('window').width}
                        horizontal={true}
                        paginationStyle={{bottom: 10}}
                        activeDot={<View style={{
                            backgroundColor: '#e6e6e6', width: 8, height:
                                8, borderRadius: 8
                        }}/>}
                        showsButtons ={false}>
                        <Image  source={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541686804&di=ca0c4b51ff876d01e28f53455915e6ee&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F56%2F27%2F12S58PIC89m_1024.jpg'}/>
                        <Image  source={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541686804&di=ca0c4b51ff876d01e28f53455915e6ee&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F56%2F27%2F12S58PIC89m_1024.jpg'}/>
                        <Image  source={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541686804&di=ca0c4b51ff876d01e28f53455915e6ee&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F17%2F56%2F27%2F12S58PIC89m_1024.jpg'}/>
                    </Swiper>
                </View>
            </View>
        )
    }


}