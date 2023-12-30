"use client";

import { deleteObject, ref } from "firebase/storage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { db, storage } from "@/firebase";
import { useAppState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { error } from "console";
import { deleteDoc, doc } from "firebase/firestore";

export function DeleteModal() {
  const { user } = useUser();
  const [fileId, setFileId, isDeleteModalOpen, setIsDeleteModalOpen] =
    useAppState((state) => [
      state.fileId,
      state.setFileId,
      state.isDeleteModalOpen,
      state.setIsDeleteModalOpen,
    ]);

  async function deleteFile() {
    if (!user || !fileId) return;

    const fileRef = ref(storage, `users/${user.id}/files/${fileId}`);

    try {
      deleteObject(fileRef).then(async () => {
        deleteDoc(doc(db, "users", user.id, "files", fileId))
          .then(() => {
            console.log("DELETED");
          })
          .finally(() => setIsDeleteModalOpen(false));
      });
    } catch (error) {
      console.log(error);
      setIsDeleteModalOpen(false);
    }
  }

  return (
    <Dialog
      open={isDeleteModalOpen}
      onOpenChange={(isOpen) => {
        setIsDeleteModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            Are you sure you want to delete?
          </DialogTitle>
          <DialogDescription className="text-center text-sm">
            This action cannot be undone. This will permanently delete your
            file!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex space-x-2 py-3">
          <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={() => setIsDeleteModalOpen(false)}
          >
            <span className="sr-only">Cancel</span>
            <span>Cancel</span>
          </Button>
          <Button
            type="submit"
            size="sm"
            className="px-3 flex-1"
            variant={"destructive"}
            onClick={() => deleteFile()}
          >
            <span className="sr-only">Delete</span>
            <span>Delete</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
