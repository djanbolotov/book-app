import { Flex, Text, Button, Link as StyledLink } from "rebass/styled-components";
import { Link as RouterLink } from 'react-router-dom'
import { useMutation, useQueryClient } from "react-query";
import { removeBook } from "../Api";
import{ TailSpin} from 'react-loader-spinner'

export const BookItem = ({id, title, author }) => {
  const queryClient = useQueryClient()
  const { mutateAsync, isLoading } = useMutation(removeBook)

  const remove = async () => {
    await mutateAsync(id)
    queryClient.invalidateQueries('books')
  }
  /*const columns=[
    {
      title:'Title',
      dataIndex:'title',
      key:'title',
      render:text=><StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">text</StyledLink>,
    },
    {
      title: 'Autor',
    dataIndex: 'author',
    key: 'author',
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button onClick={remove} margin="10px">
      { isLoading ? <TailSpin color="#ccc" height={10} /> : "Remove" }
    </Button>,
    },
  ]*/


  return (
    <Flex key={id} p={3} width="100%" alignItems="center">
      <StyledLink as={RouterLink} to={`/update-book/${id}`} mr="auto">{title}</StyledLink>
      <Text>{author}</Text>
      <Button onClick={remove} margin="10px">
        { isLoading ? <TailSpin color="#ccc" height={10} /> : "Remove" }
      </Button>
    </Flex>
  );
};