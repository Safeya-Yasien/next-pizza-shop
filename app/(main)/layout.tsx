import { Footer, Header } from "@/components/common";
import { Toaster } from "@/components/ui/sonner";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="flex-1 py-8">{children}</main>
      <Toaster closeButton position="bottom-right" />
      <Footer />
    </div>
  );
};
export default MainLayout;





