import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity as Touch,
    Dimensions,
    Image,
} from 'react-native';

const window = Dimensions.get('window');

// ## 文章的头部
export default class Header extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        data: null,
    };

    static propTypes = {
        data: PropTypes.object.isRequired,
    };

    render() {
        const data = this.props.data;

        return (
            <View>
                {
                    data.image &&
                    <View style={styles.header}>
                        <Image
                            style={styles.image}
                            source={{ uri: data.image }}
                            />

                        <View style={styles.shade}>
                            <Text style={styles.title}>
                                {data.title}
                            </Text>

                            <Text style={styles.image_source}>
                                {data.image_source}
                            </Text>
                        </View>
                    </View>
                }
                {
                    data.recommenders &&
                    <View style={styles.recommenders}>
                        <Text style={styles.text}>
                            推荐者
                        </Text>
                        <View style={styles.box}>{
                            data.recommenders.map((it, index) => (
                                <View
                                    key={`recommenders-${index}`}
                                    style={[styles.avatar, { margin: 5 }]}
                                    >
                                    <Image
                                        source={{ uri: it.avatar }}
                                        style={styles.avatar}
                                        />
                                </View>
                            ))
                        }</View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        height: 210,
        width: window.width,
        backgroundColor: 'rgba(1, 1, 1, 0.05)',
    },
    image: {
        height: 210,
        width: window.width,
    },
    recommenders: {
        height: 65,
        backgroundColor: '#f1f1f1',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 3,
    },
    text: {
        color: '#333',
    },
    box: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        flex: 1,
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30,
    },
    shade: {
        position: 'absolute',
        top: 0, bottom: 0,
        left: 0, right: 0,
        backgroundColor: 'rgba(1, 1, 1, 0.32)',
        justifyContent: 'flex-end',
        padding: 10,
    },
    title: {
        fontSize: 22,
        color: '#fff',
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 5,
        textShadowColor: 'rgba(1, 1, 1, 0.6)',
    },
    image_source: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 11,
        textAlign: 'right',
        paddingTop: 5,
        textShadowOffset: {
            width: 1,
            height: 1,
        },
        textShadowRadius: 5,
        textShadowColor: 'rgba(1, 1, 1, 0.6)',
    },
})