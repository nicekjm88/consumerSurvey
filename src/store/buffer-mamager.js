import store from '@/store';
import {ACTION} from "@/store/action-types";

export default function useBufferManager(){
    async function setSurveyee(data){
        return store.dispatch(ACTION.BUFFER.makeDispatch(ACTION.BUFFER.SET_SURVEYEE), data);
    }

    async function clearSurveyee(){
        return store.dispatch(ACTION.BUFFER.makeDispatch(ACTION.BUFFER.CLEAR_SURVEYEE));
    }

    function getSurveyee(){
        return store.getters["buffer/surveyee"];
    }

    return {
        setSurveyee,
        clearSurveyee,
        getSurveyee,
    }
}
