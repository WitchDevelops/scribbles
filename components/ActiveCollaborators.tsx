import { useOthers } from "@liveblocks/react/suspense";
import Image from "next/image";

export const ActiveCollaborators = () => {
  const others = useOthers();
  const collaborators = others.map((person) => person.info);
  return (
    <ul className="collaborators-list">
      {collaborators.map(({ id, avatar, name, color }) => (
        <li key={id}>
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={100}
              height={100}
              style={{border: `2px solid ${color}`}}
              className="inline-block size-8 rounded-full ring-2"
            />
          )}
          {name}
        </li>
      ))}
    </ul>
  );
};

