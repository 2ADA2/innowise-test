import updateMain, {updateFavs} from "../utils/update.js";

const defaultValue = import.meta.env.VITE_DEFAULT_REQ
updateMain(defaultValue)
updateFavs()