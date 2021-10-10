import {ItemDisplay, Button} from './styles'
import { useList } from '../../providers/ListProvider'
export default function Display({item, lista, set}){

    const { addG, addW, addP, rmv} = useList()


    return(
         <ItemDisplay>
             <img src={item.image_url}></img>
             <section>
                <h3>Nome: {item.name}</h3>
                <h4>{item.description}</h4>
                <h4>Volume: {item.volume.value} litros</h4>
                <h4>Data de produção: {item.first_brewed}</h4>
             </section>
             <section style={{display: 'flex', flexDirection: 'column'}}>
                 {
                     item.elt === undefined ?
                     <>
                     <Button onClick={() => addW(item)}> add casamento</Button>
                     <Button onClick={() => addG(item)}> add formatura</Button>
                     <Button onClick={() => addP(item)}> add confraternização</Button>
                     </>
                     : 
                     <Button onClick={() => rmv(lista, item.code,set, item)}>Remover</Button>
                }
             </section>
         </ItemDisplay>
    )
}


