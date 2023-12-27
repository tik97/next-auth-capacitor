import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
    const {data: session} = useSession()
    if (session) {
        return (
            <>
                Signed in as {session?.user?.email} <br/>
                <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde" onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br/>
            <button className="mt-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounde" onClick={() => signIn()}>Sign in</button>
        </>
    )
}