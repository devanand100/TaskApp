


export function localStorageSet(key,value){
    window.localStorage.setItem(key,JSON.stringify(value))

 }

 export function localStorageGet(key){
      let localItems = window.localStorage.getItem(key) ; 
    return (JSON.parse(localItems) )
 }