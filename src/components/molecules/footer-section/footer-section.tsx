function FooterSection() {
  return (
    <div>
      <div className="w-full h-[140px] bg-[#FAFAFA] rounded-tl-[96px] rounded-tr-[96px] flex flex-cols justify-between items-center md:px-[120px]">
        <div className="text-[16px] text-[#424242] font-medium">
          © 2024 All rights Reserved
        </div>
        <div className="text-[16px] text-[#424242] font-medium flex gap-4">
          <a
            href="https://www.behance.net/togodesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Behance
          </a>
          /
          <a
            href="https://dribbble.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dribble
          </a>
          /
          <a
            href="https://www.artstation.com/vishwabulegoda7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Art Station
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
