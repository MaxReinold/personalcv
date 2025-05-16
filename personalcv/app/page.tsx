import Main from "./components/main";
import Information from './components/information'

export default function Home() {
  return (
    <div className="grid grid-cols-3 h-full w-full dark">
      <div className="col-span-1 flex justify-center items-center">
        <Main />
      </div>
      <div className="col-span-2">
        <Information />
      </div>
    </div>
  );
}
