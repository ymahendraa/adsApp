import React, {useState, useEffect, useLayoutEffect} from "react";
import {View, StyleSheet, TouchableOpacity, Text, Image, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLovinMAX from "react-native-applovin-max";

export type Props ={
    navigation : any
}

const DetailCourse: React.FC<Props> = ({navigation}) => {

    const BANNER_AD_UNIT_ID = Platform.select({
        android: '59e213c719906337',
    });

    const INTERSTITIAL_AD_UNIT_ID = Platform.select({
        android: '5c807d93f636fe67',
    });
    
    function initializeInterstitialAds()
    {
        // Load the first interstitial
        loadInterstitial();
        AppLovinMAX.addEventListener('OnInterstitialLoadedEvent', () => {
            // Interstitial ad is ready to be shown. AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID) will now return 'true'
            if (AppLovinMAX.isInterstitialReady(INTERSTITIAL_AD_UNIT_ID)) {
                AppLovinMAX.showInterstitial(INTERSTITIAL_AD_UNIT_ID);
            }
            initializeBannerAds();

        });
    }

    function initializeBannerAds(){
        // Banners are automatically sized to 320x50 on phones and 728x90 on tablets
        // You may use the utility method `AppLovinMAX.isTablet()` to help with view sizing adjustments
        AppLovinMAX.createBanner(BANNER_AD_UNIT_ID, AppLovinMAX.AdViewPosition.BOTTOM_CENTER);

        // Set background or background color for banners to be fully functional
        // In this case we are setting it to black - PLEASE USE HEX STRINGS ONLY
        AppLovinMAX.setBannerBackgroundColor(BANNER_AD_UNIT_ID, '#FF0000');
        AppLovinMAX.showBanner(BANNER_AD_UNIT_ID);
    }

    function loadInterstitial()
    {
        AppLovinMAX.loadInterstitial(INTERSTITIAL_AD_UNIT_ID);
    }
    
    useLayoutEffect(()=> {
        initializeInterstitialAds();
    },[])

    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
                <TouchableOpacity style={styles.backButton} onPress={() => (AppLovinMAX.hideBanner(BANNER_AD_UNIT_ID),navigation.goBack())}>
                    <Icon name='chevron-back-outline' size={40} color={'#000'} />
                </TouchableOpacity>
                <Text style={styles.header}>HTML</Text>
            </View>
            <Text style={{...styles.header, marginTop:'5%', fontSize:24, fontWeight:'bold', alignSelf:'center'}}>Tags For Headers</Text>
            <Text style={{alignSelf:'center', marginTop:'3%'}}>3 of 11 lessons</Text>
            <View style={{flexDirection:'row', alignSelf:'center', marginTop:'4%'}}> 
                <View style={{...styles.sections, borderTopLeftRadius:15, borderBottomLeftRadius:15}}>
                    <Text style={{...styles.header, fontSize:14}}>Lessons</Text>
                </View>
                <View style={styles.sections}>
                    <Text style={{...styles.header, fontSize:14}}>Tests</Text>
                </View>
                <View style={{...styles.sections, borderTopRightRadius:15, borderBottomRightRadius:15}}>
                    <Text style={{...styles.header, fontSize:14}}>Discuss</Text>
                </View>
            </View>
            <Image 
                source={{
                    uri: 'data:image/jpeg;base64,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'
                }}
                style={styles.contentImage}
            />
            <Text style={{fontSize:22, fontWeight:'bold', color:'#000', marginTop:'4%'}}>
                Intoduction
            </Text>
            <Text style={{textAlign:'justify', lineHeight:20}}>
            You can launch a new career in web development today by learning HTML & CSS. You don't need a computer science degree or expensive software. All you need is a computer, a bit of time, a lot of determination, and a teacher you trust.Once the form data has been validated on the client-side, it is okay to submit the form. And, since we covered validation in the previous article, we're ready to submit! This article looks at what happens when a user submits a form — where does the data go, and how do we handle it when it gets there? We also look at some of the security concerns.
            </Text>
            {/* <TouchableOpacity onPress={initializeInterstitialAds} style={{width:'50%', backgroundColor:'red'}}>
                <Text>Ads</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:'5%'
    },
    backButton:{
        width:50,
        height:50,
        borderColor:'#000',
        borderWidth:1,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:'85%'
    },
    header:{
        fontSize:30, 
        color:'#000'
    },
    sections:{
        backgroundColor:'#F8F2EE',
        width:120,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:'1%'
    },
    contentImage:{
        width:'90%',
        height:'25%',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:15
    },
})

export default DetailCourse;