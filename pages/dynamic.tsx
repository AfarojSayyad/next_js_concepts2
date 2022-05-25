import { GetStaticProps } from "next"
import path from "path"

//GET STATIC PROPS 
//Execution on server
export const getStaticProps: GetStaticProps = async (context) =>
{
    //fs stands for file system
    const fs = require('fs')

    const txt = fs.readFileSync(path.join(process.cwd(), 'public/robots.txt'), 'utf8')

    return{

        revalidate:10,
        props: {
            myFavNum : txt
        }
    }
}

export default function Dynamic (props)
{
    return <h1> Dynamic number is - {props.myFavNum}</h1>
}