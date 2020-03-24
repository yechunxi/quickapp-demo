import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text,Image } from '@tarojs/components'
import SearchBar from '../../components/search-bar';
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }


  clickFun = (e)=>{
     console.log(e.currentTarget,222222);
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Image style="width:200px;height:200px" src={'https://developer.huawei.com/consumer/cn/service/hms/images/fastApp_img.png'}></Image>
        <Text style="margin:100px 20px;font-size:36px;color:green;">测试组件是否显示出来,下面可是有张图片的哟</Text>
        <SearchBar />
        <View
          style="height:200px;width:100%"
          onClick={this.clickFun}>
          <Text style="font-size:40px;color:red">点我就报错了</Text>
        </View>
      </View>
    )
  }
}
