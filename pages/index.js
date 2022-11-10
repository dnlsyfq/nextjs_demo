import Link from "next/link";
import Component from "../components/Component";
import Head from "next/head";
const index = ({data}) => {
    return (
        <div>
            <Head>
                <title>
                    Home | Learn Next.js
                </title>
            </Head>
            <h1 className="about">Hello world!</h1>
            <Link  href="/about" style={{color:"brown"}}>
                Go to about page
            </Link>
            <Component />
            {
                data.map(todo =>
                    <h1>{todo.title}</h1>
                )
            }
            <style jsx>
                {
                    `
                      .about{
                        color:yellow
                      }
                    `
                }
            </style>
        </div>
    );
};

export default index;

export async function getStaticProps(){
    const req = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await req.json();
    return {
        props:{data}
    }
}