const Footer = () => {
  return (
    <div className="text-center p-4 bg-gradient-to-br from-[#ffffff] to-[#f8f8dd]">
      <p className="text-sm font-normal">
        the bucket | Made with &#x1F49B; &copy; {new Date().getUTCFullYear()}
      </p>
    </div>
  );
};

export default Footer;
