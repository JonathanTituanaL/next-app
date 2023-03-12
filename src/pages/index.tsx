import { Button } from "@nextui-org/react";
import { NextPage } from "next";
import Layout from "../../components/layout/Layout";
const HomePage: NextPage = () =>{
  return (
    <Layout>
      <h1>Hola Mundo</h1>
      <Button color={'gradient'}>Button</Button>
    </Layout>
  )
}

export default HomePage;