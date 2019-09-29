function camelCaseToSentenceCase(reducerName) {
  const result = reducerName.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function camelCaseToUpperCase(reducerName) {
  return reducerName.replace(/([A-Z])/g, '_$1').toUpperCase();
}

export function httpActionTypes(reducerName) {
  const words = `${camelCaseToSentenceCase(reducerName)}`;
  const uppercase = camelCaseToUpperCase(reducerName);
  return {
    BEGIN: `[${words}] FETCH_${uppercase}_BEGIN`,
    SUCCESS: `[${words}] FETCH_${uppercase}_SUCCESS`,
    FAILURE: `[${words}] FETCH_${uppercase}_FAILURE`
  };
}
