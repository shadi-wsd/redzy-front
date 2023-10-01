import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { createPracticeAccount, fetchUserReducer, newUserReducer, resetCredential, userDetailReducer, userReducer, userRegisterReducer, userUpdateReducer } from "./states/reducers/userReducer";
import { newProductReducer, productDetailReducer, productReducer, productsReducer } from "./states/reducers/productReducer";
import { commissionDetailReducer, commissionReducer, commissionsReducer, newCommissionReducer } from "./states/reducers/commissionReducer";
import { cancelJourney, getCustomJourneyReducer, newCustomJourneyReducer, newJourneyReducer, userAllJourneyReducer, userJourneyByIdReducer, userJourneyHistoryByIdReducer, userJourneyReducer, userPlacedJourneyReducer, userSubmitJourneyReducer } from "./states/reducers/journeyReducer";
import { chargeWallet, saveWalletAddress, saveWalletPin, userWalletByIdReducer, userWalletReducer } from "./states/reducers/walletReducer";
import { userWithdrawalReducer, withdrawalAnswerReducer, withdrawalRequests } from "./states/reducers/withdrawalReducer";

const reducer = combineReducers({
    user: userRegisterReducer,
    users: userReducer,
    allUsers: fetchUserReducer,
    newUser: newUserReducer,
    userDetails: userDetailReducer,
    userUpdate: userUpdateReducer,
    resetCredential: resetCredential,
    practiceAccount: createPracticeAccount,
    allProducts: productsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productDetails: productDetailReducer,
    commission: commissionReducer,
    allCommissions: commissionsReducer,
    newCommission: newCommissionReducer,
    commissionDetail: commissionDetailReducer,
    newJourney: newJourneyReducer,
    cancelJourney: cancelJourney,
    customJournies: getCustomJourneyReducer,
    newCustomJourney: newCustomJourneyReducer,
    userJourney: userJourneyReducer,
    userJourneyById: userJourneyByIdReducer,
    userAllHistory: userAllJourneyReducer,
    userJourneyHistory: userJourneyHistoryByIdReducer,
    userWallet: userWalletReducer,
    saveWallet: saveWalletAddress,
    saveWalletPin: saveWalletPin,
    chargedWallet: chargeWallet,
    userWalletById: userWalletByIdReducer,
    userPlacedOrder: userPlacedJourneyReducer,
    userSubmitOrder: userSubmitJourneyReducer,
    userWithdrawal: userWithdrawalReducer,
    allWithdrawalRequest: withdrawalRequests,
    withdrawalAnswer: withdrawalAnswerReducer,
});

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;