import Header from "../components/header/header";
import ChartForm from "../components/chartForm/chartForm";

export default async function Charts(){
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Charts</h2>
            <ChartForm />
        </main>
    )
}