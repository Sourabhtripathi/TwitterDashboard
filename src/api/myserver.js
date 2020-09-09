import axios from 'axios';
import { serverUrl } from '../gloabal_var';

export default axios.create({
	baseURL: serverUrl
});
