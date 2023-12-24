/* eslint-disable prettier/prettier */
import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { FontFamily, FontSize, Padding, Border, Color } from './GlobalStyles';

const Onboard = () => {
    return (
        <View style={styles.onboard}>
            <View style={styles.frameParent}>
                <View style={styles.round1Wrapper}>
                    <Text style={[styles.round1, styles.roundTypo]}>Round 1</Text>
                </View>
                <View style={[styles.restWrapper, styles.restWrapperFlexBox]}>
                    <Text style={[styles.round1, styles.roundTypo]}>Rest</Text>
                </View>
                <View style={[styles.round2Wrapper, styles.restWrapperFlexBox]}>
                    <Text style={[styles.round1, styles.roundTypo]}>Round 2</Text>
                </View>
                <View style={[styles.restContainer, styles.restWrapperFlexBox]}>
                    <Text style={[styles.round1, styles.roundTypo]}>Rest</Text>
                </View>
                <View style={[styles.round3Wrapper, styles.wrapperBg]}>
                    <Text style={[styles.round3, styles.roundTypo]}>Round 3</Text>
                </View>
            </View>
            <View style={[styles.frameGroup, styles.parentPosition]}>
                <View style={[styles.session1Wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.round1, styles.roundTypo]}>Session 1</Text>
                </View>
                <View style={[styles.session2Wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.session2, styles.roundTypo]}>Session 2</Text>
                </View>
                <View style={[styles.session2Wrapper, styles.wrapperFlexBox]}>
                    <Text style={[styles.session2, styles.roundTypo]}>Session 3</Text>
                </View>
            </View>
            <View
                style={[styles.nextRoundWillStartIn1MinWrapper, styles.parentPosition]}
            >
                <Text style={[styles.nextRoundWill, styles.nextRoundWillTypo]}>
                    Next Round Will Start In 1 Minute
                </Text>
            </View>
            <Image
                style={[styles.fhRedBlack1Icon, styles.frameChildPosition]}
                resizeMode="cover"
                source={require('../assets/FH-Red-Black.png')}
            />
            <View style={[styles.ellipseParent, styles.frameChildLayout]}>
                <Image
                    style={[styles.frameChild, styles.frameChildLayout]}
                    resizeMode="cover"
                    source={require('../assets/Ellipse.png')}
                />
                <View style={[styles.restParent, styles.parentPosition]}>
                    <Text style={styles.rest2}>Rest</Text>
                    <Text style={[styles.minute, styles.minuteTypo]}>1 Minute</Text>
                    <View style={styles.parent}>
                        <Text style={[styles.text, styles.textTypo]}>00 :</Text>
                        <View style={styles.component2}>
                            <Text style={[styles.text1, styles.textTypo]}>00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={[styles.round1CompletedParent, styles.parentPosition]}>
                <Text style={[styles.round1Completed, styles.nextRoundWillTypo]}>
                    Round 1 Completed
                </Text>
                <Text style={[styles.youDidWell, styles.youDidWellTypo]}>
                    You Did Well ..!
                </Text>
                <Text style={[styles.takeSomeRest, styles.youDidWellTypo]}>
                    Take Some Rest
                </Text>
            </View>
            <Text style={[styles.exercise, styles.minuteTypo]}>Exercise</Text>
            <Text style={[styles.rounds15, styles.textTypo]}>
                3 Rounds - 15 Minutes
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    roundTypo: {
        textAlign: 'center',
        fontFamily: FontFamily.urbanistMedium,
        fontWeight: '500',
        fontSize: FontSize.size_xs,
    },
    restWrapperFlexBox: {
        marginLeft: 8,
        paddingVertical: Padding.p_7xs,
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        borderRadius: Border.br_12xl,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    wrapperBg: {
        backgroundColor: Color.colorWhitesmoke,
        paddingHorizontal: Padding.p_3xs,
    },
    parentPosition: {
        alignItems: 'center',
        left: '50%',
        position: 'absolute',
    },
    wrapperFlexBox: {
        width: 100,
        paddingVertical: Padding.p_7xs,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Border.br_12xl,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    nextRoundWillTypo: {
        fontFamily: FontFamily.urbanistSemiBold,
        fontWeight: '600',
        fontSize: FontSize.size_xl,
        textAlign: 'center',
    },
    frameChildPosition: {
        top: '50%',
        left: '50%',
    },
    frameChildLayout: {
        height: 198,
        width: 198,
        position: 'absolute',
    },
    minuteTypo: {
        fontFamily: FontFamily.urbanistBold,
        fontWeight: '700',
        color: Color.colorBlack,
        fontSize: FontSize.size_xl,
        textAlign: 'center',
    },
    textTypo: {
        fontSize: FontSize.size_base,
        color: Color.colorFirebrick,
        fontFamily: FontFamily.urbanistSemiBold,
        fontWeight: '600',
        textAlign: 'center',
    },
    youDidWellTypo: {
        marginTop: 7,
        fontFamily: FontFamily.urbanistSemiBold,
        fontWeight: '600',
        fontSize: FontSize.size_xl,
        textAlign: 'center',
    },
    round1: {
        color: Color.labelColorDarkPrimary,
    },
    round1Wrapper: {
        paddingVertical: Padding.p_7xs,
        justifyContent: 'center',
        width: 64,
        borderRadius: Border.br_12xl,
        paddingHorizontal: Padding.p_xs,
        alignItems: 'center',
        backgroundColor: Color.green1,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    restWrapper: {
        backgroundColor: '#4a79f2',
        paddingHorizontal: Padding.p_3xs,
        marginLeft: 8,
    },
    round2Wrapper: {
        paddingHorizontal: Padding.p_3xs,
        marginLeft: 8,
        backgroundColor: Color.green1,
    },
    restContainer: {
        backgroundColor: Color.gray1,
        paddingHorizontal: Padding.p_3xs,
        marginLeft: 8,
    },
    round3: {
        color: Color.gray3,
    },
    round3Wrapper: {
        marginLeft: 8,
        paddingVertical: Padding.p_7xs,
        justifyContent: 'center',
        alignItems: 'center',
        width: 64,
        borderRadius: Border.br_12xl,
        flexDirection: 'row',
        overflow: 'hidden',
    },
    frameParent: {
        marginLeft: -175.5,
        top: 299,
        flexDirection: 'row',
        left: '50%',
        position: 'absolute',
    },
    session1Wrapper: {
        backgroundColor: Color.colorFirebrick,
        borderStyle: 'solid',
        borderColor: Color.colorFirebrick,
        borderWidth: 1,
        paddingHorizontal: Padding.p_xs,
        width: 100,
    },
    session2: {
        color: Color.colorGray_100,
    },
    session2Wrapper: {
        backgroundColor: Color.colorWhitesmoke,
        paddingHorizontal: Padding.p_3xs,
    },
    frameGroup: {
        marginLeft: -168.5,
        top: 257,
        width: 338,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    nextRoundWill: {
        color: Color.colorGray_100,
    },
    nextRoundWillStartIn1MinWrapper: {
        marginLeft: -143,
        top: 696,
    },
    fhRedBlack1Icon: {
        marginTop: -385,
        marginLeft: -135.5,
        width: 271,
        height: 122,
        position: 'absolute',
    },
    frameChild: {
        marginTop: -99,
        marginLeft: -99,
        top: '50%',
        left: '50%',
    },
    rest2: {
        color: Color.colorBlack,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.urbanistSemiBold,
        fontWeight: '600',
        textAlign: 'center',
    },
    minute: {
        marginTop: 5,
    },
    text: {
        color: Color.colorFirebrick,
    },
    text1: {
        top: '0%',
        left: '0%',
        color: Color.colorFirebrick,
        position: 'absolute',
        width: '100%',
        fontSize: FontSize.size_base,
    },
    component2: {
        width: 25,
        height: 19,
        marginLeft: 1,
    },
    parent: {
        marginTop: 5,
        flexDirection: 'row',
    },
    restParent: {
        marginLeft: -38,
        top: 63,
    },
    ellipseParent: {
        top: 471,
        left: 98,
    },
    round1Completed: {
        color: Color.gray1,
    },
    youDidWell: {
        color: Color.colorFirebrick,
    },
    takeSomeRest: {
        color: '#2f2f2f',
    },
    round1CompletedParent: {
        marginLeft: -85,
        top: 355,
    },
    exercise: {
        top: 170,
        left: 160,
        position: 'absolute',
    },
    rounds15: {
        top: 210,
        left: 121,
        color: Color.colorFirebrick,
        position: 'absolute',
    },
    onboard: {
        backgroundColor: Color.labelColorDarkPrimary,
        flex: 1,
        height: 'auto',
        overflow: 'hidden',
        width: '100%',
    },
});

export default Onboard;
