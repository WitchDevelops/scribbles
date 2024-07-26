"use client";

import { Button } from "@/components/ui/button";
import { createDocument } from "@/lib/actions/room.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const AddDocButton = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const AddDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button
      type="submit"
      onClick={AddDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image src="/assets/icons/add.svg" width={16} height={16} alt="" />
      <p className="hidden sm:block">Add new</p>
    </Button>
  );
};
