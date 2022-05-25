import { GetServerSideProps } from "next"
import path from "path"

//GET SERVER SIDE PROPS
//Execution on server
//getServerSideProps will be going to run always
export const getServerSideProps: GetServerSideProps = async (context) =>
{
    

    return{

        revalidate:10,
        props: {
            myFavNum : Math.random()
        }
    }
}

export default function Dynamic (props)
{
    return <h1> Dynamic number is - {props.myFavNum}</h1>
}