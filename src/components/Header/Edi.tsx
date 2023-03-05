import './Edi.css'
import { Button, Flex, Box, Center, Text, Spacer } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
import { useNavigate } from 'react-router-dom'
const Edi = () => {
    
    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }
    return(
        <Flex backgroundColor='#A6BB8D' padding='5px'>
            <Box>
                <Center>
                    <Text fontSize='3x1' className='dona'>Edi Bank</Text>
                </Center>
            </Box>
            {
                isLoggedIn && (
                    <>
                    <Spacer/>
                    <Button
                    onClick={() => logout()}
                    >
                        Sair
                    </Button>
                    </>
                )
            }
        </Flex>
    )
}

export default Edi