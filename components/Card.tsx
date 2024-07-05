import { Box, Center, Input } from "@chakra-ui/react"
import { Header } from "./Header"
import { login } from "../services/login"
import { Botton } from "./Button"

export const Card = () => {
  return(
    <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Header title="Dio Bank!" />
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Botton event={login} ButtonConteudo={'Button'}/>
          </Center>
        </Box>
      </Box>
  )
}