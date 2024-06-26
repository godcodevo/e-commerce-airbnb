import Container from "../Container";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <button className="w-full">Click</button>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
