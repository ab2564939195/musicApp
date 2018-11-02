import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
export default class HeadNav extends Component<Props>{
    jumpPage = (page) =>{
        this.props.navigation.navigate(page);
    };
    render(){
        return(
            <View style={style.container}>
                <View style={style.headerLeft}>
                    {this.props.isBack ? <TouchableOpacity onPress={this.jumpPage.bind(this,this.props.page)}>
                        <Text style={{width: 18, height: 18, marginLeft: 20}}>
                            <Icon  name={'chevron-thin-left'}  size={20} color={'#F6FFF1'}/>
                        </Text>
                    </TouchableOpacity> : null}

                </View>
                <View style={style.headerContent}>
                    <Text style={{fontSize:20,color:'#FF734C', fontWeight:'bold'}}>{this.props.content}</Text>
                </View >
                <View style={style.headerRight}>
                    <Text style={{marginRight: 20}}>
                        <Icon  name={'magnifying-glass'}  size={20} color={'#F6FFF1'}/>
                    </Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:45,
        backgroundColor:'#62CC4D',
    },
    headerLeft:{
        flex:1,
        height:'100%',
        // backgroundColor:'#CC5745',
        justifyContent:'center'
    },
    headerContent:{
        flex:1,
        height:'100%',
        // backgroundColor:'#62CC4D',
        justifyContent:'center',
        alignItems:'center'
    },
    headerRight:{
        flex:1,
        height:'100%',
        // backgroundColor:'#CBCC41',
        justifyContent:'center',
        alignItems:'flex-end'

    },
});