import { useQuery } from "react-query"
import { getAllBooks } from "../Api"
import { Flex } from "rebass"
import { Container } from "../shared/Container"
import { BookItem } from "./BookItem";
import{ TailSpin} from 'react-loader-spinner'


export const BooksList=()=>{
    const {data ,error ,isLoading,isError}=useQuery("books", getAllBooks)
    if (isLoading){
        
        return (<Container>
            <Flex py="5" justifyContent="center" >
            <TailSpin color="#ccc"/>
            </Flex>
            </Container>
        );
    }

    if(isError){
        return <span>Errror: {error.massage}</span> 
    }
    return(
        <Container>
            <Flex flexDirection="column" alignItems="center"> 
            {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} key={id} id={id} />
        ))}
            </Flex>
        </Container>
    )

   
}