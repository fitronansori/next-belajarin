const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="h-16">Header</div>
      <main>{children}</main>
    </>
  );
};
export default HomeLayout;
