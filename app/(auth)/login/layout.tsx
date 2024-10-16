export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <main className="h-screen w-full bg-red-500 grid grid-cols-2">
      <div className="bg-blue-500">{children}</div>
      <div className="bg-purple-50"></div>
    </main>;
  }
  