import {useStore} from "vuex";
import {ACTION} from "@/store/action-types";
import useSurvey from "@/composables/api/survey";

export default function useQuestionsManager() {
    const servey = useSurvey();
    const store = useStore();

    async function fetch(force = false) {
        if (!force && store.state.questions.data.length > 0) return;

        const res = await servey.getQuestions();
        if (res.status === 200 && res.data.Data) {
            const tmp_questions = res.data.Data;

            const questions = tmp_questions.reduce((a, c) => {
                c.checked = false;

                //변경된 api로
                if (c.pcode === null) {
                    c.ch = [];
                    a.push(c);
                } else if(a.length > 0){
                    const root = a[a.length - 1];
                    const ppcode = root.code;
                    if(ppcode === c.pcode){
                        c.ch = [];
                        root.ch.push(c);
                    } else if(root.ch.length > 0) {
                        const pcode = root.ch[root.ch.length - 1].code;
                        if(pcode === c.pcode){
                            root.ch[root.ch.length - 1].ch.push(c);
                        }
                    }
                }
                return a;
            }, []);

            return store.dispatch(ACTION.QUESTIONS.makeDispatch(ACTION.QUESTIONS.SET), questions);
        } else {
            return clear();
        }
    }

    async function clear() {
        return store.dispatch(ACTION.QUESTIONS.makeDispatch(ACTION.QUESTIONS.SET), []);
    }

    async function selectChanged(pidx, idx){
        return store.dispatch(ACTION.QUESTIONS.makeDispatch(ACTION.QUESTIONS.SELECT), {pidx, idx});
    }

    return {
        fetch,
        clear,
        get: () => store.getters["questions/data"],
        selectChanged,
    }
}
