import { Block, View, Image, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";

import './search-bar.scss';

export default class SearchBar extends Taro.Component{

  constructor(props){
    this.state = {};
  }
  render(){
    return <View
            className="search-bar-wrap"
            >
        <Image
          style="height:400px;"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585040166863&di=aae79e71711ff3bcdf5e0dbd4a22b402&imgtype=0&src=http%3A%2F%2Fpic2.16pic.com%2F00%2F53%2F34%2F16pic_5334613_b.jpg"
          ></Image>
        <Text className="search-bar-txt">{'我显示出来的'}</Text>
    </View>
  }
}
