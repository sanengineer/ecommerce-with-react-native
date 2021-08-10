import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    //
    //debug
    console.log('jsonValue_storeData, jsonValue');
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    //
    //debug
    console.log('error:', e);
  }
};

export const getData = async storageKey => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    //
    //debug
    console.log('jsonValue_getData:', '\n', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    //error reading value
    //
    //debug
    console.log('error:', e);
  }
};
