import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "../../ui/drawer";
import { Button } from "../../ui/button";
import { Mail } from "lucide-react";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

function EmailMeComponent() {
  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-cols gap-2 items-center px-3 py-2 bg-[#EEEEEE] rounded-xl">
            <Mail size={17} strokeWidth={1} />
            <div className="text-[16px] font-light">Email me</div>
          </div>
        </DrawerTrigger>
        <DrawerContent className=" flex justify-center">
          <DrawerHeader>
            <DrawerTitle>Contact Me</DrawerTitle>
            <DrawerDescription>
              Please fill out the form below to get in touch.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 space-y-4">
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Email Address
              </label>
              <Input placeholder="Enter your email" type="email" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Phone Number
              </label>
              <Input placeholder="Enter your phone number" type="tel" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium text-gray-700">
                Message
              </label>
              <Textarea
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-[100px]"
                placeholder="Type your message here"
                rows={4}
              ></Textarea>
            </div>
          </div>
          <DrawerFooter>
            <Button className="bg-white text-black border 1 hover:bg-gray-100">
              Submit
            </Button>
            <DrawerClose>
              <Button className="w-full">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default EmailMeComponent;
