import { Button } from "@chakra-ui/react"

interface ButtonConfig {
    event: () => void
    ButtonConteudo: String
}

export const Botton = ({event, ButtonConteudo}: ButtonConfig ) => {
    return (
        <Button onClick={event} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
            {ButtonConteudo}
        </Button>
    )
}