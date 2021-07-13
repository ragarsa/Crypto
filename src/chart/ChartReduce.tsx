import { ActionType, CryptoActions } from "../interfaces/interfaceChart";



export default (data: any, action: CryptoActions) => {

    switch(action.type) {
        
        case ActionType.CALL_NAME: 
            return {
                data: action.payload
            }

        case ActionType.GET_DATA:
            return {
                data: action.payload

            }
        default: 
            return data;

    }


}