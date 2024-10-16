import Nav from "@/components/Nav/Nav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-screen grida grid-cols-[280px_1fr]">
      {/* <div className="h-full overflow-y-auto">
        <Nav />
      </div> */}
      <div className="bg-blue-500">{children}</div>
    </main>
  );
}
