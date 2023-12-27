import {SessionProvider} from "next-auth/react";
import React from "react";
import 'tailwindcss/tailwind.css';

const App: ({Component, pageProps: {session, ...pageProps}}: {
    Component: any;
    pageProps: { session: any; [p: string]: any }
}) => React.JSX.Element = ({Component, pageProps: {session, ...pageProps}}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}

export default App
