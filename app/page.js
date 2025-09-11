import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>

            <Link className="underline text-blue-500" href="/week-2">
                Week 2 Assignment
            </Link>
        </main>
    );
}
