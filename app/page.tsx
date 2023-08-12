import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="xl:flex block flex-col gap-4 p-6 bg-blue-primary">
        <span className="material-icons md-36">face</span>
        <span className="material-icons-outlined">face</span>
        <span className="material-icons-sharp">description</span>
        <p className="text-green-primary">Hello world</p>
      </div>
    </>
  );
}
