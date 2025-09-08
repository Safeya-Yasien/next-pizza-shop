import { Footer, Header } from "@/components/common";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="flex-1 py-8">{children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
