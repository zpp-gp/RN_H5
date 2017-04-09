/**
 * Created by gp on 17/1/3.
 */
'use strict';
import React, {Component} from 'react';
import {
    WebView,
    Clipboard,
} from 'react-native';
export default class extends Component {

    constructor(props) {
        super(props);
        this.url = "http://127.0.0.1/index.html";
    }

    onMessage = (e)=> {
        var data = JSON.parse(e.nativeEvent.data);
        if (data.type == "copy") {
            Clipboard.setString(data.content);
        }
    }

    render() {
        var jsString = `
                    if(!window.RNObject)
                    {
                        window.RNObject={
                            mobile:"13055556666"
                        };
                    }
                    `;
        return (
            <WebView
                ref={webview => {
                    this.webview = webview;
                }}
                automaticallyAdjustContentInsets={false}
                javaScriptEnabled={true}
                injectedJavaScript={jsString}
                domStorageEnabled={true}
                source={{uri: this.url}}
                onMessage={this.onMessage}
                decelerationRate="normal"
            >
            </WebView>
        )
    }
}