import { createStore } from 'vuex';

import user from './modules/user'
import products from "@/store/modules/products";
import questions from "@/store/modules/questions";
import settings from "@/store/modules/settings"
import app from "@/store/modules/app"
import buffer from "@/store/modules/buffer";

export default createStore({
  modules: {user, products, questions, settings, app, buffer}
})
