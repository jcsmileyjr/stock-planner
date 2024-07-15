import Header from "../components/header/header";
import ConvertForm from "../components/convertForm/convertForm";
import getData from "../utils/getData";
import refineInvestments from "../utils/refineInvestments";

export default async function ConvertInvestments () {
    const response = await getData();
    const data = await response.json();
    const content = refineInvestments(data[0], 'scouted'); // Filter in only scouted investments
    
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Convert Scout Investment</h2>
            <ConvertForm content={content} />
        </main>
    )
}