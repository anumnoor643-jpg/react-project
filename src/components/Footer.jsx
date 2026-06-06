function Footer({ darkMode }) {
  return (
    <footer
      className={`
        mx-4 md:mx-8 mb-4 mt-8
        rounded-3xl
        backdrop-blur-xl
        border
        shadow-lg
        transition-all
        duration-500
        
        ${
          darkMode
            ? `
              bg-white/5
              border-white/10
              text-pink-100
            `
            : `
              bg-white/20
              border-white/30
              text-fuchsia-900
            `
        }
      `}
    >
      <div className="py-5 px-6 text-center">
        <p className="text-sm md:text-base font-medium">
          © 2026 Tiger Group of Companies. All Rights Reserved.
        </p>

        <p className="mt-2 text-xs md:text-sm opacity-90">
          Designed with 💜 by{" "}
          <a
            href="https://www.bytexsolution.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`
              font-bold
              transition-all
              hover:underline
              hover:scale-105
              inline-block
              
              ${
                darkMode
                  ? "text-pink-300"
                  : "text-fuchsia-700"
              }
            `}
          >
            ByteX Solution
          </a>{" "}
          (Anum Noor)
        </p>
      </div>
    </footer>
  );
}

export default Footer;
