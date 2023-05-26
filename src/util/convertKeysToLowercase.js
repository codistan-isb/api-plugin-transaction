export default function convertKeysToLowercase(obj) {
    const convertedObj = {};
    for (const key in obj) {
      let lowercaseValue;
  
      if (key === 'date') {
        convertedObj[key] = obj[key];
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        convertedObj[key] = convertKeysToLowercase(obj[key]);
      } else if (typeof obj[key] === 'string') {
        lowercaseValue = obj[key].toLowerCase();
        convertedObj[key] = lowercaseValue;
      } else {
        convertedObj[key] = obj[key];
      }
    }
    return convertedObj;
  }
  