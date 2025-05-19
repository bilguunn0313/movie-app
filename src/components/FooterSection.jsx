import { Film, Mail, Phone } from "lucide-react";

export const FooterSection = () => {
  return (
    <div>
      <div className="w-full h-[308px] bg-indigo-700 text-[#fafafa]">
        <div className="flex pt-10 px-5 gap-2">
          <Film />
          <p className="">Movie Z</p>
        </div>
        <div className="px-5 py-4">
          <p className="">© 2024 Movie Z. All Rights Reserved.</p>
        </div>

        <div className="flex px-5">
          <div>
            <p className="pb-4">Contact Information</p>
            <div className="flex flex-col">
              <div className="flex">
                <div className="pt-3 ">
                  <Mail />
                </div>
                <div className="pl-2">
                  Email:
                  <p>support@movieZ.com</p>
                </div>
              </div>
              <div className="flex pt-4 ">
                <div className="pt-3">
                  <Phone />
                </div>
                <div className="pl-2">
                  Phone:
                  <p>+976 (11) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-10 pt-10">
            <p>Follow us</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
