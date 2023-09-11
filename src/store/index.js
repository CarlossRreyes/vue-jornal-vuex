import journalModule from "@/modules/daybook/store/journal";
import { createStore } from "vuex";



const store = createStore({
    // journal: journalModule
    modules:{
        journalModule
    }
})

export default store