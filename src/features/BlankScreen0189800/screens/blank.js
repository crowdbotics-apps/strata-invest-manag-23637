import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_36: "" }
  render = () => (
    <View style={styles.View_1}>
      <View />
      <View>
        <View>
          <Text>Тестовое окно ввода</Text>
          <TextInput
            placeholder="Sample text input placeholder"
            value={this.state.TextInput_36}
            onChangeText={nextValue =>
              this.setState({ TextInput_36: nextValue })
            }
          />
        </View>
        <View>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
      <View />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { flexDirection: "row" },
  View_5: {},
  View_7: {},
  View_18: {},
  Text_37: {},
  TextInput_36: {},
  View_22: {},
  Button_41: {},
  View_9: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)