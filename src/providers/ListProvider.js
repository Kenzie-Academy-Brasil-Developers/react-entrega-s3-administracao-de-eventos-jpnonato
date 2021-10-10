import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const ListContext = createContext([])

export const useList = () => useContext(ListContext)

export const ListProvider = ({children}) => {

    const [list,setList] = useState([])
    const [partyList,setPartyList] = useState([])
    const [gradList,setGradList] = useState([])
    const [wedList,setWedList] = useState([])

    const addW = (item) => {

        
        setWedList([...wedList, {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'true'
        }])
        console.log(wedList)
    }

    const addG = (item) => {

        console.log(gradList.volume)

        setGradList([...gradList, {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'true'
        }])
    }
    const addP = (item) => {

        console.log(partyList.volume)

        setPartyList([...partyList, {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'true'
        }])
    }

    const rmv = (lista, codigo, set) => {

        set(lista.filter((elt) => elt.code !== codigo))

    }
    

    useEffect(() => {
        axios.get('https://api.punkapi.com/v2/beers')
        .then((response) => setList(response.data))
    },[])


    return(

        <>
         <ListContext.Provider 
         value={{list, addG, addW, addP, gradList, partyList, wedList, rmv, setGradList, setPartyList, setWedList}}
         >
            {children}
         </ListContext.Provider>
        </>

    )
}
