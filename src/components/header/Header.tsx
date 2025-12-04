import MainNav from "./MainNav";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <TopBar />
      <MainNav />
    </header>
  );
}
