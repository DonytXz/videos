import "@/app/globals.css";
import type { Metadata } from "next";
// import Sidebar from "./components/shared/SideBar";

export const metadata: Metadata = {
  title: "Vista previa personalizada | Deepia",
  description: "Revisa los momentos personalizados de tu video antes de publicarlo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex min-h-screen w-full flex-col">{children}</div>
      </div>
    </main>
  );
}
