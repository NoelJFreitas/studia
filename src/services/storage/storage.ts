import { MMKVStorage } from "./implementation/mmkv";
import { Storage } from "./types";

//Switch to the desired storage located in the implementation folder
export const storage: Storage = MMKVStorage;
