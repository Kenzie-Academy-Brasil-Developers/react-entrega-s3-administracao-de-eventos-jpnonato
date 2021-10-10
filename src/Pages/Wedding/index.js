import {Main} from './styles'
import Display from '../../components/Display'
import { useHistory } from 'react-router-dom'
import { useList } from '../../providers/ListProvider'
import { Container } from './styles'


import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import Badge from '@material-ui/core/Badge';
import { styled } from '@material-ui/core/styles';



export default function Home(){

   

    const history = useHistory()

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        },
        }));

        const {list, wedList, gradList, partyList, setWedList} = useList()
        console.log(list)
    const ToWedding = () => history.push('/wedding')
    const ToParty = () => history.push('/party')
    const ToGraduation = () => history.push('/Graduation')
    const ToHome = () => history.push('/')
    

    return(
        <Main>
            <nav>
                <Box>
                    <AppBar position="static">
                        <Toolbar sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <IconButton onClick={ToHome}>
                                    <p>Home</p>
                            </IconButton>
                            <IconButton onClick={ToParty}>
                                <StyledBadge badgeContent={partyList.length} color="warning" style={{marginRight: '12px'}}>
                                    <p>Confraternização</p>
                                </StyledBadge>
                            </IconButton>
                            <IconButton onClick={ToGraduation}>
                                <StyledBadge badgeContent={gradList.length} color="warning" style={{marginRight: '12px'}}>
                                    <p>Formatura</p>
                                </StyledBadge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
            </nav>
            <Container>
                {
                    wedList.map((elt) => <Display item={elt} lista={wedList} set={setWedList}></Display>)
                }
             
            </Container>
        </Main>
    )
}