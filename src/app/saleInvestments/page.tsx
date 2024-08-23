import Header from "../components/header/header";
import SaleForm from "../components/saleForm/saleForm";
import calculateData from "../utils/calculateData";

/**
 * SaleInvestments component
 *
 * This component renders the sale investment setup page.
 *
 * The component fetches the content from the calculateData function and
 * passes it to the SaleForm component.
 */
export default async function SaleInvestments () {
    const content = await calculateData();
    return (
        <main className="flex min-h-screen flex-col mx-4">
            <Header />
            <h2 className="uppercase text-xl laptop:text-2xl font-bold underline text-center mb-4">Sale Investment Setup</h2>
            <SaleForm content={content} />
        </main>
    )
}