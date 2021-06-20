import Image from "next/image";
import Verified from "../verify/Verified";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ name, message, postImage, image, timestamp, verifiedUser }) {
  return (
    <div className="flex flex-col ">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium flex">
              {name}
              {verifiedUser && <Verified />}
            </p>
            {timestamp ? (
              <p className="text-xs text-gray-400">
                {new Date(timestamp?.toDate()).toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-gray-400">Loading</p>
            )}
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}
      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60">
        <div className="inputIcon rounded-none rounded-bl-2xl hover:bg-gray-200">
          <ThumbUpIcon className="h-4 text-blue-500" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none hover:bg-gray-200">
          <ChatAltIcon className="h-4 text-blue-500" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl hover:bg-gray-200">
          <ShareIcon className="h-4 text-blue-500" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
