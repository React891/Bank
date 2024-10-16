import CreditCard from "@/components/CreditCard";
import Input from "@/components/General/Input";

export default function Home() {
  
  return (
  <main className="h-screen bg-white grid place-content-center">
    {/* <CreditCard /> */}
    <div className="xl:grid flex flex-col  xl:grid-cols-5 ">
      <div className="h-36 w-36 bg-red-500"></div>
      <div className="h-36 w-36 bg-purple-500"></div>
      <div className="h-36 w-36 bg-green-500"></div>
      <div className="h-36 w-36 bg-blue-500"></div>
      <div className="h-36 w-36 bg-pink-500"></div>
    </div>
    {/* <Input error="Please input your name" label="Fullname" name="fullname" value=""/> */}
  </main>
  );
}
