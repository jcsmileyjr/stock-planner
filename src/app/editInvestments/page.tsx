import Header from "../components/header/header";
import EditForm from "../components/editForm/editForm";
import getData from "../utils/getData";

export default async function EditInvestments () {
    const response = await getData();
    const data = await response.json();
    const content = data[0]
    
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Edit Investment Setup</h2>
            <EditForm content={content} />
        </main>
    )
}