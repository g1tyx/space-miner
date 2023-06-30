import * as React from 'react';
import {Text} from 'react-native';

// State persistence
import {Provider, useDispatch, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './redux/store';
import * as stateSetters from './redux/action';

// Notifications
import * as Notifications from 'expo-notifications';

// Navigation tabs
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from "./navigation/TabNavigator";


import {
    calculateCapacityStorageStatus,
    calculateEnergyUsage, calculateEnergyUsageRatio, calculateOPSProduction,
    calculateRobotProduction,
    calculateSalesProfit,
    calculateSolarPanelProduction,
    cloneObject,
    generateInstanceId,
    hashAndUpload,
    isProjectCompleted, msToTime,
    numbroFormatCurrency
} from './components/helperFunctions';

// Event array
import getEvents from "./constants/Events";
// Achievements array
import getAchievements from "./constants/Achievements";
// Projects array
import getProjects from "./constants/Projects";

// Helper functions
import {
    numbroFormatInt,
    calculateRareUnobtaniumAmount,
    calculateUnobtaniumPriceAndTax,
    getRandomInt,
} from "./components/helperFunctions";

// Stock trading functions
import * as trading from './components/stockTradingHelpers'

// Fonts
import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

// Sounds
import { playSound } from './constants/AppSounds';
import Decimal from "break_infinity.js";

// Magic numbers
import * as magicNumbers from './constants/magicNumbers';

// First, set the handler that will cause the notification
// to show the alert

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});


const AppWrapper = () => {

    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

function App() {

    const dispatch = useDispatch();

    const totalUnobtanium = useSelector( state => state.totalUnobtanium);
    const decimalTotalUnobtanium = new Decimal(totalUnobtanium);

    const money = useSelector( state => state.money);
    const decimalMoney = new Decimal(money);

    const unobtanium = useSelector( state => state.unobtanium);
    const decimalUnobtanium = new Decimal(unobtanium);

    const unobtaniumPrice = useSelector( state => state.unobtaniumPrice);
    const salesTax = useSelector( state => state.salesTax);
    const storageCapacity = useSelector( state => state.storageCapacity);
    const storageCapacityStatus = useSelector( state => state.storageCapacityStatus);

    const robots = useSelector( state => state.robots);
    const robotPrice = useSelector( state => state.robotPrice);
    const robotUpgradePrice = useSelector( state => state.robotUpgradePrice);
    const robotLevel = useSelector( state => state.robotLevel);
    const robotInterval = useSelector( state => state.robotInterval);

    const chartData = useSelector( state => state.chartData);
    const epoch = useSelector( state => state.epoch);
    const timePassed = useSelector( state => state.timePassed);


    const activeProject = useSelector( state => state.activeProject);
    const completedProjects = useSelector( state => state.completedProjects);
    const researchSpeed = useSelector( state => state.researchSpeed);


    const autoSellEnabled = useSelector( state => state.autoSellEnabled);
    const robotButtonEnabled = useSelector( state => state.robotButtonEnabled);
    const robotUpgradeButtonEnabled = useSelector( state => state.robotUpgradeButtonEnabled);
    const robotProgress = useSelector( state => state.robotProgress);
    const robotEfficiency = useSelector( state => state.robotEfficiency);


    // Project state
    const standardOps = useSelector( state => state.standardOps);
    const opsWaitSeconds = useSelector( state => state.opsWaitSeconds);

    const completedAchievements = useSelector( state => state.completedAchievements);

    const clickPower = useSelector( state => state.clickPower);
    const clickCritChance = useSelector( state => state.clickCritChance);
    const clickCritMult = useSelector( state => state.clickCritMult);

    const robotMiningPerInterval = useSelector( state => state.robotMiningPerInterval);
    const solarBoost = useSelector( state => state.solarBoost);
    const quantumComputersActive = useSelector( state => state.quantumComputersActive);
    const spaceElevatorActive = useSelector( state => state.spaceElevatorActive);
    const alienTechActive = useSelector( state => state.alienTechActive);
    const productionBoost = useSelector( state => state.productionBoost);
    const droneCount = useSelector( state => state.droneCount);
    const droneEfficiency = useSelector( state => state.droneEfficiency);

    const rareUnobtaniumChance = useSelector( state => state.rareUnobtaniumChance);
    const rareUnobtaniumChanceInterval = useSelector( state => state.rareUnobtaniumChanceInterval);

    const blackHoleActive = useSelector( state => state.blackHoleActive);
    const blackHoleLevel = useSelector( state => state.blackHoleLevel);

    const hedgeFundInvestment = useSelector( state => state.hedgeFundInvestment);
    const tradingEngineLevel = useSelector( state => state.tradingEngineLevel);
    const tradingEngineUpgradePrice = useSelector( state => state.tradingEngineUpgradePrice);
    const tradingEngineUpgradeEnabled = useSelector( state => state.tradingEngineUpgradeEnabled);

    const hedgeFundBalance = useSelector( state => state.hedgeFundBalance);
    const decimalHedgeFundBalance = new Decimal(hedgeFundBalance);

    const hedgeFundCash = useSelector( state => state.hedgeFundCash);
    const decimalHedgeFundCash = new Decimal(hedgeFundCash);

    const hedgeFundStocks = useSelector( state => state.hedgeFundStocks);
    const decimalHedgeFundStocks = new Decimal(hedgeFundStocks);

    const tradingTableData = useSelector( state => state.tradingTableData);

    const stocks = useSelector( state => state.stocks);
    const investStrategy = useSelector( state => state.investStrategy);


    const marketAnalysis = useSelector( state => state.marketAnalysis);
    const futuresMarket = useSelector( state => state.futuresMarket);
    const unobtaniumAmountBoost = useSelector( state => state.unobtaniumAmountBoost);
    const unobtaniumPriceBoost = useSelector( state => state.unobtaniumPriceBoost);
    const boostEpochs = useSelector( state => state.boostEpochs);

    const trust = useSelector( state => state.trust);
    const trustThreshold = useSelector( state => state.trustThreshold);

    const projectCount = useSelector( state => state.projectCount);
    const projectCostMult = useSelector( state => state.projectCostMult);

    const transCostMult = useSelector( state => state.transCostMult);

    const asteroidAlert = useSelector( state => state.asteroidAlert);

    const activeEvent = useSelector( state => state.activeEvent);


    const modalVisible = useSelector( state => state.modalVisible);
    const modalContent = useSelector( state => state.modalContent);

    const userId = useSelector( state => state.userId);
    const instanceId = useSelector( state => state.instanceId);
    const blockhash = useSelector( state => state.blockhash);
    const useRemoteStorage = useSelector((state) => state.useRemoteStorage);
    const soundEnabled = useSelector( state => state.soundEnabled);
    const lastActive = useSelector( state => state.lastActive);

    const robotsPartsFactoryActive = useSelector( state => state.robotsPartsFactoryActive);
    const solarpanelsPartsFactoryActive = useSelector( state => state.solarpanelsPartsFactoryActive);
    const solarpanels = useSelector( state => state.solarpanels);
    const solarpanelEfficiency = useSelector( state => state.solarpanelEfficiency);

    function displayMessage(message) {
        dispatch(stateSetters.setModalContent(message));
        dispatch(stateSetters.setModalVisible(true));
    }

    /**
     * Generate a user ID if we do not already have one
     * @returns string
     */
    function getInstanceId() {

        if( instanceId.length < 1 ) {
            const instanceId = generateInstanceId();
            dispatch(stateSetters.setInstanceId(instanceId));
        }
        return instanceId;
    }


    function checkActiveProject() {
        let projectTimeElapsed = timePassed - activeProject.timestampStart;
        let projectCompleted  = projectTimeElapsed >= researchSpeed;

        if( projectCompleted ) {
            // Flag project as completed
            dispatch(stateSetters.setActiveProject({id: activeProject.id, timestampStart: activeProject.timestampStart, title: activeProject.title, completed: true}));

            handleFinishProject(activeProject.id);

        }
    }

    async function handleFinishProject(projectID) {

        let projects = getProjects(
            dispatch, magicNumbers.timePassedSeconds, decimalMoney, standardOps, robotMiningPerInterval,
            rareUnobtaniumChance, solarBoost, unobtaniumAmountBoost,
            unobtaniumPriceBoost, trustThreshold, quantumComputersActive);

        let currentProject = projects.find(o => o.id === projectID);

        // Apply project effect
        currentProject.effect();

        // Flag project as used
        if (currentProject.uses !== 0) {
            let newCompletedProjectsObj = cloneObject(completedProjects);

            newCompletedProjectsObj.completed.push(projectID);
            dispatch(stateSetters.setCompletedProjects(newCompletedProjectsObj));
        }

        // Allow another project to be activated
        dispatch(stateSetters.setActiveProject({
            id: 'None',
            timestampStart: timePassed,
            title: '',
            completed: false
        }));

        await playSound('project_completed', soundEnabled);

        updateProjectCount();
    }

    function updateProjectCount() {

        let projects = getProjects(
            dispatch, magicNumbers.timePassedSeconds, decimalMoney, standardOps, robotMiningPerInterval,
            rareUnobtaniumChance, solarBoost, unobtaniumAmountBoost,
            unobtaniumPriceBoost, trustThreshold, quantumComputersActive);

        let newProjectCount = 0;
        projects.map(item => {
                if( !isProjectCompleted(item.id, completedProjects)
                    && standardOps >= item.cost
                    && item.trigger()  ) {
                    newProjectCount++;
                }
            }
        );

        const hasNewProject = magicNumbers.oldProjectCount < newProjectCount;
        dispatch(stateSetters.setProjectCount(hasNewProject));

    }

    function updateChartData(oldEpoch) {

        // Add epoch number as label
        chartData['labels'].push(oldEpoch.toString());

        // Add total unobtanium data
        chartData['datasets'][0]['data'].push(decimalTotalUnobtanium.toString());

        if( chartData['labels'].length > 20 ) {
            console.log('Compressing chart');
            // Here we use the splice method to remove two elements starting from position three (zero based index):
            chartData['labels'].splice(0, 5);
            chartData['datasets'][0]['data'].splice(0,5);
        }


        let newChartData={
            labels: chartData['labels'],
            datasets: [
                {
                    data: chartData['datasets'][0]['data']
                },
            ]
        };

        dispatch(stateSetters.setChartData(newChartData));
    }

    const updateMoney = async (newMoney) => {
        dispatch(stateSetters.setMoney(newMoney));
        await playSound('cashier', soundEnabled);
    }

    const autoSellProduce = () => {

        const newTotalUnobtanium = decimalTotalUnobtanium.plus(decimalUnobtanium);
        dispatch(stateSetters.setTotalUnobtanium(newTotalUnobtanium));

        // Calculate profit and add to existing money
        const profit = calculateSalesProfit(decimalUnobtanium, unobtaniumPrice, salesTax, transCostMult);
        const newMoney = decimalMoney.plus(new Decimal(profit));
        dispatch(stateSetters.setMoney(newMoney));

        dispatch(stateSetters.setUnobtanium(new Decimal(0)));
        dispatch(stateSetters.setStorageCapacityStatus(0));
    };

    const updateSalePrice = () => {

        const args = {
            epoch: epoch,
            robots: robots,
            robotLevel: robotLevel,
            boostEpochs: boostEpochs,
            trustThreshold: trustThreshold,
            unobtaniumPriceBoost: unobtaniumPriceBoost,
            salesTax: salesTax,
            unobtaniumPrice: unobtaniumPrice
        };
        // Calculate production cost
        let newProductionPricing =  calculateUnobtaniumPriceAndTax(args);

        dispatch(stateSetters.setSalesTax(newProductionPricing.salesTax));
        dispatch(stateSetters.setUnobtaniumPrice(newProductionPricing.price));

        const oldEpoch = epoch;
        const newEpoch = Math.ceil(magicNumbers.timePassedSeconds/60);

        if( oldEpoch !== newEpoch ) {
            // updateChartData(oldEpoch);
            dispatch(stateSetters.setEpoch(newEpoch));

            // Subtract boostEpoch
            if( boostEpochs > 0 ) {
                dispatch(stateSetters.setBoostEpochs(boostEpochs - 1));
            }
        }

    };

    function checkRobotButtons() {
        // Make robot purchase button available
        if( decimalMoney.greaterThanOrEqualTo(robotPrice) ) {
            dispatch(stateSetters.setRobotButtonEnabled(true));
        } else {
            dispatch(stateSetters.setRobotButtonEnabled(false));
        }
        // Make robot upgrade button available
        if( robots > 0 && decimalMoney.greaterThanOrEqualTo(robotUpgradePrice) ) {
            dispatch(stateSetters.setRobotUpgradeButtonEnabled(true));
        } else {
            dispatch(stateSetters.setRobotUpgradeButtonEnabled(false));
        }
    }


    function buyStock(secondsAway) {
        // Maybe buy stock
        let buy = trading.maybeBuyStock(decimalHedgeFundBalance, investStrategy, decimalHedgeFundCash, stocks, secondsAway);

        if( buy.bought ) {

            dispatch(stateSetters.setStocks(buy.newStocks));

            //console.log('newStocks', newStocks);

            // Increase stock balance
            dispatch(stateSetters.setHedgeFundStocks(decimalHedgeFundStocks.plus(new Decimal(buy.newStock.total))));

            // Decrease cash balance
            dispatch(stateSetters.setHedgeFundCash(decimalHedgeFundCash.sub(new Decimal(buy.newStock.total))));
        }

        return buy;
    }

    function sellStock(){
        //console.log('sellStock', stocks[0].symbol);

        let stockToSell = cloneObject(stocks[0]);
        // Calculate amount of the trade
        let orderAmount = stockToSell.amount * stockToSell.price;

        // Affect stock balance
        const newHedgeFundStocks = decimalHedgeFundStocks.sub(new Decimal(orderAmount));
        dispatch(stateSetters.setHedgeFundStocks(newHedgeFundStocks));

        // Change cash balance
        const newHedgeFundCash = decimalHedgeFundCash.plus(new Decimal(orderAmount));
        dispatch(stateSetters.setHedgeFundCash(newHedgeFundCash));

        //let newTotal = decimalHedgeFundCash + hedgeFundStocks;
        // Change total balance
        // dispatch(stateSetters.setHedgeFundBalance(newTotal));

        let updatedStocks = [];
        if( stocks.length > 1 ) {

            // Build new stocks array
            for (let i = 0; i<stocks.length; i++) {

                // Skip first entry
                if( i !== 0) {
                    let currentStock =  cloneObject( stocks[i]);
                    updatedStocks.push(currentStock);
                }
            }
        }
        dispatch(stateSetters.setStocks(updatedStocks));
        return {decimalHedgeFundStocks:newHedgeFundStocks, decimalHedgeFundCash: newHedgeFundCash};
    }

    function updateStocks(secondsAway) {

        const update = trading.handleUpdateStocks(decimalHedgeFundCash, stocks, tradingEngineLevel, investStrategy, secondsAway)

        // Update total hedge fund balance
        // consisting of cash and stock value
        dispatch(stateSetters.setHedgeFundBalance(update.decimalHedgeFundCash.plus(update.newStockBalance)));

        // Set new stock balance
        dispatch(stateSetters.setHedgeFundStocks(update.newStockBalance));

        // Update stock array
        dispatch(stateSetters.setStocks(update.updatedStocks));

        return update

    }

    function tradeStocks() {

        let buy = {bought: false};
        if ( decimalHedgeFundCash.greaterThan(new Decimal(0))){
            buy = buyStock(0);
        }


        if ( !buy.bought && (stocks.length > 0 || decimalHedgeFundBalance.greaterThan(new Decimal(0)) ) ){
            updateStocks(0);
        }

        // Keep the stock for a minimum amount of time
        let sellTrigger = trading.maybeSellStock(stocks);
        if (!buy.bought && sellTrigger ){
            sellStock();
        }

        dispatch(stateSetters.setTradingEngineUpgradeEnabled(decimalMoney.greaterThanOrEqualTo(tradingEngineUpgradePrice)));

    }

    function tradeStocksWhileAway(secondsAway) {

        const hedgeFundCashBefore = decimalHedgeFundCash;
        const hedgeFundStocksBefore = decimalHedgeFundStocks;
        const hedgeFundBalanceBefore = decimalHedgeFundBalance;

        let buy = {bought: false};
        if (decimalHedgeFundCash > 0) {
            buy.bought = buyStock();
        }
        console.log('bought', buy.bought);
        let update = {stockBalance: 0, decimalHedgeFundCash: new Decimal(0), updatedStocks: [] };
        if (!buy.bought && (stocks.length > 0 || decimalHedgeFundBalance.greaterThan(new Decimal(0)) )) {
            update = updateStocks(secondsAway);
        }

        let sell = {decimalHedgeFundStocks: new Decimal(0), decimalHedgeFundCash: new Decimal(0)};
        if (stocks.length > 0) {
            sell = sellStock();
        }

        const hedgeFundBalanceDelta = hedgeFundBalanceBefore.sub((sell.decimalHedgeFundStocks.plus(sell.decimalHedgeFundCash)));




        // TODO Fix hedgeFundBalanceDelta calculation
        // maybe calculate from returned updated stocks?



        console.log('hedgeFundBalanceBefore', hedgeFundBalanceBefore );
        console.log('buy', buy );
        console.log('update', update );
        console.log('sell', sell );
        console.log('hedgeFundBalanceDelta', hedgeFundBalanceDelta );






        return hedgeFundBalanceDelta;
    }

    function displayTable() {

        // Calculate total stock balance
        let m = new Decimal(0);
        for (let i = 0; i < stocks.length; i++) {
            m = m.plus(new Decimal(stocks[i].total));
        }
        let stocksTotalValue = m;

        let newTotalBalance = stocksTotalValue.plus(decimalHedgeFundCash);

        if( stocks.length > 0 && newTotalBalance.lessThanOrEqualTo(new Decimal(0))) {
            displayMessage('Oh no! Your hedge fund blew up and lost all your money!');
            // TODO Maybe let money go negative so the user has to pay off the debts of the hedge fund
            newTotalBalance=0;
            dispatch(stateSetters.setStocks([]));
        }

        // Update total hedge fund balance
        // consisting of cash and stock value
        //dispatch(stateSetters.setHedgeFundBalance(newTotalBalance));

        let newTableData = trading.prepareStockTableData(stocks)
        // Update state
        dispatch(stateSetters.setTradingTableData(newTableData));
    }




    // TODO
    //  Black hole  projectButton6
    // Creates a black hole that pulls in all nearby asteroids and collects their resources.


    function robotMining(now) {

        let calcRobotProduction = 0;

        const diffMilliSeconds = now - magicNumbers.lastProgress;
        const diffSeconds = (now - magicNumbers.lastMined) / 1000;

        if( storageCapacityStatus < 1 ) {

            calcRobotProduction = calculateRobotProduction(robots, robotMiningPerInterval, robotEfficiency, droneEfficiency, unobtaniumAmountBoost, productionBoost);

            // Maybe reduce production by energy overusage
            calcRobotProduction = applyenergyUtilization(calcRobotProduction);

            // Maybe mine amount with robot
            if (calcRobotProduction > 0 && diffSeconds >= robotInterval) {

                magicNumbers.lastMined = now;

                let newUnobtanium = decimalUnobtanium.plus(new Decimal(calcRobotProduction));

                // Update sale price and mining cost
                if ((magicNumbers.timePassedSeconds % rareUnobtaniumChanceInterval === 0)) {
                    // Maybe find rare unobtanium
                    const rareAmount = calculateRareUnobtaniumAmount(newUnobtanium);
                    if (rareAmount > 0) {
                        displayMessage('Wow! Your robots found ' + numbroFormatInt(rareAmount) + ' of additional Unobtanium during mining!');
                    }
                    newUnobtanium = newUnobtanium.plus(new Decimal(rareAmount));
                }
                if( !autoSellEnabled && newUnobtanium.greaterThanOrEqualTo(storageCapacity) ) {
                    newUnobtanium = new Decimal(storageCapacity);
                }

                dispatch(stateSetters.setUnobtanium(newUnobtanium));
                magicNumbers.robotProgressDecimal = 0;
                dispatch(stateSetters.setRobotProgress(magicNumbers.robotProgressDecimal));
            }
            magicNumbers.storageFullNoticeDismissed = false;
        } else if( ! modalVisible && ! magicNumbers.storageFullNoticeDismissed ) {
            dispatch(stateSetters.setModalContent('Unobtanium storage is full! You must sell some Unobtanium or upgrade the storage to continue mining.'));
            dispatch(stateSetters.setModalVisible(true));
            magicNumbers.storageFullNoticeDismissed = true;
        }
        if( diffMilliSeconds >= 1000 ) {
            magicNumbers.lastProgress = now;
            // Calculate robot mining progress
            magicNumbers.robotProgressDecimal = (diffSeconds / robotInterval).toFixed(1); // TODO FIX Progress bar jumping

            if( magicNumbers.robotProgressDecimal > 1 ) {
                magicNumbers.robotProgressDecimal = 1;
            }

            if( calcRobotProduction <= 0 ) {
                magicNumbers.robotProgressDecimal = 0.00;
            }
            dispatch(stateSetters.setRobotProgress(parseFloat(magicNumbers.robotProgressDecimal)));
        }
    }


   // dispatch(stateSetters.setHedgeFundInvestment(true));
   //dispatch(stateSetters.setHedgeFundCash(1000000));
   //dispatch(stateSetters.setHedgeFundBalance(1000000));
   // dispatch(stateSetters.resetState(0));

    function applyenergyUtilization(amount) {
        const solarEnergyGeneration = calculateSolarPanelProduction(solarpanels, solarpanelEfficiency, solarBoost);
        const energyUsage = calculateEnergyUsage(robots, robotLevel, quantumComputersActive, robotsPartsFactoryActive, solarpanelsPartsFactoryActive, spaceElevatorActive, solarBoost);
        const energyUsageValues = calculateEnergyUsageRatio(solarEnergyGeneration, energyUsage);


        if( energyUsageValues.energyUtilization > 1 ) {
            amount = Math.floor(amount * (1 - energyUsageValues.decreasePercentDecimal));
        }
        if( energyUsageValues.decreasePercentDecimal >= 100 ) {
            amount = 0;
        }

        return amount;
    }

    function calculateOfflineProgress(millisecondsAway) {

        const secondsAway = Math.floor(millisecondsAway / 1000);
        const timeAway = msToTime(millisecondsAway);

        console.log('secondsAway', secondsAway, timeAway);

        // Calculate unobtanium mined while away
        let robotProductionPerSecond = calculateRobotProduction(robots, robotMiningPerInterval, robotEfficiency, droneEfficiency, unobtaniumAmountBoost, productionBoost) / robotInterval;
        let unobtaniumMinedIdle = secondsAway * robotProductionPerSecond;

        // Maybe reduce production by energy overusage
        unobtaniumMinedIdle = applyenergyUtilization(unobtaniumMinedIdle);

        let eurodollarEarnedIdle = 0;

        // Check storage maximum if autosell is disabled
        if( ! autoSellEnabled ) {

            // Add unobtanium to storage

            if( storageCapacityStatus < 1 ) {
                if (unobtaniumMinedIdle >= storageCapacity) {
                    // If the storage capacity has been reached
                    unobtaniumMinedIdle = storageCapacity;
                    dispatch(stateSetters.setUnobtanium(new Decimal(storageCapacity)));
                    dispatch(stateSetters.setStorageCapacityStatus(1));
                } else {
                    // Storage capacity not reached
                    dispatch(stateSetters.setUnobtanium(decimalUnobtanium.plus(new Decimal(unobtaniumMinedIdle))));
                }
            } else {
                unobtaniumMinedIdle = 0;
            }
        } else {

            // Sell Unobtanium for Eurodollar
            dispatch(stateSetters.setUnobtanium(new Decimal(unobtaniumMinedIdle)));
            eurodollarEarnedIdle = new Decimal(unobtaniumMinedIdle).mul(new Decimal(unobtaniumPrice));
            dispatch(stateSetters.setMoney(decimalMoney.plus(eurodollarEarnedIdle)));

        }

        // Calculate OPS generated while away
        let opsProducedIdle = secondsAway * (calculateOPSProduction(quantumComputersActive)  / opsWaitSeconds);
        // Maybe reduce production by energy overusage
        opsProducedIdle = applyenergyUtilization(opsProducedIdle);

        dispatch(stateSetters.setStandardOps(standardOps + opsProducedIdle));

        const eurodollarEarnedIdleString = numbroFormatCurrency(eurodollarEarnedIdle);
        const unobtaniumMinedIdleString = numbroFormatInt(unobtaniumMinedIdle, 100000);

        const modalContent =
            {
                title: 'Welcome back!',
                text: 'You were offline for ' + timeAway
                    + '.\nUnobtanium mined: ' + unobtaniumMinedIdleString
                    + '\nEuroDollar earned: ' + eurodollarEarnedIdleString
                    + '\nOPS generated: ' + numbroFormatInt(opsProducedIdle)
            };


        if( hedgeFundInvestment ) {
            // Trade if we have money in cash or stocks
            let hedgeFundBalanceDelta = 0;
            if (decimalHedgeFundCash > 0 || decimalHedgeFundStocks > 0 || decimalHedgeFundBalance > 0 ) {
                hedgeFundBalanceDelta = tradeStocksWhileAway(secondsAway);
            }

            modalContent.text += '\nHedge Fund Balance Change: ' +  numbroFormatCurrency(hedgeFundBalanceDelta);
        }


        // Trigger modal if we were away for longer than 60 seconds
        if( secondsAway > 60 ) {

            // TODO Offer to view ad for doubling the amounts

            dispatch(stateSetters.setModalImageSrc({}));
            dispatch(stateSetters.setModalContent(modalContent));
            dispatch(stateSetters.setModalVisible(true));
        }


    }

    function updateStorageCapacityStatus() {
        let cap = 0;
        if( decimalUnobtanium > 0) {
            cap = calculateCapacityStorageStatus(decimalUnobtanium, new Decimal(storageCapacity));
        }

        dispatch(stateSetters.setStorageCapacityStatus(cap));

    }

    async function achievementHandler() {
        let achievements = getAchievements(
            dispatch, robotMiningPerInterval, unobtaniumPrice, trust,
            standardOps, completedProjects, completedAchievements,
            decimalTotalUnobtanium, decimalMoney, robots, robotLevel, quantumComputersActive
        );

        for (let achievementNumber = 0; achievementNumber < achievements.length; achievementNumber++) {
            // Check achievement conditions
            const isCompleted = completedAchievements.completed.includes(achievements[achievementNumber].id);
            if (!isCompleted && achievements[achievementNumber].trigger()) {

                // Apply achievement effect
                achievements[achievementNumber].effect();

                // Update list of completed achievements
                let newCompletedAchievements = cloneObject(completedAchievements);
                newCompletedAchievements.completed.push(achievements[achievementNumber].id)
                dispatch(stateSetters.setCompletedAchievements(newCompletedAchievements));
                await playSound('achievement', soundEnabled);

            }
        }
    }

    function eventHandler() {
        let events = getEvents(
            dispatch, robotMiningPerInterval, unobtaniumPrice, unobtaniumPriceBoost, trust,
            standardOps, completedProjects, robots, epoch
        );

        // Chance of an event
        const eventRandomChance = Math.random() > (1 - magicNumbers.eventChance);
        let eventTrigger = Date.now() - magicNumbers.lastEvent >= magicNumbers.eventInterval && eventRandomChance;

        //Maybe trigger an event
        if( eventTrigger && 0 === activeEvent.length ) {

            // Select random event
            let eventNumber = getRandomInt(0, events.length - 1);
            let triggerEvent = events[eventNumber];

            // Check event conditions
            if( triggerEvent.trigger() ) {
                dispatch(stateSetters.setModalContent(triggerEvent.description));
                dispatch(stateSetters.setModalVisible(true));
                dispatch(stateSetters.setActiveEvent(triggerEvent.id));
            }
            magicNumbers.lastEvent = Date.now();

        } else if( activeEvent.length > 0 ) {
            handleActiveEvent(events);
        }
    }

    async function handleActiveEvent(events) {
        let currentEvent = events.find(o => o.id === activeEvent);
        currentEvent.effect();
        dispatch(stateSetters.setActiveEvent(''));
        await playSound('event', soundEnabled);

    }

    function produceOPS() {

        const timePassed = magicNumbers.timePassedSeconds - magicNumbers.lastOPS

        if(timePassed >= opsWaitSeconds) {

            magicNumbers.lastOPS = magicNumbers.timePassedSeconds;

            let opsProduction = calculateOPSProduction(quantumComputersActive) ;
            // Maybe reduce production by energy overusage
            opsProduction = applyenergyUtilization(opsProduction);

            dispatch(stateSetters.setStandardOps(standardOps + opsProduction));

            magicNumbers.opsProgressDecimal = 0;
            dispatch(stateSetters.setOpsProgress(magicNumbers.opsProgressDecimal));
        }
        // Calculate OPS production progress
        magicNumbers.opsProgressDecimal = (magicNumbers.timePassedSeconds - magicNumbers.lastOPS) / opsWaitSeconds;
        dispatch(stateSetters.setOpsProgress(magicNumbers.opsProgressDecimal));
    }

    /**
     * Keep track of the time via delta time instead of incrementing in setInterval
     */
    function updateClock(now) {

        // Reset the clockMilliseconds after a game reset
        if( timePassed === 0 ) {
            magicNumbers.clockMilliSeconds = 0;
        }

        // Pick up from state where we left off
        if (magicNumbers.clockMilliSeconds === 0) {
            magicNumbers.clockMilliSeconds = timePassed;
            magicNumbers.lastMined = now;
        }
        let timeDelta = now - magicNumbers.lastUpdate;
        magicNumbers.clockMilliSeconds += timeDelta;
        magicNumbers.lastUpdate = now;

        dispatch(stateSetters.setTimePassed(magicNumbers.clockMilliSeconds));

        magicNumbers.timePassedSeconds = Math.floor(timePassed / 1000);

        // Store the timestamp where the user was last active
        if( (now - magicNumbers.lastActiveUpdate) >= 1000 ) {
            dispatch(stateSetters.setLastActive(now));
            magicNumbers.lastActiveUpdate = now;
            magicNumbers.wasOffline = false;
            //console.log(new Date(lastActive).toString());
        }
    }

    React.useEffect(() => {

            const timeInterval = setInterval(() => {

                let now = Date.now();

                // Maybe calculate offline progress if the user was away for more than one minute
                const millisecondsAway = now - lastActive;
                if( ! magicNumbers.wasOffline && lastActive > 0 && millisecondsAway >= 3000) {
                    calculateOfflineProgress(millisecondsAway);
                    magicNumbers.wasOffline = true;
                }

                updateClock(now);

                // Sell produce
                if (autoSellEnabled && magicNumbers.timePassedSeconds % magicNumbers.sellProduceInterval === 0) {
                    autoSellProduce();
                } else {
                    updateStorageCapacityStatus();
                }

                if ( ! magicNumbers.wasOffline && robots > 0 && storageCapacityStatus < 1) {
                    robotMining(now);
                }


                // Update sale price and mining cost
                if ((now - magicNumbers.lastSalePriceUpdate) >= (magicNumbers.updateSalePriceInterval * 1000)) {
                    updateSalePrice();
                    magicNumbers.lastSalePriceUpdate = Date.now();
                }


                // Check active Projects
                if (activeProject.id !== 'None') {
                    checkActiveProject();
                } else if(magicNumbers.timePassedSeconds % 5 === 0) {
                    updateProjectCount();
                }


                // Check robot buttons
                checkRobotButtons();

                // Trade if we have money in cash or stocks
                if (decimalHedgeFundCash > 0 || decimalHedgeFundStocks > 0 || decimalHedgeFundBalance > 0 ) {
                    if( ! magicNumbers.wasOffline && (now - magicNumbers.lastStockTrading) >= magicNumbers.stockTradingInterval ) {
                        tradeStocks();
                        magicNumbers.lastStockTrading = now;
                    }
                }
                // Update trading table
                if( stocks.length > 0 || tradingTableData.length > 0 ) {
                    displayTable();
                }

                // Maybe trigger an event
                if( magicNumbers.timePassedSeconds > 60 ) {
                    eventHandler();
                }

                // Check achievements
                if( ! modalVisible && magicNumbers.timePassedSeconds % 7 === 0 ) {
                    achievementHandler();
                }

                // Produce OPS if the quantum computer is active
                if (! magicNumbers.wasOffline && quantumComputersActive > 0) {
                    produceOPS();
                }

                // Hash state and upload to remote storage
                if( instanceId.length < 1 ) {
                    const getInstanceID = getInstanceId();
                }

                if (useRemoteStorage && userId && (now - magicNumbers.lastUpload) >= magicNumbers.uploadInterval) {
                    hashAndUpload(instanceId, userId, blockhash).then(
                        magicNumbers.lastUpload = now
                    );
                }

            }, magicNumbers.timerMilliSec);

            return () => clearInterval(timeInterval);
    });

    const [fontsLoaded] = useFonts({
        'Share-Tech-Mono': require('./assets/fonts/ShareTechMono-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
         <PersistGate loading={<Text>Loading...</Text>} persistor={persistor} onLayout={onLayoutRootView}>
            <NavigationContainer>
                <BottomTabNavigator />
            </NavigationContainer>
        </PersistGate>
    );
}

export default AppWrapper;