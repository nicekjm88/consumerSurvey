import useSurvey from "@/composables/api/survey";
import {useStore} from "vuex";
import {ACTION} from "@/store/action-types";

export default function useSettingsManager(){
    const survey = useSurvey();
    const store = useStore();

    async function fetch(force = false) {
        if (!force && store.state.StdPV > 0 && store.state.StdN > 0 && store.state.StdScore > 0) return;

        const res = await survey.getSettings();
        if (res.status === 200 && res.data.Data) {
            const tmp_settings = res.data.Data;
            return store.dispatch(ACTION.SETTINGS.makeDispatch(ACTION.SETTINGS.SET), {
                StdPV: Number(tmp_settings.StdPV),
                StdN: Number(tmp_settings.StdN),
                StdScore: Number(tmp_settings.StdScore)
            });
        }
    }

    function getData(){
        return store.getters['settings/data']
    }

    return {
        fetch,
        getData,
    }
}
