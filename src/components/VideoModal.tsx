import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal = ({ isOpen, onClose }: VideoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh]">
        <DialogHeader>
          <DialogTitle>Virtual Tour - Royal Dubai Palace</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-lg"
            controls
            autoPlay
            muted
            loop
          >
            <source src="https://cdn.pixabay.com/video/2023/05/15/163160-827112938_large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  );
};