import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Card from '../components/Card'

const Design1 = ({ navigation }) => {

    const data = [
        {
            id: 1,
            heading: 'You have recieved $500',
            time: 'Thu, Dec 11, 2021 2:53 AM',
            money: '+$175.00',
            color: 'green'
        },
        {
            id: 2,
            heading: '$150 has been paid',
            time: 'Thu, Dec 11, 2021 2:53 AM',
            money: '-$150.00',
            color: 'red'
        },
        {
            id: 3,
            heading: '$150 has been refunded',
            time: 'Thu, Dec 11, 2021 2:53 AM',
            money: '+$150.00',
            color: 'green',
        },
        {
            id: 4,
            heading: 'You sent a gift od $160',
            time: 'Thu, Dec 11, 2021 2:53 AM',
            money: '-$160.00',
            color: 'red'
        },
    ]

    return (
        <View style={styles.container}>
            {/* Navigaiton */}
            <View style={styles.navigationHeader}>
                <TouchableHighlight underlayColor={'none'} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={32} color="black" />
                </TouchableHighlight>
            </View>
            {/* ProfileView */}
            <View style={styles.profileView}>
                <View style={styles.profilePicture}>
                    <FontAwesome name='user-circle' size={50} color={'blue'} />
                </View>
                <View style={styles.userDetails}>
                    <View style={styles.innerDetails}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>
                            Hello,
                        </Text>
                        <Text style={{ fontSize: 13, color: 'gray' }}>
                            Your Balance
                        </Text>
                    </View>
                    <View style={styles.innerDetails}>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            Elon Musk
                        </Text>
                        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
                            $25,520
                        </Text>
                    </View>
                </View>
            </View>
            {/* Earnings and donations */}
            <View style={styles.menuButtons}>
                <View style={{ borderColor: 'black', borderBottomWidth: 2, width: '40%' }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold' }}>
                        Earnings
                    </Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={{ fontSize: 22, textAlign: 'center', color: 'gray' }}>
                        Donations
                    </Text>
                </View>
            </View>
            {/* Record Buttons */}

            <View style={{
                backgroundColor: '#D3D3D3', height: 50, margin: 20, flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center'
            }}>
                <TouchableHighlight style={{ backgroundColor: 'black', width: '30%', paddingVertical: 5, borderRadius: 8 }}>
                    <Text style={{ color: 'white', fontSize: 24, textAlign: 'center' }}>Week</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ width: '30%' }}>
                    <Text style={{ fontSize: 24, textAlign: 'center' }}>Month</Text>
                </TouchableHighlight>
                <TouchableHighlight style={{ width: '30%' }}>
                    <Text style={{ fontSize: 24, textAlign: 'center' }}>Year</Text>
                </TouchableHighlight>
            </View>

            {/* Details */}
            <View style={{ backgroundColor: 'white', padding: 10 }}>
                {data.map(item => {
                    return (
                        <View key={item.id}>
                            <Card style={{ height: 80, flexDirection: 'row', margin: 10 }}>
                                <View style={styles.profilePicture}>
                                    <FontAwesome name='user-circle' size={50} color={'blue'} />
                                </View>
                                <View style={{ width: '60%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View>
                                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold' }}>
                                            {item.heading}
                                        </Text>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16 }}>
                                            {item.time}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%', paddingRight: 10 }}>
                                    <Text style={{ color: item.color, fontSize: 16 }}>
                                        {item.money}
                                    </Text>
                                </View>
                            </Card>
                        </View>
                    )
                })}
            </View>

        </View>
    )
}

export default Design1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#eaeaea'
    },
    navigationHeader: {
        height: 40,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    profileView: {
        height: 80,
        flexDirection: 'row'
    },
    profilePicture: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    userDetails: {
        width: '80%',
        justifyContent: 'center'
    },
    innerDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    menuButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 40,
        alignItems: 'flex-end'
    },


})

