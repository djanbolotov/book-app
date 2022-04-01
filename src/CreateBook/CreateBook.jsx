
import { BookForm } from "../shared/BookForm"
import { Box,Heading } from "rebass/styled-components"
import { useMutation } from "react-query"
import { createBook } from "../Api"
import { useHistory } from "react-router-dom"
import { Container } from "../shared/Container"


export const CreateBook =()=>{
    const history =useHistory()
    

    const {mutateAsync , isLoading}=useMutation(createBook);

    const onFormSubmit=async(data)=>{
        await mutateAsync(data)
        history.push("/Home")
    }
    return (
        <Container>
            <Box sx={{py:3}}>

            <Heading sx={{marginBottom:3}}>Crate New Book</Heading>
             <BookForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>  
            </Box>
        </Container>
    )
}