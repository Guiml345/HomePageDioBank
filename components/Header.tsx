import { Center } from "@chakra-ui/react";

interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => (
    <Center fontFamily={'Heading Font Name'}  fontSize='50'  marginTop='5px'>
        {title}
    </Center>
);