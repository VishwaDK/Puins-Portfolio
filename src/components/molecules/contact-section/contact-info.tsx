function ContactInfoComponent() {
  const whatsappNumber = "94713952772"; 

  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-cols gap-2 items-center px-5 py-2 bg-[#424242] rounded-xl"
    >
      <div className="text-[16px] font-light text-[#FAFAFA]">WhatsApp</div>
    </a>
  );
}

export default ContactInfoComponent;
