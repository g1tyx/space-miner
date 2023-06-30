import {Platform, StyleSheet} from "react-native";

const isWeb = Platform.OS === 'web';

export const AppStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 40 : 60,
        alignItems: 'center',
        backgroundColor: 'rgba(0,16,33,0.4)',
    },
    containerNoFlex: {
        paddingTop: Platform.OS === 'ios' ? 40 : 60,
        alignItems: 'center',
        backgroundColor: 'rgba(0,16,33,0.4)',
    },
    baseText: {
        fontFamily: 'Share-Tech-Mono'
    },
    header: {
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
    },
    gametitle: {
        color: '#ffffff',
        fontSize: 20,
        marginVertical: 20,
        textAlign: 'center',
    },
    title: {
        fontSize: isWeb ? 25 : 20,
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'Share-Tech-Mono'
    },
    text: {
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontFamily: 'Share-Tech-Mono'
    },
    textLeft: {
        textAlign: 'left',
    },
    smallMargin: {
        marginVertical: 2,
    },
    white: {
        color: '#ffffff',
        fontFamily: 'Share-Tech-Mono'
    },
    orange: {
        color: '#f4511e',
        fontFamily: 'Share-Tech-Mono'
    },
    red: {
        color: 'rgb(210,2,2)',
        fontFamily: 'Share-Tech-Mono'
    },
    totalproduction: {
        userSelect: 'none',
        marginTop: -10
    },

    // OPS
    opsWrapper: {
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 10,
    },
    opsScreenWrapper: {
        maxHeight: 180,
        marginBottom: isWeb ? 20 : 2,
    },
    ops: {
        width: 280,
        fontSize: 30,
        textAlign: 'center',
        marginLeft: 5,
        fontFamily: 'Share-Tech-Mono'
    },
    opsIcon: {
        width: 55,
        height: 55,
    },
    opsProgress: {
      marginHorizontal: isWeb ? 90 : 50,
      marginVertical: 10,
    },
    storageProgress: {
      marginHorizontal: 20,
      marginVertical: 10,
    },

    // Project list
    projectComponentWrapper: {
        alignItems: 'center',
        maxWidth: 800,
    },
    projectListScrollview: {
      borderWidth: 2,
      borderRadius: 2,
      borderColor: 'lightgrey',
      marginBottom: isWeb ? 500 :350,
    },
    projectWrapper: {
        padding: 8,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginVertical: 20,
    },
    projectImage: {
        width: 200,
        height: 200,
    },
    projectTitle: {
        marginVertical: 2.5,
        textAlign: 'left',
        color: '#faff00',
    },
    projectCost: {
        padding: 10,
        backgroundColor: 'lightgrey',
        borderRadius: 3
    },
    projectCostCompleted: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 3
    },

    // Robot controller
    robotControl: {
        userSelect: 'none',
        alignItems: 'center',
    },
    robotPurchaseWrapper: {
    },
    robotImage: {
        width: 100,
        height: 100,
    },
    // Solar Panel controller
    solarpanelControl: {
        userSelect: 'none',
        alignItems: 'center',
    },
    solarpanelPurchaseWrapper: {
    },
    solarpanelImage: {
        width: 250,
        height: 250,
    },

    // Quantum Computer controller
    quantumComputerControl: {
        userSelect: 'none',
        alignItems: 'center',
    },
    quantumComputerPurchaseWrapper: {
    },
    quantumComputerImage: {
        width: 100,
        height: 100,
    },

    achievementBadgeImageWrap: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },

    achievementBadgeImage: {
        width: 65,
        height: 65,
        alignSelf: 'flex-start'
    },
    achievementNumber: {
        borderRadius: 3,
        padding: 5,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
        marginTop: '65%',
        textAlign: 'right',
        alignSelf: 'flex-end',
        opacity: 1,
        fontSize: 10,
    },
    levelNumber: {
        borderRadius: 3,
        padding: 5,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,1)',
        marginTop: '76%',
        textAlign: 'right',
        alignSelf: 'flex-end',
        //justifyContent: 'flex-end',
        //textAlignVertical: 'center',
        //verticalAlign: 'middle',
        opacity: 1,
        fontSize: 12,
    },
    transparentImage: {
        opacity: 0.4
    },

    balanceWrapper: {
        flex: 1,
        justifyContent: 'flex-start',
        textAlign: 'left',
        elevation: 5,
        minWidth: isWeb ? 500 : 20
    },
    balances: {
        fontSize: isWeb ? 20 : 15,
        textAlign: 'left',
        color: '#e9ffff',
        fontFamily: 'Share-Tech-Mono'
    },
    balanceIcon: {
        width: 40,
        height: 40,
    },

    sellWrapper: {
        marginVertical: 5,
        marginHorizontal: 5,
        padding: 8,
        userSelect: 'none',
    },

    // Buttons
    buttonText: {
        fontSize: 18,
        textAlign: 'center',
        userSelect: 'none',
        fontFamily: 'Share-Tech-Mono'
    },
    button: {
        elevation: 8,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 10,
        backgroundColor: 'rgb(2,169,234)',
        borderColor: 'rgb(2,126,175)',
        borderBottomWidth: 5,
        shadowColor: 'rgba(255,255,255, 0.5)',
        shadowOpacity: 0.7,
        shadowRadius: 5 ,
        shadowOffset : { width: 1, height: 8},
    },
    purchaseButton: {
        margin: 10,
    },
    disabledButton: {
        backgroundColor: 'rgb(0,77,106)',
        borderColor: 'rgb(1,63,85)',
    },
    pressedButton: {
        backgroundColor: 'rgb(0,62,84)',
        borderColor: 'rgb(0,39,52)',
    },
    smallButton: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginVertical: 5,
    },
    orangeButton: {
        backgroundColor: '#fb5607',
    },
    darkOrangeButton: {
        backgroundColor: '#973407',
    },
    greyButton: {
        backgroundColor: 'rgb(120,130,146)',
        borderColor: 'rgb(80,87,98)',
    },
    darkGreyButton: {
        backgroundColor: 'rgb(46,52,56)',
        borderColor: 'rgb(26,31,32)',
    },
    redButton: {
        backgroundColor: 'rgb(210,2,2)',
        borderColor: 'rgb(158,3,3)',
    },
    pressedRedButton: {
        backgroundColor: 'rgb(210,2,2)',
        borderColor: 'rgb(164,1,1)',
    },
    greenButton: {
        backgroundColor: 'rgb(23,118,13)',
        borderColor: 'rgb(18,83,10)',
    },
    pressedGreenButton: {
        backgroundColor: 'rgb(18,83,10)',
        borderColor: 'rgb(15,66,9)',
    },
    disabledGreenButton: {
        backgroundColor: 'rgb(12,56,7)',
        borderColor: 'rgb(6,28,4)',
    },
    stardustButton: {
        backgroundColor: 'rgb(255,215,0)',
        borderColor: 'rgb(202,165,9)',
    },
    pressedStardustButton: {
        backgroundColor: 'rgb(202,165,9)',
        borderColor: 'rgb(133,109,8)',
    },
    blueButton: {
        backgroundColor: 'rgb(58,134,255)',
        borderColor: 'rgb(44,99,182)',
    },
    pressedBlueButton: {
        backgroundColor: 'rgb(42,89,163)',
        borderColor: 'rgb(32,65,126)',
    },
    disabledBlueButton: {
        backgroundColor: 'rgb(24,51,98)',
        borderColor: 'rgb(20,42,78)',
    },
    moveButton: {
        shadowRadius: 10,
        transform: 'translateY(4px)'
    },

    // Hedge Fund
    hedgeFundContainer: {
        userSelect: 'none',
    },
    tableContainer: { marginVertical: 10 },
    tableHead: {
        height: 23,
        backgroundColor: 'rgb(0,16,33)'
    },
    tableHeadText: { fontSize: 15, textAlign: 'center', color: 'white', fontFamily: 'Share-Tech-Mono' },
    tableRowText:  { margin: 2, fontSize: 8.5, textAlign: 'center', fontFamily: 'Share-Tech-Mono'  },
    tableRowTextProfit:  { color: 'darkgreen', margin: 2, fontSize: 8.5, textAlign: 'center', fontFamily: 'Share-Tech-Mono'  },
    tableRowTextLoss:  { color: 'darkred', margin: 2, fontSize: 8.5, textAlign: 'center', fontFamily: 'Share-Tech-Mono'  },
    tableRowSection: { height: 'auto', backgroundColor: '#E7E6E1' },
    flex: {
        flex: 1,
    },
    center: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        justifyContent: 'center',
        marginVertical: 5
    },
    rowcenter: {
        alignItems: 'flex-end',
        justifyContent: 'space-around',
    },
    rowleft: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    traderImage: {
        width: 100,
        height:100,
    },


    // Achievements table
    achievementListWrapper: {
        alignItems: 'center',
        marginBottom: 5,
    },
    achievementListScrollview: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'darkgrey',
        paddingBottom: 10,
    },
    achievementRowSection: { backgroundColor: 'grey' },
    achievementCompletedRowSection: { backgroundColor: 'rgb(10,137,7)' },
    achievementBorder: { borderWidth: 1, borderColor: 'darkgrey', marginVertical: 5 },
    achievementTableText: { margin: 3, fontSize: 11, textAlign: 'center', color: 'white', fontFamily: 'Share-Tech-Mono' },


    // Dropdown
    dropdownRow: {
      marginVertical: 5,
      marginHorizontal: 10
    },
    dropdownColumn: {
        width: '100%',
    },
    dropdown3BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        paddingHorizontal: 0,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#444',
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
    },
    dropdown3BtnImage: {width: 45, height: 45, resizeMode: 'cover'},
    dropdown3BtnTxt: {
        color: '#444',
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 12,
        fontFamily: 'Share-Tech-Mono'
    },
    dropdown3DropdownStyle: {backgroundColor: 'slategray'},
    dropdown3RowStyle: {
        backgroundColor: 'slategray',
        borderBottomColor: '#444',
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //paddingHorizontal: 18,
    },
    dropdownRowImage: {width: 45, height: 45, resizeMode: 'cover'},
    dropdown3RowTxt: {
        color: '#F1F1F1',
        textAlign: 'center',
        fontSize: 18,
        marginHorizontal: 12,
        fontFamily: 'Share-Tech-Mono'
    },
    wsbImage: {
        width: 50,
        height: 50,
    },

    // Settings
    settingsSectionWrapper: {
        marginVertical: 10,
        padding: 10,
    },


    // Modal
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        maxWidth: 500,
        margin: 20,
        backgroundColor: 'rgb(46,52,56)',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    modalText: {
        color: 'white',
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 20,
    },
    modalImageSrc: {
        width: 250,
        height: 250,
        borderRadius: 20,
    },

    buyItemView: {
        margin: 20,
        backgroundColor: 'rgb(46,52,56)',
        borderRadius: 20,
        padding: 15,
        alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },


    // Misc
    smalltext: {
      fontSize: 13,
    },
    darkBackground: {
        backgroundColor: 'rgba(0,16,33,0.8)',
        color: '#ffffff'
    },
    orangeBackground: {
        backgroundColor: '#f4511e',
        color: '#ffffff'
    },
    greyBorder: {
        borderColor: '#788292',
        borderRadius: 2,
        borderWidth: 3,
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6,
    },
    progress: {
        margin: 5,
    },
    gain: {
        color: 'green'
    },
    link: {
        color: '#1B95E0',
    },
    underline: {
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingLeft: 10,
        marginVertical: 10,
        backgroundColor: '#ffffff',
    },
    checkbox: {
      backgroundColor: '#ffffff',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'repeat',
        justifyContent: 'center',
    },
    componentBGImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        objectFit: 'cover',
        minHeight: isWeb ? 460 : 20,
    },
    smallComponentBGImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%',
        objectFit: 'cover',
        minWidth: isWeb ? 155 : 20,
        minHeight: isWeb ? 190 : 20,
    },
    marginLeft: {
        marginLeft: isWeb ? 100 : 60,
    },
    smallMarginLeft: {
        marginLeft: isWeb ? 20 : 10,
    },
    paddingLeft: {
        paddingLeft: 10
    },
    textShadow: {
        textShadowRadius: 1,
        textShadowColor: 'darkgrey',
        textShadowOffset: {width: 1,height: 1},
    },
    nomargin: {
        marginVertical: 0,
        marginHorizontal: 0,
    },

});