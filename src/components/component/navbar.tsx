import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AvatarImage, Avatar } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  return (
    <nav className="bg-[#0E0C17] px-4 py-2 flex items-center justify-between fixed top-0 left-0 w-screen z-10 border-b-2 border-[#2A2931]">
      <div className="flex flex-row items-center space-x-24">
        <div>
          <FlagIcon className="h-7 w-7 text-white inline mr-1" />
          <span className="text-xl font-semibold text-white">
            Constellation
          </span>
        </div>
      </div>
      <Input
        className="w-[50vw] rounded-md bg-[#2A2931] border-[#2A2931] text-white placeholder-gray-300 my-1"
        placeholder="Search"
      />
      <div className="flex items-center space-x-3">
        <Button className="bg-[#2A2931] text-white rounded-full p-2">
          <PhoneIcon className="h-6 w-6" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="bg-[#2A2931] text-white rounded-full p-2">
              <TextIcon className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>You have an order.</DropdownMenuItem>
            <DropdownMenuItem>New Post on ML Community.</DropdownMenuItem>
            <DropdownMenuItem>You have 90 Upvotes.</DropdownMenuItem>
            <DropdownMenuItem>Allumni Event.</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Avatar>
          <AvatarImage alt="User avatar" src="/ProfileImages/profile.jpg" />
        </Avatar>
      </div>
    </nav>
  );
}

function FlagIcon({ props }: { props: any }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function PhoneIcon({ props }: { props: any }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function TextIcon({ props }: { props: any }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  );
}
