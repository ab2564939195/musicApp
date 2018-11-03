import React ,{Component} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/EvilIcons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
let {width,height} =  require("Dimensions").get('window');
export default class HeadNav extends Component<Props>{
    jumpPage = (page) =>{
        this.props.navigation.navigate(page);
    };
    render(){
        return(
            <View style={style.container}>
                <View style={style.headerLeft}>
                    <View style={style.searchView}>
                        <Icon1 style={style.searchIcon}  name={'search'}  size={20} color={'#A7A7A7'}/>
                        <Text style={style.searchText}>搜索歌曲、歌手、有声电台...</Text>
                    </View>
                </View>
                <View style={style.headerRight}>
                    <Text>
                        <Icon  name={'beamed-note'}  size={23} color={'#010101'}/>
                    </Text>
                </View>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container:{
        width: width,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        height:45,
        backgroundColor:'#FFFFFF',
        // backgroundColor:'red',
        padding:5
    },
    headerLeft:{
        width: width/1.1,
        height:'100%',
        justifyContent:'center',
    },
    searchIcon:{
        marginLeft:10,
    },
    searchView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor: '#F3F3F3',
        height:'100%',
        borderRadius:7
    },
    searchText:{
        flex:1,
        color:'#AAAAAA',
        marginLeft:20,
        fontSize:13
    },
    // headerContent:{
    //     flex:1,
    //     height:'100%',
    //     // backgroundColor:'#62CC4D',
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    headerRight:{
        height:'100%',
        // backgroundColor:'#CBCC41',
        justifyContent:'center',
        marginLeft:5
        // alignItems:'flex-end'

    },
});