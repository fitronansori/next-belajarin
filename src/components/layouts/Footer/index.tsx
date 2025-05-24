const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t">
      <div className="container h-16 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-sm">
            © {year} Belajarin. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
