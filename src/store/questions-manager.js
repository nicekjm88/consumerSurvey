import {useStore} from "vuex";
import {ACTION} from "@/store/action-types";
import useSurvey from "@/composables/api/survey";

export default function useQuestionsManager() {
    const survey = useSurvey();
    const store = useStore();

    async function fetch(force = false) {
        if (!force && store.state.questions.data.length > 0) return;

        const res = await survey.getQuestions();
        if (res.status === 200 && res.data.Data) {
            const tmp_questions = res.data.Data;

            const questions = tmp_questions.reduce((a, c) => {
                c.checked = false;

                if (c.PCode === null) {
                    c.ch = [];
                    a.push(c);
                } else if(a.length > 0){
                    const root = a[a.length - 1];
                    const ppcode = root.Code;
                    if(ppcode === c.PCode){
                        c.ch = [];
                        root.ch.push(c);
                    } else if(root.ch.length > 0) {
                        const pcode = root.ch[root.ch.length - 1].Code;
                        if(pcode === c.PCode){
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

    function getData(){
        const items = store.getters["questions/data"];

        if(items.length > 0) {
            const data = items.reduce((d, c) => {
              if(c.ch && c.ch.length > 0){
                  const gch = c.ch[0].ch;
                  if(gch && gch.length > 0){
                      const sel = gch.filter(x => x.checked);
                      if(sel.length > 0){
                          if(c.Value === '0'){
                              //나이
                              d.Age = Number(sel[0].Value);
                          }else if(c.Value === '1'){
                              //가족수
                              d.Families = Number(sel[0].Value);
                          }else if(c.Value === '2'){
                              //애터미 제품 사용 여부
                              d.UseAtomyYn = sel[0].Value;
                          }
                      }
                  }
              }
              return d;
            }, {});

            if(data.Age && data.Families && data.UseAtomyYn){
                return data;
            }
        }

        return null;
    }

    return {
        fetch,
        clear,
        get: () => store.getters["questions/data"],
        selectChanged,
        getData,
    }
}
