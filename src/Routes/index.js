import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Graduation from '../Pages/Graduation'
import Party from '../Pages/Party'
import Wedding from '../Pages/Wedding'

export default function Routes(){


    return(
        <Switch>
            <Route exact path='/'>
               <Home />
            </Route>
            <Route path='/Graduation'>
                <Graduation />
            </Route>
            <Route path='/Party'>
                <Party />
            </Route>
            <Route path='/Wedding'>
                <Wedding />
            </Route>
        </Switch>
    )
}