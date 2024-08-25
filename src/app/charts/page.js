import Header from "../components/header/header";
import ChartForm from "../components/chartForm/chartForm";
import calculateData from "../utils/calculateData";

export default async function Charts(){
    let data = await calculateData();
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Charts</h2>
            <ChartForm content={data} />
        </main>
    )
}