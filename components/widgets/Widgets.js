import { SearchIcon } from "@heroicons/react/outline";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import Contact from "./Contact";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";

function Widgets() {
  const [contacts] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5 mr-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts?.docs.map((contact) => (
        <Contact
          key={contact.id}
          src={contact.data().image}
          name={contact.data().name}
        />
      ))}
    </div>
  );
}

export default Widgets;
