import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {
	productListReducer,
	productDetailsReducer,
} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'
import {
	userLoginReducer,
	userRegisterReducer,
	userDetailsReducer,
	userUpdateReducer,
	userListReducer,
} from './reducers/userReducers'
import {
	orderCreateReducer,
	orderDetailsReducer,
	orderPayReducer,
	ordeListMyReducer,
} from './reducers/orderReducers'

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,

	cart: cartReducer,

	userLogin: userLoginReducer,
	userRegister: userRegisterReducer,
	userDetails: userDetailsReducer,
	userUpdate: userUpdateReducer,
	userList: userListReducer,

	orderCreate: orderCreateReducer,
	orderDetails: orderDetailsReducer,
	orderPay: orderPayReducer,
	orderListMy: ordeListMyReducer,
})
const cartItemsFromStorgage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: []

const userInfoFromStorgage = localStorage.getItem('userInfo')
	? JSON.parse(localStorage.getItem('userInfo'))
	: null

const shippingAddressFromStorgage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: null

const paymentMethodFromStorgage = localStorage.getItem('paymentMethod')
	? JSON.parse(localStorage.getItem('paymentMethod'))
	: null

const initialState = {
	cart: {
		cartItems: cartItemsFromStorgage,
		shippingAddress: shippingAddressFromStorgage,
		paymentMethod: paymentMethodFromStorgage,
	},
	userLogin: {userInfo: userInfoFromStorgage},
}

const middleware = [thunk]
const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)
export default store
