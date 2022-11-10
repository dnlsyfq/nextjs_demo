import Hello from "./Hello";
import Image from "next/image";
const Layout = ({children}) => {
    return (
        <div className="container">
            {/*<img src="/image.png" width={200} height={200}/>*/}
            {/*<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/207px-Nextjs-logo.svg.png" width={100} height={100}/>*/}
            <Hello />
            {children}
        </div>
    );
}

export default Layout;