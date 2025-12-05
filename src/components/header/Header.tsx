import MainNav from "./MainNav";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <TopBar />
      <MainNav />
    </header>
  );
}
