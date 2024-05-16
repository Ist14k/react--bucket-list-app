type FooterProps = {
  className?: string;
};

const Footer = (props: FooterProps) => {
  return (
    <footer className={props.className ? props.className : undefined}>
      <main className="flex items-center justify-between">
        {/* add creator name */}
        <p className="text-center text-sm text-gray-500">
          Created by{" "}
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:underline"
          >
            Istiak Ahmmed Akash
          </a>
        </p>

        {/* copyright */}
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </main>
    </footer>
  );
};

export default Footer;
