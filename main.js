import {View} from './modules/view.js';
import {Search} from './modules/search.js';
import {Api} from './modules/api.js'



const api = new Api()


const search = new Search(  new View(), api ) 

