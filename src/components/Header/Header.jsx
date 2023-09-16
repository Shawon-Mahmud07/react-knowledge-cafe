import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between items-center border-b-2 p-3 max-w-6xl mx-auto">
      <h1 className="text-3xl font-semibold">React Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
