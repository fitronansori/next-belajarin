import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default HomeLayout;
