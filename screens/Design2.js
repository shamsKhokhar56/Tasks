import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'

const Design2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.navigationHeader}>
                <TouchableHighlight underlayColor={'none'} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={32} color="black" />
                </TouchableHighlight>
                <View style={{ backgroundColor: '#D3D3D3', height: 50, width: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
                    <Entypo name='chat' size={32} color={'black'} />
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <FontAwesome name='user-circle' size={60} color={'black'} />
                <FontAwesome name='user-circle' size={60} color={'black'} />
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 24, paddingTop: 10 }}>
                    30 min call with John
                </Text>
                <Text style={{ fontSize: 16 }}>
                    Thu, 11 Dec, 2021 2:53 AM
                </Text>
            </View>
            <View style={{ margin: 20, backgroundColor: '#00B5FF', height: '20%', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: '60%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: '#eaeaea', fontSize: 18 }}>
                        Transaction
                    </Text>
                    <Text style={{ color: 'white', fontSize: 36, fontWeight: 'bold' }}>
                        £200.00
                    </Text>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>
                        You have recieved $175.00 from John Doe's 30 mins call
                    </Text>
                </View>
            </View>
            <View style={{ margin: 20, borderRadius: 10, backgroundColor: '#D3D3D3' }}>
                <View style={{ margin: 20 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24 }}>
                        Transaction Details
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textStyles}>
                            Subtotal
                        </Text>
                        <Text style={styles.textStyles}>
                            £200.00
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textStyles}>
                            Donation
                        </Text>
                        <Text style={styles.textStyles}>
                            -£20.00
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={styles.textStyles}>
                            CareerPaths Fee
                        </Text>
                        <Text style={styles.textStyles}>
                            -£45.00
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={[styles.textStyles, { fontWeight: 'bold', fontSize: 22 }]}>
                            Total Earnings
                        </Text>
                        <Text style={[styles.textStyles, { fontWeight: 'bold', fontSize: 22 }]}>
                            £135.00
                        </Text>
                    </View>
                </View>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#eaeaea'
    },
    navigationHeader: {
        flexDirection: 'row',
        height: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15
    },
    textStyles: {
        fontSize: 20
    },
})

export default Design2