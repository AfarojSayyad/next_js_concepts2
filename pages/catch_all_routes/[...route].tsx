import { useRouter } from "next/router";

export default function Route ()
{
    const router = useRouter()

    console.log(router.query)

    return <h1>This is catch all router example</h1>

}