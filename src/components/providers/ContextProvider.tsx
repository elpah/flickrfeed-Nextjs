"use client"

import { GlobalContext, IGlobalContext } from '../context/GlobalContext';
import { useState } from "react"

const ContextProvider =({children}:{children:React.ReactNode
})=>{

    const [keyword, setKeyword] = useState<string>('');
    const globalContextValue: IGlobalContext = {
    keyword,
    setKeyword,
  };
return(
  <GlobalContext.Provider value={globalContextValue}>
  {children}
  </GlobalContext.Provider>
)
}

export default ContextProvider