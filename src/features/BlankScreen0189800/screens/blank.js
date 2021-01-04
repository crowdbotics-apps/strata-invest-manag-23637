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
      <View style={styles.View_5}>
        <Text style={styles.Text_91}>Sample text content 1</Text>
        <Text style={styles.Text_95}>Sample text content 2</Text>
        <Text style={styles.Text_99}>Sample text content 3</Text>
      </View>
      <View style={styles.View_7}>
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
      <View style={styles.View_9} />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {
    width: 0,
    fontFamily: "Roboto-Regular",
    flexDirection: "row",
    alignContent: "flex-start"
  },
  View_5: {
    width: "20%",
    height: 100,
    color: "#ffffff",
    backgroundColor: "#94d6ff",
    fontFamily: "Roboto-Regular",
    borderColor: "#ffffff",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  Text_91: { backgroundColor: "#94d6ff" },
  Text_95: { backgroundColor: "#94d6ff" },
  Text_99: { backgroundColor: "#94d6ff" },
  View_7: {
    width: "60%",
    backgroundColor: "#f5faff",
    borderColor: "#ffffff",
    borderWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2
  },
  View_18: {},
  Text_37: {},
  TextInput_36: {},
  View_22: {},
  Button_41: {},
  View_9: { width: "20%", color: "#ffffff", backgroundColor: "#70a7ff" }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
