import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

class Button extends Component {
    state = { pressing: false };
    _onPressIn = () => {
        this.setState({ pressing: true });
    }
    _onPressOut = () => {
        this.setState({pressing: false});
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPressIn={this._onPressIn}
                    onPressOut={this._onPressOut}
                    style={styles.touchable}
                    >
                    <View style={styles.button}>
                        <Text style={styles.welcome}>
                            this.state.pressing ? 'EEK' : 'PUSH ME'
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff'
    },
    touchable: {
        borderRadius: 100
    },
    button: {
        backgroundColor: '#ff0000',
        borderRadius: 100,
        height: 200,
        width: 200,
        justifyContent: 'center'
    }
});

export default Button;
