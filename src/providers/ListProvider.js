import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";


const ListContext = createContext([])

export const useList = () => useContext(ListContext)

export const ListProvider = ({children}) => {

    const [list,setList] = useState([])
    const [partyList,setPartyList] = useState(JSON.parse(localStorage.getItem('party')) || [])
    const [gradList,setGradList] = useState(JSON.parse(localStorage.getItem('graduation')) || [])
    const [wedList,setWedList] = useState(JSON.parse(localStorage.getItem('wedding')) || [])

    const addW = (item) => {

        const newItem = {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'wedding'
        }

        const storageList = JSON.parse(localStorage.getItem('wedding')) || []
        storageList.push(newItem)
        localStorage.setItem('wedding', JSON.stringify(storageList))
        setWedList(storageList)
    }

    const addG = (item) => {

        const newItem = {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'graduation'
        }

        const storageList = JSON.parse(localStorage.getItem('graduation')) || []
        storageList.push(newItem)
        localStorage.setItem('graduation', JSON.stringify(storageList))

        setGradList(storageList)
    }

    const addP = (item) => {

        const newItem = {
            ...item,
            code: Math.random() *(1000 - 1) + 1,
            elt: 'party'
        }

        const storageList = JSON.parse(localStorage.getItem('party')) || []
        storageList.push(newItem)
        localStorage.setItem('party', JSON.stringify(storageList))

        setPartyList( storageList)
    }

    const rmv = (lista, codigo, set, item) => {

     const filterList = lista.filter((elt) => elt.code !== codigo)
     localStorage.setItem(item.elt, JSON.stringify(filterList))
     set(filterList)

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
