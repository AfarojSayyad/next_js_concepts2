import { useRouter } from 'next/router'

export default function Subname ()
{
    // use router example
    const router = useRouter()

    console.log(router);

    function takeMeHome()
    {
        router.push('/')
    }
    

    return(
        <> 
            <h1> Hello from subname {router.query.name} {router.query.subname}</h1>

            <button onClick={takeMeHome}>
                Home
            </button>
        </>
    )
}