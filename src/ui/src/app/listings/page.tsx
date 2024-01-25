/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XrbQ6FhcRIa
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import CarCard from "@/components/CarCard";

export default function Listings() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_3fr_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Sidebar />
        </div>

        <div className="flex flex-col max-w-[80%] mx-auto">
          <header className="flex h-14 lg:h-[54px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" href="#">
              <span className="sr-only">Listings</span>
            </Link>
            <h1 className="font-semibold text-lg md:text-2xl">Car Listings</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-4 md:p-6">
            <CarCard name="2019 Tesla Model 3" price="$100/day">
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                {` The Tesla Model 3 is a compact executive car with an
                all-electric powertrain. It's a sleek and modern vehicle that
                offers a range of 263 to 353 miles, depending on the model. This
                2019 model is in excellent condition and available for daily
                hire.`}
              </p>
            </CarCard>

            <CarCard name="2020 BMW i3" price="$80/day">
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                {`The BMW i3 is a compact electric car designed for city driving.
                With its compact size and agile handling, it's perfect for
                navigating through city traffic. This 2020 model is in excellent
                condition and available for daily hire.`}
              </p>
            </CarCard>
          </main>
        </div>
        <div className="flex flex-col" />
      </div>
    </div>
  );
}
