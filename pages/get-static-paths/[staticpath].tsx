import { useRouter } from "next/router"
import { GetStaticProps, GetStaticPaths } from "next"
//import path from "path"

//GET STATIC PATH 
//Execution on server
export const getStaticProps: GetStaticProps = async (context) =>
{
      console.log('afaroj');
        
    return{

        revalidate:10,
        props: {
            myFavNum : Math.random()
        }
    }
}

// //getStaticProps will run at build time. and it does not run at runtime
export const getStaticPaths: GetStaticPaths = async ()=>
{
    return{
    paths: [
        { params: { staticpath: 'hello' } },
        { params: { staticpath: 'world' } }
      ],
      //fallback false will restrict your domain and only staticpath names can visit the output
      //fallback: false
    fallback: true
}

} 

export default function MyFruit (props)
{
    const router = useRouter()

    //on fallback true this loader will be shown and then on every page the following output will be shown
    if(router.isFallback)
    {
        return <h1>Loading.....</h1>
    }

    //console.log(router.query)
    return  <h1>HELLO this is getStaticPath example : {props.myFavNum}</h1>
}

